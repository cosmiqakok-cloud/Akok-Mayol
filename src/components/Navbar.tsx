import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal as TerminalIcon, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onToggleTerminal?: () => void;
  terminalOpen?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleTerminal, terminalOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#070b13]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-[#070b13]/40 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-base sm:text-lg font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md py-1"
          >
            <ShieldCheck className="w-5 h-5 text-emerald-400 transition-transform group-hover:scale-110" />
            <span className="font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors">
              Akok Mayol
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-slate-300 hover:text-white transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {onToggleTerminal && (
              <button
                onClick={onToggleTerminal}
                title="Toggle interactive cyber shell"
                aria-label="Toggle terminal modal"
                className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border transition-colors ${
                  terminalOpen
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/40'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border-slate-700/60'
                }`}
              >
                <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Shell</span>
              </button>
            )}

            <a
              href="#contact"
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg shadow-sm hover:shadow-emerald-500/20 transition-all duration-150 whitespace-nowrap"
            >
              Contact Me
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070b13]/98 border-b border-slate-800 px-5 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-900/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            {onToggleTerminal && (
              <button
                onClick={() => {
                  onToggleTerminal();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-emerald-400 bg-slate-900 rounded-md border border-emerald-500/30 w-full justify-center"
              >
                <TerminalIcon className="w-4 h-4" />
                <span>Launch Interactive Shell</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
