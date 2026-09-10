import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Award, Sparkles, BookOpen, HeartHandshake } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full border-b border-black/15 bg-[#F6F5F0]">
      {/* Full-width visual banner matching the reference editorial layout */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-4 pb-8">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[520px] rounded-lg overflow-hidden border border-black/20 bg-neutral-200 shadow-sm group">
          <img
            src="/src/assets/images/special_ed_hero_1789033546713.jpg"
            alt="특수교육 현장과 에듀테크 학습 공간"
            className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />

          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Top Left Mini Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/90 backdrop-blur-md text-black text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Special Education Portfolio
            </span>
          </div>

          {/* Bottom Right Floating Badge like the reference "GET TEMPLATE" */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
            <div className="px-4 py-2 bg-black/90 backdrop-blur-md text-white text-xs font-bold tracking-wider rounded border border-white/20 shadow-md">
              <span className="text-emerald-400 font-mono">●</span> 서울특별시교육청 서울백운초등학교
            </div>
          </div>

          {/* Bottom Left Overlay Text */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white max-w-xl pr-6">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-300">
              초등특수학급 담임교사 송경은
            </p>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight mt-1 leading-tight text-white drop-shadow-sm">
              AI 에듀테크 & 긍정적 행동중재(PBS) 기반 포용적 특수교육
            </h2>
          </div>
        </div>

        {/* Quick Tag Pills beneath banner */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-700 font-medium">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-3 py-1 rounded-full bg-black/5 border border-black/10 font-semibold text-black">
              특수학교(초등) 정교사 1급
            </span>
            <span className="px-3 py-1 rounded-full bg-black/5 border border-black/10">
              단국대 특수교육대학원 석사
            </span>
            <span className="px-3 py-1 rounded-full bg-black/5 border border-black/10">
              10년차 초등특수교사
            </span>
          </div>
          <div className="text-neutral-500 font-mono text-[11px]">
            서울특별시교육청 소속 · 10년차
          </div>
        </div>
      </div>
    </section>
  );
};
