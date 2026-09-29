import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  ShieldCheck,
  Cpu,
  Network,
  Terminal,
  MapPin,
  GraduationCap,
  Mail,
  FileText,
  CheckCircle2,
  X,
} from 'lucide-react';

export const About: React.FC = () => {
  const [showCvModal, setShowCvModal] = useState(false);

  const pillars = [
    {
      title: 'Computer Security',
      desc: 'Investigating defensive countermeasures, access control lists, firewalls, and modern vulnerability assessment models to protect computing assets.',
      icon: ShieldCheck,
      color: 'text-emerald-400',
    },
    {
      title: 'Systems & C Programming',
      desc: 'Developing low-level software in C, understanding memory management, pointer manipulation, and buffer safety to eliminate binary exploits.',
      icon: Cpu,
      color: 'text-cyan-400',
    },
    {
      title: 'Networking & Protocols',
      desc: 'Analyzing TCP/IP network packets, routing fundamentals, socket communication, and port services across diverse network topologies.',
      icon: Network,
      color: 'text-teal-400',
    },
    {
      title: 'Python Automation & Scripting',
      desc: 'Engineering automated diagnostic scripts, network scanners, mathematical engines, and command-line utilities for security workflows.',
      icon: Terminal,
      color: 'text-emerald-300',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#080d16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            Background & Technical Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Passionate about securing computer systems, building reliable software, and engineering solutions to digital security challenges.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/90 shadow-sm space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <span>Cybersecurity Student at University of Juba</span>
              </h3>
              <p>
                Hello! I am <strong className="text-white font-medium">Akok Mayol Akok</strong>, a dedicated cybersecurity student currently pursuing my studies in the <strong className="text-emerald-400 font-medium">Department of Cybersecurity at the University of Juba</strong> in South Sudan.
              </p>
              <p>
                My passion lies at the intersection of computer security, programming, networking, and technology. I am continuously exploring how digital systems work at both the high-level application layer and the fundamental low-level architecture where memory, processors, and network protocols interact.
              </p>
              <p>
                Whether it is analyzing network traffic, writing defensive security scripts in <strong className="text-white">Python</strong>, mastering the precision of pointer arithmetic in <strong className="text-white">C programming</strong>, or building intuitive web interfaces, I strive for systematic rigor, ethical responsibility, and continuous learning.
              </p>
            </div>

            {/* Core Values / Strengths */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono">
                Academic & Practical Pillars
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80 hover:border-emerald-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <Icon className={`w-4 h-4 ${pillar.color}`} />
                        <h5 className="font-semibold text-white text-sm">{pillar.title}</h5>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                type="button"
                onClick={() => setShowCvModal(true)}
                className="px-4 py-2.5 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>View Academic CV Brief</span>
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Email Akok Directly</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Specs & Fast Facts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl bg-slate-900/70 border border-slate-800 p-6 space-y-6">
              <h3 className="text-lg font-semibold text-white pb-3 border-b border-slate-800 flex items-center justify-between">
                <span>Profile Snapshot</span>
                <span className="text-xs font-mono text-emerald-400">UOJ // 2023–Present</span>
              </h3>

              {/* Authentic Photo Preview in About Me */}
              <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-emerald-500/30 shrink-0 bg-slate-800">
                  <img
                    src="/src/assets/images/akok_mayol_profile_1790671489699.jpg"
                    alt="Akok Mayol - Cybersecurity Student"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="space-y-1 min-w-0">
                  <h4 className="text-sm font-bold text-white truncate">{personalInfo.fullName}</h4>
                  <p className="text-xs text-slate-300 font-mono">Cybersecurity Student</p>
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>University of Juba</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">Full Name</span>
                  <p className="font-semibold text-white">{personalInfo.fullName}</p>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">Known As</span>
                  <p className="font-medium text-slate-200">{personalInfo.shortName}</p>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">University</span>
                  <p className="font-medium text-slate-200 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-400" />
                    <span>{personalInfo.university}</span>
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">Department</span>
                  <p className="font-medium text-slate-200">{personalInfo.department}</p>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">Location</span>
                  <p className="font-medium text-slate-200 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>{personalInfo.location}</span>
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">Direct Contact</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono text-xs text-emerald-400 hover:underline break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Status Box */}
              <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 space-y-1">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
                  Current Status
                </span>
                <p className="text-xs text-slate-300">
                  Actively pursuing undergraduate coursework in cybersecurity, participating in technical labs, and building security tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic CV Summary Modal */}
      {showCvModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div className="bg-[#0a0f18] border border-slate-700 max-w-2xl w-full rounded-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setShowCvModal(false)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 border-b border-slate-800 pb-4">
              <h3 className="text-2xl font-bold text-white">{personalInfo.fullName}</h3>
              <p className="text-sm font-mono text-emerald-400">
                {personalInfo.profession} · {personalInfo.university}
              </p>
              <p className="text-xs text-slate-400">
                {personalInfo.location} · {personalInfo.email}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div>
                <h4 className="font-semibold text-white uppercase font-mono text-xs tracking-wider mb-1">
                  Academic Profile
                </h4>
                <p className="leading-relaxed">
                  Cybersecurity undergraduate student with solid foundations in computer networks, information systems security, C systems programming, and Python automation. Committed to practical security problem-solving, collaborative learning, and defensive infrastructure engineering.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white uppercase font-mono text-xs tracking-wider mb-2">
                  Education
                </h4>
                <div className="space-y-2">
                  <div className="p-3 bg-slate-900/60 rounded border border-slate-800">
                    <div className="flex justify-between font-medium text-white">
                      <span>University of Juba</span>
                      <span className="font-mono text-emerald-400 text-xs">2023 – Present</span>
                    </div>
                    <div className="text-xs text-slate-400">Bachelor of Science in Cybersecurity</div>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded border border-slate-800">
                    <div className="flex justify-between font-medium text-white">
                      <span>Juba Diplomatic Secondary School</span>
                      <span className="font-mono text-emerald-400 text-xs">2022 – 2023</span>
                    </div>
                    <div className="text-xs text-slate-400">Secondary School Certificate (Sciences & Math)</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white uppercase font-mono text-xs tracking-wider mb-2">
                  Key Technical Competencies
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Cybersecurity Principles</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Python Programming</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>C Systems Programming</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Network Protocols & Sockets</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Microsoft Office Suite</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Web Development Basics</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
              >
                Print / Save PDF
              </button>
              <button
                type="button"
                onClick={() => setShowCvModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
