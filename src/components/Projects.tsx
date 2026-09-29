import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import {
  ExternalLink,
  Shield,
  Calculator,
  Cpu,
  Globe,
  Terminal,
  ChevronRight,
  PlusCircle,
} from 'lucide-react';

const projectIcons: Record<string, React.ElementType> = {
  'python-calculator': Calculator,
  'cybersecurity-projects': Shield,
  'c-programming-projects': Cpu,
  'personal-website': Globe,
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Cybersecurity', label: 'Cybersecurity' },
    { id: 'Python Programming', label: 'Python' },
    { id: 'C Programming', label: 'C Systems' },
    { id: 'Web Development', label: 'Web' },
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section id="projects" className="py-24 bg-[#070b13] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Engineering & Security Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Realized software implementations, security analysis tools, and low-level system utilities developed throughout my cybersecurity studies.
            </p>
          </div>

          {/* Filter Bar (Segmented Controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  filter === cat.id
                    ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = projectIcons[project.id] || Terminal;
            return (
              <div
                key={project.id}
                className="group relative rounded-xl bg-slate-900/50 border border-slate-800/90 hover:border-emerald-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-emerald-950/20"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon, Category & Status */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Unboxed Metadata without pills */}
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <span>{project.category}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-emerald-400/90">{project.completedDate}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Technologies Checklist */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono bg-slate-800/80 border border-slate-700/60 rounded text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    Status: <strong className="text-slate-300">{project.status}</strong>
                  </span>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg transition-all duration-150 inline-flex items-center gap-1.5 group-hover:shadow-md group-hover:shadow-emerald-500/20 whitespace-nowrap"
                  >
                    <span>View Project</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Extensible Project Placeholder for Akok */}
          <div className="rounded-xl border-2 border-dashed border-slate-800 p-6 sm:p-7 flex flex-col items-center justify-center text-center space-y-3 bg-slate-900/20 hover:border-slate-700 transition-colors">
            <div className="p-3 rounded-full bg-slate-800/60 text-slate-400">
              <PlusCircle className="w-6 h-6 text-emerald-400/80" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-200">
                Upcoming Academic & Security Research
              </h4>
              <p className="text-xs text-slate-400 max-w-sm mt-1">
                New projects from upcoming University of Juba coursework and cybersecurity certifications will be documented here.
              </p>
            </div>
            <a
              href="#contact"
              className="text-xs font-mono text-emerald-400 hover:underline pt-1 inline-flex items-center gap-1"
            >
              <span>Suggest a collaboration</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
