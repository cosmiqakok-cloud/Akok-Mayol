import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { CyberCanvas } from './CyberCanvas';
import { TerminalWidget } from './TerminalWidget';
import {
  ArrowDown,
  Mail,
  Shield,
  MapPin,
  GraduationCap,
  Terminal as TerminalIcon,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'visual' | 'terminal'>('visual');

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden bg-[#070b13] cyber-grid"
    >
      {/* Dynamic Cyber Interactive Network Canvas */}
      <CyberCanvas className="z-0" />

      {/* Radial glow backdrop */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Header */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-emerald-400/90">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Cybersecurity Undergraduate</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-400">
                <GraduationCap className="w-3.5 h-3.5 text-slate-500" />
                <span>University of Juba</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>South Sudan</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  {personalInfo.shortName}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 tracking-tight">
                {personalInfo.profession} at the {personalInfo.university}
              </h2>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              I am passionate about technology, cybersecurity, programming, and learning. I dedicate my time to understanding computer security defenses, network architecture, and crafting secure software in C and Python to safeguard digital infrastructure.
            </p>

            {/* Quick Highlights Bar */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-300">
              <div className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-lg">
                <span className="block text-slate-400 text-[11px]">Department</span>
                <span className="font-semibold text-white">Cybersecurity</span>
              </div>
              <div className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-lg">
                <span className="block text-slate-400 text-[11px]">Primary Languages</span>
                <span className="font-semibold text-white">Python · C · Web</span>
              </div>
              <div className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-lg col-span-2 sm:col-span-1">
                <span className="block text-slate-400 text-[11px]">Location</span>
                <span className="font-semibold text-white">{personalInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-150 inline-flex items-center gap-2 group whitespace-nowrap"
              >
                <span>About Me</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-150 inline-flex items-center gap-2 whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>

              <button
                type="button"
                onClick={() => setActiveTab(activeTab === 'terminal' ? 'visual' : 'terminal')}
                className="px-4 py-3 text-sm font-mono text-emerald-400 hover:text-emerald-300 bg-emerald-950/20 hover:bg-emerald-950/40 border border-emerald-500/30 rounded-lg transition-all duration-150 inline-flex items-center gap-2 whitespace-nowrap"
              >
                <TerminalIcon className="w-4 h-4" />
                <span>{activeTab === 'terminal' ? 'View Profile Card' : 'Launch Cyber Shell'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase or Interactive Terminal */}
          <div className="lg:col-span-5">
            {activeTab === 'visual' ? (
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Circuit border effect */}
                <div className="relative p-1.5 rounded-2xl bg-gradient-to-b from-emerald-500/30 via-slate-800 to-slate-900 shadow-2xl">
                  <div className="relative rounded-xl overflow-hidden bg-[#0a0f19] border border-slate-800/80">
                    {/* Top status header */}
                    <div className="px-4 py-2.5 bg-[#0d1320] border-b border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-slate-300 font-medium">UOJ-CS-LAB // COMPUTER LAB</span>
                      </div>
                      <span className="text-emerald-400 text-[11px] flex items-center gap-1 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        ON CAMPUS
                      </span>
                    </div>

                    {/* University of Juba Computer Lab Photo */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-slate-950 group">
                      <img
                        src="/src/assets/images/university_juba_lab_1790672208061.jpg"
                        alt="University of Juba Computer Lab - Cybersecurity students pointing up at the entrance sign"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f19] via-transparent to-transparent opacity-85" />

                      {/* Floating status tag */}
                      <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0a0f19]/90 backdrop-blur-md border border-slate-800 rounded-lg">
                        <div className="flex items-center justify-between text-xs">
                          <div>
                            <p className="font-semibold text-white">University of Juba Computer Lab</p>
                            <p className="text-slate-400 text-[11px]">School of Computer Science & IT · Cybersecurity</p>
                          </div>
                          <span className="text-emerald-400 font-mono text-[11px] whitespace-nowrap">Juba, S. Sudan</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom terminal callout */}
                    <div className="p-4 bg-[#090d16] border-t border-slate-800/80 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <p className="text-xs text-slate-400">Interactive Cybersecurity Terminal</p>
                        <p className="text-xs font-mono text-emerald-400">akok@juba-sec:~$ help</p>
                      </div>
                      <button
                        onClick={() => setActiveTab('terminal')}
                        className="px-3 py-1.5 text-xs font-mono text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>Open Shell</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <TerminalWidget
                  isFloatingModal={false}
                  onClose={() => setActiveTab('visual')}
                />
              </div>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-16 pb-4 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="p-2 text-slate-500 hover:text-emerald-400 transition-colors duration-200 flex flex-col items-center gap-1 text-xs font-mono"
          >
            <span>Explore Portfolio</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
