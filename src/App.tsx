/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalWidget } from './components/TerminalWidget';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function App() {
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b13] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/25 selection:text-emerald-300">
      {/* Fixed Navigation Bar */}
      <Navbar
        onToggleTerminal={() => setTerminalModalOpen(!terminalModalOpen)}
        terminalOpen={terminalModalOpen}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Home / Hero */}
        <Hero />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Skills */}
        <Skills />

        {/* Section 4: Education */}
        <Education />

        {/* Section 5: Projects */}
        <Projects />

        {/* Section 6: Contact */}
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Floating Cyber Shell Trigger Button */}
      <div className="fixed bottom-5 right-5 z-30">
        <button
          onClick={() => setTerminalModalOpen(true)}
          aria-label="Open Interactive Cybersecurity Shell"
          title="Open Cyber Shell"
          className="p-3 bg-slate-900/90 hover:bg-emerald-950 text-emerald-400 border border-emerald-500/40 rounded-full shadow-lg shadow-black/40 hover:shadow-emerald-500/20 backdrop-blur-md transition-all duration-200 group flex items-center gap-2"
        >
          <TerminalIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline font-mono text-xs font-semibold pr-1">
            Shell
          </span>
        </button>
      </div>

      {/* Floating Terminal Modal */}
      {terminalModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
        >
          <div className="w-full max-w-3xl">
            <TerminalWidget
              isFloatingModal={true}
              isOpen={true}
              onClose={() => setTerminalModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
