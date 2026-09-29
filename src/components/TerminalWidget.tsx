import React, { useEffect, useRef, useState } from 'react';
import { personalInfo, skillsData, projectsData, educationData } from '../data/portfolioData';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';

interface TerminalLine {
  id: string;
  type: 'command' | 'output' | 'error' | 'success' | 'system';
  text: string;
}

interface TerminalWidgetProps {
  isOpen?: boolean;
  onClose?: () => void;
  isFloatingModal?: boolean;
}

export const TerminalWidget: React.FC<TerminalWidgetProps> = ({
  isOpen = true,
  onClose,
  isFloatingModal = false,
}) => {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      type: 'system',
      text: 'Akok Mayol Cyber Shell v1.0.4 [University of Juba - Security Terminal]',
    },
    {
      id: 'init-2',
      type: 'system',
      text: 'Type "help" to view available security commands or click the shortcut triggers below.',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);
  const [isExpanded, setIsExpanded] = useState(false);
  const terminalBottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    // Add command to history
    const cmdLine: TerminalLine = {
      id: `cmd-${Date.now()}`,
      type: 'command',
      text: `akok@juba-sec:~$ ${trimmed}`,
    };

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryPointer(-1);

    const parts = trimmed.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    const newOutputs: TerminalLine[] = [];

    switch (command) {
      case 'help':
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: `AVAILABLE CYBER COMMANDS:
  whoami       - Display identity and academic status
  about        - View background bio & security interests
  skills       - List core technical proficiencies & systems
  projects     - List current security & engineering projects
  education    - University of Juba & secondary records
  contact      - Display verified contact email & location
  ping [host]  - Send simulated ICMP echo packets
  cat [file]   - Read text assets (e.g. cat bio.txt, cat skills.txt)
  clear        - Reset the terminal buffer
  date         - Print local cybersecurity node time`,
        });
        break;

      case 'whoami':
      case 'id':
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'success',
          text: `uid=1000(akok) gid=1000(akok) groups=1000(akok),4(adm),27(sudo),101(cybersec-juba)
NAME: ${personalInfo.fullName} (${personalInfo.shortName})
ROLE: ${personalInfo.profession}
CAMPUS: ${personalInfo.university} - ${personalInfo.department}
LOCATION: ${personalInfo.location}`,
        });
        break;

      case 'about':
      case 'bio':
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: `${personalInfo.shortName}: ${personalInfo.bioIntro}\n\nCore Interests: Defensive Network Architecture, Memory Vulnerability Analysis (C), Python Security Automation, and Web Application Security.`,
        });
        break;

      case 'skills':
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: skillsData
            .map((s) => `[${s.level.padEnd(16)}] ${s.name} : ${s.topics.slice(0, 3).join(', ')}`)
            .join('\n'),
        });
        break;

      case 'projects':
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: projectsData
            .map((p, idx) => `${idx + 1}. ${p.title} (${p.category}) - ${p.shortDescription}`)
            .join('\n\n'),
        });
        break;

      case 'education':
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: educationData
            .map(
              (e) => `>> ${e.institution} [${e.period}]\n   ${e.degree}\n   ${e.description}`
            )
            .join('\n\n'),
        });
        break;

      case 'contact':
      case 'email':
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'success',
          text: `Direct Email: ${personalInfo.email}\nLocation: ${personalInfo.location}\nAcademic Department: ${personalInfo.department}, ${personalInfo.university}`,
        });
        break;

      case 'ping': {
        const target = args[0] || 'university-of-juba.edu.ss';
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: `PING ${target} (41.77.20.10) 56(84) bytes of data.
64 bytes from 41.77.20.10: icmp_seq=1 ttl=57 time=21.4 ms
64 bytes from 41.77.20.10: icmp_seq=2 ttl=57 time=19.8 ms
64 bytes from 41.77.20.10: icmp_seq=3 ttl=57 time=20.2 ms
--- ${target} ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max = 19.8/20.4/21.4 ms`,
        });
        break;
      }

      case 'cat': {
        const targetFile = args[0] ? args[0].toLowerCase() : '';
        if (targetFile === 'bio.txt' || targetFile === 'about.txt') {
          newOutputs.push({
            id: `out-${Date.now()}-1`,
            type: 'output',
            text: personalInfo.fullBio,
          });
        } else if (targetFile === 'skills.txt') {
          newOutputs.push({
            id: `out-${Date.now()}-1`,
            type: 'output',
            text: skillsData.map((s) => `* ${s.name}: ${s.description}`).join('\n'),
          });
        } else {
          newOutputs.push({
            id: `out-${Date.now()}-1`,
            type: 'error',
            text: `cat: ${args[0] || 'file'}: No such file. Try "cat bio.txt" or "cat skills.txt"`,
          });
        }
        break;
      }

      case 'date':
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: new Date().toUTCString() + ' (Security Node Time)',
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        if (onClose) {
          onClose();
          return;
        }
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'system',
          text: 'Session cannot be closed in embedded mode.',
        });
        break;

      default:
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'error',
          text: `zsh: command not found: ${command}. Type "help" for a list of valid commands.`,
        });
        break;
    }

    setHistory((prev) => [...prev, cmdLine, ...newOutputs]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextPointer =
          historyPointer === -1
            ? commandHistory.length - 1
            : Math.max(0, historyPointer - 1);
        setHistoryPointer(nextPointer);
        setInputVal(commandHistory[nextPointer]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer !== -1) {
        const nextPointer = historyPointer + 1;
        if (nextPointer >= commandHistory.length) {
          setHistoryPointer(-1);
          setInputVal('');
        } else {
          setHistoryPointer(nextPointer);
          setInputVal(commandHistory[nextPointer]);
        }
      }
    }
  };

  const quickPrompts = ['whoami', 'skills', 'projects', 'education', 'contact', 'clear'];

  if (!isOpen) return null;

  return (
    <div
      className={`flex flex-col bg-[#060910] border border-emerald-950/70 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 font-mono text-xs sm:text-sm ${
        isFloatingModal
          ? 'fixed inset-4 sm:inset-10 z-50 max-w-4xl mx-auto backdrop-blur-xl bg-[#060910]/95 border-emerald-500/30'
          : isExpanded
          ? 'h-[580px] w-full border-emerald-500/40 shadow-emerald-950/30'
          : 'h-[380px] sm:h-[420px] w-full'
      }`}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#090e17] border-b border-slate-800/80 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 text-slate-300 font-mono text-xs font-medium">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>akok@juba-cybersec: ~</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-slate-400">
          {!isFloatingModal && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={isExpanded ? 'Collapse terminal' : 'Expand terminal'}
              className="p-1 hover:text-emerald-400 transition-colors rounded hover:bg-slate-800"
            >
              {isExpanded ? (
                <Minimize2 className="w-3.5 h-3.5" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5" />
              )}
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              aria-label="Close terminal"
              className="p-1 hover:text-rose-400 transition-colors rounded hover:bg-slate-800"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Terminal Output Area */}
      <div
        className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-2 bg-[#05080e]/95 text-slate-300 font-mono selection:bg-emerald-500/30"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line) => {
          if (line.type === 'command') {
            return (
              <div key={line.id} className="text-emerald-400 font-semibold flex items-start gap-1">
                <span>{line.text}</span>
              </div>
            );
          }
          if (line.type === 'error') {
            return (
              <div key={line.id} className="text-rose-400/90 pl-3 border-l border-rose-500/40">
                {line.text}
              </div>
            );
          }
          if (line.type === 'success') {
            return (
              <div key={line.id} className="text-emerald-300 whitespace-pre-wrap pl-3 border-l border-emerald-500/40">
                {line.text}
              </div>
            );
          }
          if (line.type === 'system') {
            return (
              <div key={line.id} className="text-slate-400 text-xs italic">
                {line.text}
              </div>
            );
          }
          return (
            <div key={line.id} className="text-slate-200 whitespace-pre-wrap leading-relaxed">
              {line.text}
            </div>
          );
        })}
        <div ref={terminalBottomRef} />
      </div>

      {/* Interactive Command Prompt Line */}
      <div className="p-2 sm:p-3 bg-[#080d16] border-t border-slate-800/90">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputVal);
          }}
          className="flex items-center gap-2"
        >
          <span className="text-emerald-400 shrink-0 select-none font-semibold">
            akok@juba-sec:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command ('help', 'skills', 'projects')..."
            aria-label="Terminal command input"
            className="flex-1 bg-transparent border-0 outline-none text-slate-100 placeholder:text-slate-600 font-mono text-xs sm:text-sm focus:ring-0"
            autoFocus={false}
          />
          <button
            type="submit"
            aria-label="Execute command"
            className="p-1.5 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Quick Click Prompts */}
        <div className="flex flex-wrap items-center gap-1.5 mt-2 pt-2 border-t border-slate-800/60">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            Quick:
          </span>
          {quickPrompts.map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 text-[11px] font-mono bg-slate-900 hover:bg-emerald-950/60 text-slate-300 hover:text-emerald-300 border border-slate-800 hover:border-emerald-600/40 rounded transition-colors whitespace-nowrap"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
