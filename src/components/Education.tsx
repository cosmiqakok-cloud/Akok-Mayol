import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#080d16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            Academic Background & Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Formal studies in cybersecurity, systems architecture, physical sciences, and applied mathematics.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {educationData.map((item, index) => {
            const isUniversity = item.id === 'univ-juba';
            return (
              <div key={item.id} className="relative group">
                {/* Timeline node marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isUniversity
                      ? 'border-emerald-400 bg-slate-900 shadow-md shadow-emerald-500/20 text-emerald-400'
                      : 'border-slate-600 bg-slate-900 text-slate-400'
                  }`}
                >
                  {isUniversity ? (
                    <GraduationCap className="w-3.5 h-3.5" />
                  ) : (
                    <Award className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Content Card */}
                <div className="p-6 sm:p-7 rounded-xl bg-slate-900/60 border border-slate-800/90 group-hover:border-emerald-500/40 transition-all duration-200 space-y-4">
                  {/* Top Bar with Period & Location */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>

                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  {/* Institution & Degree */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.institution}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mt-1 font-medium">
                      <span>{item.degree}</span>
                      {item.department && (
                        <>
                          <span aria-hidden="true" className="text-slate-600">·</span>
                          <span className="text-emerald-400/90">{item.department}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* University Campus / Lab Photo for University of Juba */}
                  {isUniversity && (
                    <div className="pt-2">
                      <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-950 max-w-lg">
                        <img
                          src="/src/assets/images/university_juba_lab_1790672208061.jpg"
                          alt="University of Juba Computer Lab - Cybersecurity students pointing up at the building sign"
                          referrerPolicy="no-referrer"
                          className="w-full h-56 sm:h-64 object-cover object-top hover:scale-102 transition-transform duration-300"
                        />
                        <div className="p-2.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span>University of Juba Computer Lab</span>
                          <span className="text-emerald-400">School of CS & IT</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Highlights Bullet List */}
                  <div className="pt-2 border-t border-slate-800/80 space-y-2">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Key Highlights & Coursework:
                    </div>
                    <ul className="space-y-1.5">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
