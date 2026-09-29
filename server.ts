import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Determine port according to deployment environment:
// 1. If DEFAULT_APP_PORT is set (e.g. 3000 behind container NGINX listening on 8080), use DEFAULT_APP_PORT
// 2. If NGINX_PORT is set and equal to PORT, use 3000 to avoid EADDRINUSE conflict with NGINX
// 3. Otherwise use PORT or default 3000
function getPort(): number {
  if (process.env.DEFAULT_APP_PORT) {
    return parseInt(process.env.DEFAULT_APP_PORT, 10);
  }
  if (process.env.NGINX_PORT && process.env.PORT === process.env.NGINX_PORT) {
    return 3000;
  }
  if (process.env.PORT) {
    return parseInt(process.env.PORT, 10);
  }
  return 3000;
}

const PORT = getPort();
const distPath = path.resolve(__dirname, 'dist');

// Serve static assets from dist with caching
app.use(
  express.static(distPath, {
    maxAge: '1h',
    etag: true,
  })
);

// Health check endpoint for container / Cloud Run checks
app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

// Single Page Application routing fallback
app.get('*', (_req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(200).send('Application loading...');
  }
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Application server running on http://0.0.0.0:${PORT}`);
});

server.on('error', (err: any) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} in use, attempting fallback...`);
    const fallbackPort = PORT === 3000 ? 8080 : 3000;
    app.listen(fallbackPort, '0.0.0.0', () => {
      console.log(`Application server running on fallback http://0.0.0.0:${fallbackPort}`);
    });
  } else {
    console.error('Server error:', err);
  }
});
