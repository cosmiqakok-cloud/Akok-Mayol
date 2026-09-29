import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Skill } from '../types/portfolio';
import {
  ShieldAlert,
  Code,
  Cpu,
  Globe,
  FileSpreadsheet,
  BrainCircuit,
  MessagesSquare,
  Users,
  Check,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  Code,
  Cpu,
  Globe,
  FileSpreadsheet,
  BrainCircuit,
  MessagesSquare,
  Users,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const categories = [
    { id: 'all', label: 'All Competencies' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'programming', label: 'Programming & Web' },
    { id: 'tools', label: 'Productivity' },
    { id: 'soft-skills', label: 'Professional Skills' },
  ];

  const filteredSkills = skillsData.filter((skill) => {
    if (selectedCategory === 'all') return true;
    return skill.category === selectedCategory;
  });

  return (
    <section id="skills" className="py-24 bg-[#070b13] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Technical & Professional Repertoire
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Expertise
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Combining rigorous defensive cybersecurity fundamentals, systems and automation programming, and collaborative problem-solving.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || Code;
            const isSelected = activeSkill?.id === skill.id;

            return (
              <div
                key={skill.id}
                onClick={() => setActiveSkill(isSelected ? null : skill)}
                className={`group relative rounded-xl p-5 bg-slate-900/50 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-emerald-400 bg-slate-900/80 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-400/50'
                    : 'border-slate-800/90 hover:border-emerald-500/40 hover:bg-slate-900/70'
                }`}
              >
                <div>
                  {/* Card Header: Icon & Level Metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {/* Unboxed metadata without pills */}
                    <span className="text-xs font-mono text-slate-400 group-hover:text-emerald-300 transition-colors">
                      {skill.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Subtopics Checklist */}
                <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Key Focus Areas:
                  </div>
                  {skill.topics.slice(0, 3).map((topic, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{topic}</span>
                    </div>
                  ))}
                  {skill.topics.length > 3 && (
                    <div className="text-[11px] font-mono text-emerald-400/80 pt-1">
                      +{skill.topics.length - 3} more competencies
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Skill Details Callout if selected */}
        {activeSkill && (
          <div className="mt-8 p-6 rounded-xl bg-slate-900/90 border border-emerald-500/40 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-emerald-500/20 text-emerald-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{activeSkill.name}</h4>
                  <p className="text-xs font-mono text-emerald-400">
                    Proficiency: {activeSkill.level}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveSkill(null)}
                className="text-xs font-mono text-slate-400 hover:text-white px-3 py-1 rounded bg-slate-800"
              >
                Close Details
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <h5 className="text-xs font-mono text-slate-400 uppercase mb-2">
                  Practical Application
                </h5>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeSkill.description} Practiced directly through coursework, laboratory exercises at the University of Juba, and independent software development.
                </p>
              </div>

              <div>
                <h5 className="text-xs font-mono text-slate-400 uppercase mb-2">
                  All Documented Competencies
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {activeSkill.topics.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
