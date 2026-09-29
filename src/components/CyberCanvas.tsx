import React, { useEffect, useRef } from 'react';

interface CyberCanvasProps {
  className?: string;
  interactive?: boolean;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

interface Packet {
  sourceIdx: number;
  targetIdx: number;
  progress: number;
  speed: number;
}

export const CyberCanvas: React.FC<CyberCanvasProps> = ({
  className = '',
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Responsive node count based on screen area
    const nodeCount = Math.min(Math.floor((width * height) / 18000), 55);
    const nodes: Node[] = [];
    const packets: Packet[] = [];
    const colors = ['#10b981', '#06b6d4', '#38bdf8', '#34d399'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    // Packet spawn interval
    let lastPacketSpawn = 0;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Randomly spawn cyber data packets along nearby connections
      if (time - lastPacketSpawn > 400 && packets.length < 12) {
        lastPacketSpawn = time;
        const i = Math.floor(Math.random() * nodes.length);
        let closestJ = -1;
        let minD = 130;
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < minD) {
            minD = dist;
            closestJ = j;
          }
        }
        if (closestJ !== -1) {
          packets.push({
            sourceIdx: i,
            targetIdx: closestJ,
            progress: 0,
            speed: 0.015 + Math.random() * 0.015,
          });
        }
      }

      // Update and draw network links
      const maxDistance = 125;
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Move node
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        // Bounce at boundaries
        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Connect with other nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }

        // Mouse link
        if (mouse.active) {
          const mouseDist = Math.hypot(nodeA.x - mouse.x, nodeA.y - mouse.y);
          if (mouseDist < 140) {
            const alpha = (1 - mouseDist / 140) * 0.45;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeA.color;
        ctx.shadowColor = nodeA.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw and update active packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        const src = nodes[pkt.sourceIdx];
        const tgt = nodes[pkt.targetIdx];

        if (src && tgt && pkt.progress <= 1) {
          const px = src.x + (tgt.x - src.x) * pkt.progress;
          const py = src.y + (tgt.y - src.y) * pkt.progress;

          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = '#38bdf8';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          packets.splice(p, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-65 ${className}`}
      aria-hidden="true"
    />
  );
};
