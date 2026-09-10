import React, { useState } from 'react';
import { competencies } from '../data/portfolioData';
import { CompetencyItem } from '../types';
import { ArrowDownRight, Sparkles, HeartHandshake, BookOpenCheck, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export const CompetenciesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('ai-edtech');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-rose-600" />;
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="competencies" className="w-full py-12 sm:py-16 border-b border-black/15 bg-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header with Arrow matching reference layout: (내가 하는 일) ↘ */}
        <div className="flex items-center justify-between border-b border-black pb-4 mb-8">
          <h3 className="text-base sm:text-lg font-bold text-black tracking-tight flex items-center gap-2">
            <span>(핵심 역량 & 전문성)</span>
          </h3>
          <ArrowDownRight className="w-6 h-6 text-black" />
        </div>

        {/* Competencies Stacked List matching reference editorial layout */}
        <div className="divide-y divide-black/20">
          {competencies.map((comp) => {
            const isExpanded = expandedId === comp.id;
            return (
              <div
                key={comp.id}
                className="py-8 group transition-colors"
              >
                <div 
                  onClick={() => toggleExpand(comp.id)}
                  className="cursor-pointer flex flex-col md:flex-row md:items-start justify-between gap-4"
                >
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-400 mb-1">
                      <span>KEY COMPETENCY {comp.number}</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black text-[#111111] group-hover:text-neutral-700 transition-colors tracking-tight flex items-center gap-2">
                      {comp.title}
                    </h4>
                    <p className="text-xs font-mono text-neutral-500 mt-1 uppercase tracking-wider">
                      {comp.subtitle}
                    </p>
                  </div>

                  <div className="md:w-2/3 flex flex-col justify-between">
                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                      {comp.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {comp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full bg-black/5 text-[11px] font-semibold text-neutral-700 border border-black/10"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(comp.id);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-bold text-black hover:underline cursor-pointer pt-1"
                      >
                        {isExpanded ? (
                          <>
                            <span>세부 실천 방안 접기</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>세부 실천 방안 보기</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Detailed Action Items & Practices */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-black/10 grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/[0.02] p-5 sm:p-6 rounded-lg">
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-black mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        주요 실천 내용 및 전문성 근거
                      </h5>
                      <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                        {comp.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0"></span>
                            <span className="leading-snug">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-black mb-3 flex items-center gap-1.5">
                        {getIcon(comp.iconName)}
                        특수학급 현장 적용 프로세스
                      </h5>
                      <div className="space-y-2.5">
                        {comp.actionItems.map((action, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-2.5 rounded bg-white/70 border border-black/10 shadow-2xs"
                          >
                            <span className="w-5 h-5 rounded-full bg-black text-white text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-neutral-800">
                              {action}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
