import React from 'react';
import { educationalPhilosophies } from '../data/portfolioData';
import { ArrowDownRight, Quote, Heart, Sparkles, Users } from 'lucide-react';

export const TeachingPhilosophySection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Sparkles className="w-5 h-5 text-black" />;
      case 1:
        return <Heart className="w-5 h-5 text-black" />;
      case 2:
        return <Users className="w-5 h-5 text-black" />;
      default:
        return <Sparkles className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="philosophy" className="w-full py-12 sm:py-16 border-b border-black/15 bg-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-black pb-4 mb-10">
          <h3 className="text-base sm:text-lg font-bold text-black tracking-tight">
            (수업 철학 & 교육 비전)
          </h3>
          <ArrowDownRight className="w-6 h-6 text-black" />
        </div>

        {/* Featured Teacher's Quote Card */}
        <div className="p-8 sm:p-10 rounded-lg bg-white/70 border border-black/15 shadow-sm mb-12 relative overflow-hidden">
          <Quote className="w-12 h-12 text-black/10 absolute -top-1 -left-1 pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">
              TEACHER’S STATEMENT
            </span>
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-black leading-snug tracking-tight mt-3">
              “특수교육은 부족함을 채우는 것이 아니라, 아이가 지닌 고유한 잠재력에 가장 알맞은 사다리를 놓아주는 일입니다.”
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="text-xs sm:text-sm font-bold text-neutral-800">
                특수교사 송경은 (서울백운초등학교)
              </span>
            </div>
          </div>
        </div>

        {/* 3 Core Philosophical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {educationalPhilosophies.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-white/70 border border-black/15 shadow-2xs hover:border-black transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-full bg-black/5 border border-black/10 flex items-center justify-center">
                    {getIcon(idx)}
                  </span>
                  <span className="text-xs font-mono font-bold text-neutral-400">
                    PILLAR 0{idx + 1}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-black text-black tracking-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs text-neutral-500">
                <span className="font-semibold text-neutral-800">현장 실천 가치</span>
                <span className="font-mono text-[11px]">0{idx + 1} / 03</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
