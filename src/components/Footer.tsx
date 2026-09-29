import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ShieldCheck, ArrowUp, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] border-t border-slate-800/80 text-slate-400 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand & Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="font-bold text-white text-base">{personalInfo.fullName}</span>
            </div>
            <span aria-hidden="true" className="hidden sm:inline text-slate-700">·</span>
            <span className="text-xs text-slate-400 font-mono">
              {personalInfo.profession} · {personalInfo.university}
            </span>
          </div>

          {/* Clean Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-mono"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

        {/* Bottom row: Copyright & academic location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {personalInfo.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{personalInfo.location}</span>
            </span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{personalInfo.email}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
