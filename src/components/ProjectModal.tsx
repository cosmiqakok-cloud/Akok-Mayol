import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import {
  X,
  Code2,
  Play,
  CheckCircle2,
  Copy,
  Check,
  Shield,
  Calculator,
  Terminal,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'demo'>('overview');
  const [copied, setCopied] = useState(false);

  // Demo state for Calculator
  const [calcInput, setCalcInput] = useState('');
  const [calcResult, setCalcResult] = useState<string>('0');
  const [calcHistory, setCalcHistory] = useState<string[]>([]);

  // Demo state for Port Scanner
  const [scanTarget, setScanTarget] = useState('192.168.1.105');
  const [isScanning, setIsScanning] = useState(false);
  const [scanLogs, setScanLogs] = useState<string[]>([
    '[*] Ready. Enter target IP or host and click "Run Defensive Audit".',
  ]);

  // Demo state for C XOR Cipher
  const [cipherText, setCipherText] = useState('University of Juba - Cyber Defense');
  const [cipherKey, setCipherKey] = useState('SECKEY2024');
  const [cipherOutput, setCipherOutput] = useState('');

  if (!project) return null;

  const copyCode = () => {
    if (project.codeSnippet?.code) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Safe calculator evaluation
  const handleCalcButton = (val: string) => {
    if (val === 'C') {
      setCalcInput('');
      setCalcResult('0');
    } else if (val === '=') {
      try {
        // Basic safe arithmetic parser for numbers and +, -, *, /, %, (, )
        const sanitized = calcInput.replace(/[^0-9+\-*/.()]/g, '');
        if (!sanitized) return;
        // eslint-disable-next-line no-eval
        const res = Function(`"use strict"; return (${sanitized})`)();
        setCalcResult(String(res));
        setCalcHistory((prev) => [`${sanitized} = ${res}`, ...prev.slice(0, 4)]);
      } catch (e) {
        setCalcResult('Syntax Error');
      }
    } else {
      setCalcInput((prev) => prev + val);
    }
  };

  // Port scanner runner
  const runPortScan = () => {
    setIsScanning(true);
    setScanLogs([`[*] Initializing non-intrusive TCP socket probe against: ${scanTarget}...`]);

    setTimeout(() => {
      setScanLogs((prev) => [
        ...prev,
        '[*] Resolving network route & interface... OK (eth0)',
        '[*] Probing common attack surface ports (21, 22, 53, 80, 443, 3306)...',
      ]);
    }, 600);

    setTimeout(() => {
      setScanLogs((prev) => [
        ...prev,
        '[+] Port 22/tcp  (SSH - OpenSSH 8.9p1)   -> OPEN',
        '[-] Port 53/tcp  (DNS)                   -> CLOSED',
        '[+] Port 80/tcp  (HTTP - Nginx 1.24)     -> OPEN',
        '[+] Port 443/tcp (HTTPS - TLS 1.3)       -> OPEN',
        '[-] Port 3306/tcp(MySQL)                 -> FILTERED (Firewall Active)',
        '[✓] Audit Complete. 3 open ports detected. Suggested remediation: Restrict SSH to VPN whitelist.',
      ]);
      setIsScanning(false);
    }, 1600);
  };

  // XOR Cipher algorithm demonstration
  const runXorCipher = () => {
    if (!cipherText || !cipherKey) return;
    const keyChars = cipherKey.split('');
    let hexResult = '';
    for (let i = 0; i < cipherText.length; i++) {
      const charCode = cipherText.charCodeAt(i);
      const keyCode = keyChars[i % keyChars.length].charCodeAt(0);
      const xorVal = charCode ^ keyCode;
      hexResult += ('0' + xorVal.toString(16)).slice(-2).toUpperCase() + ' ';
    }
    setCipherOutput(hexResult.trim());
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="bg-[#080d16] border border-slate-700/80 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-[#0a0f1a] border-b border-slate-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{project.completedDate}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-300 font-semibold">{project.status}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center px-4 sm:px-6 bg-[#090e18] border-b border-slate-800 text-xs font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 border-b-2 font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'overview'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Architecture & Features</span>
          </button>

          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`py-3 px-4 border-b-2 font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'code'
                  ? 'border-emerald-400 text-emerald-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Source Preview</span>
            </button>
          )}

          {project.demoType && (
            <button
              onClick={() => setActiveTab('demo')}
              className={`py-3 px-4 border-b-2 font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'demo'
                  ? 'border-emerald-400 text-emerald-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Play className="w-4 h-4" />
              <span>Interactive Sandbox</span>
            </button>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 text-sm text-slate-300">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Project Description
                </h4>
                <p className="leading-relaxed text-slate-200 text-base">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Key Technical Features
                </h4>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CODE SNIPPET */}
          {activeTab === 'code' && project.codeSnippet && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  File: <strong className="text-white">{project.codeSnippet.filename}</strong>
                </span>
                <button
                  onClick={copyCode}
                  className="px-3 py-1 text-xs font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors inline-flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#04070d]">
                <pre className="p-4 overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: INTERACTIVE DEMO */}
          {activeTab === 'demo' && (
            <div className="space-y-6">
              {project.demoType === 'calculator' && (
                <div className="max-w-md mx-auto p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <Calculator className="w-4 h-4" />
                      <span>Python AST Calculator Sandbox</span>
                    </div>
                  </div>

                  {/* Calculator Display */}
                  <div className="p-3 bg-[#05080e] rounded-lg border border-slate-800 text-right space-y-1">
                    <div className="text-xs font-mono text-slate-400 h-5 overflow-x-auto">
                      {calcInput || '0'}
                    </div>
                    <div className="text-2xl font-mono font-bold text-emerald-400">
                      {calcResult}
                    </div>
                  </div>

                  {/* Calculator Keypad */}
                  <div className="grid grid-cols-4 gap-2 text-sm font-mono font-semibold">
                    {['C', '(', ')', '/'].map((k) => (
                      <button
                        key={k}
                        onClick={() => handleCalcButton(k)}
                        className="py-2.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-400 transition-colors"
                      >
                        {k}
                      </button>
                    ))}
                    {['7', '8', '9', '*'].map((k) => (
                      <button
                        key={k}
                        onClick={() => handleCalcButton(k)}
                        className={`py-2.5 rounded transition-colors ${
                          ['*'].includes(k)
                            ? 'bg-slate-800 hover:bg-slate-700 text-emerald-400'
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-200'
                        }`}
                      >
                        {k}
                      </button>
                    ))}
                    {['4', '5', '6', '-'].map((k) => (
                      <button
                        key={k}
                        onClick={() => handleCalcButton(k)}
                        className={`py-2.5 rounded transition-colors ${
                          ['-'].includes(k)
                            ? 'bg-slate-800 hover:bg-slate-700 text-emerald-400'
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-200'
                        }`}
                      >
                        {k}
                      </button>
                    ))}
                    {['1', '2', '3', '+'].map((k) => (
                      <button
                        key={k}
                        onClick={() => handleCalcButton(k)}
                        className={`py-2.5 rounded transition-colors ${
                          ['+'].includes(k)
                            ? 'bg-slate-800 hover:bg-slate-700 text-emerald-400'
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-200'
                        }`}
                      >
                        {k}
                      </button>
                    ))}
                    {['0', '.', '=', '%'].map((k) => (
                      <button
                        key={k}
                        onClick={() => handleCalcButton(k)}
                        className={`py-2.5 rounded transition-colors ${
                          k === '='
                            ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold'
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-200'
                        }`}
                      >
                        {k}
                      </button>
                    ))}
                  </div>

                  {/* History Log */}
                  {calcHistory.length > 0 && (
                    <div className="pt-2 border-t border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                      <span className="text-[11px] text-slate-400 uppercase">Recent Tape:</span>
                      {calcHistory.map((item, idx) => (
                        <div key={idx} className="truncate">
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {project.demoType === 'portscanner' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <div className="flex-1 w-full flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg">
                      <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                      <input
                        type="text"
                        value={scanTarget}
                        onChange={(e) => setScanTarget(e.target.value)}
                        placeholder="Target IP / Host"
                        className="bg-transparent border-0 outline-none text-white text-xs font-mono w-full"
                      />
                    </div>
                    <button
                      onClick={runPortScan}
                      disabled={isScanning}
                      className="w-full sm:w-auto px-4 py-2 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 text-slate-950 font-semibold text-xs rounded-lg transition-colors whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      {isScanning ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Scanning...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5" />
                          <span>Run Defensive Audit</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Scan Terminal Output */}
                  <div className="p-4 bg-[#05080e] rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1 min-h-[160px]">
                    {scanLogs.map((log, i) => (
                      <div
                        key={i}
                        className={
                          log.startsWith('[+]')
                            ? 'text-emerald-400 font-medium'
                            : log.startsWith('[✓]')
                            ? 'text-cyan-300 font-semibold pt-1'
                            : 'text-slate-400'
                        }
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.demoType === 'encryptor' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400 uppercase">
                        Plaintext / File Buffer Input:
                      </label>
                      <input
                        type="text"
                        value={cipherText}
                        onChange={(e) => setCipherText(e.target.value)}
                        className="w-full px-3 py-2 bg-[#05080e] border border-slate-800 rounded text-slate-200 text-xs font-mono outline-none focus:border-emerald-500/50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400 uppercase">
                        Symmetric Cipher Key:
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={cipherKey}
                          onChange={(e) => setCipherKey(e.target.value)}
                          className="flex-1 px-3 py-2 bg-[#05080e] border border-slate-800 rounded text-slate-200 text-xs font-mono outline-none focus:border-emerald-500/50"
                        />
                        <button
                          onClick={runXorCipher}
                          className="px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs rounded transition-colors whitespace-nowrap"
                        >
                          Execute Cipher
                        </button>
                      </div>
                    </div>

                    {cipherOutput && (
                      <div className="pt-2 space-y-1">
                        <div className="text-xs font-mono text-emerald-400 uppercase">
                          Encrypted Hex Stream Output:
                        </div>
                        <div className="p-3 bg-[#05080e] rounded border border-emerald-500/30 font-mono text-xs text-emerald-300 break-all select-all">
                          {cipherOutput}
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Re-running the same XOR operation with the identical key restores the original plaintext with zero data loss.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {project.demoType === 'website' && (
                <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <h5 className="font-semibold text-white">Current Architecture Snapshot</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    You are currently experiencing this exact personal portfolio live. It incorporates real-time interactive HTML5 canvas rendering, an integrated cyber shell emulator, zero-pill typography, and responsive mobile architecture.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <a
                      href="#home"
                      onClick={onClose}
                      className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Return to Home</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0a0f1a] border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            {project.title} · University of Juba Cybersecurity Portfolio
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
