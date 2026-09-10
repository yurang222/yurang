import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, Printer, ArrowUpRight, School, ShieldCheck } from 'lucide-react';

interface ContactFooterProps {
  onPrint: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onPrint }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-[#111111] text-[#F6F5F0] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Modernist dark section header matching the reference image's (연결) Let's talk */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-neutral-400 block mb-2">
            (연결 & 문의)
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6">
            Let’s Connect
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8">
            특수교육 수업 나눔, AI 에듀테크 활용 자료 교류, 사회정서학습 및 행동중재(PBS) 관련 협업과 문의는 언제든 환영합니다.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-xs sm:text-sm tracking-wide hover:bg-neutral-200 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>이메일 보내기</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-800 text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? '복사되었습니다' : personalInfo.email}</span>
            </button>

            <button
              onClick={onPrint}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent text-neutral-300 border border-white/20 font-bold text-xs sm:text-sm tracking-wide hover:border-white hover:text-white transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>포트폴리오 인쇄 / PDF 저장</span>
            </button>
          </div>
        </div>

        {/* Informational Column Blocks matching reference structure */}
        <div className="border-t border-white/10 pt-12 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Teacher Profile */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-1">
              (교원 정보)
            </span>
            <p className="text-base font-bold text-white">{personalInfo.name} ({personalInfo.englishName})</p>
            <p className="text-xs text-neutral-400">{personalInfo.role} · {personalInfo.grade}</p>
            <p className="text-xs text-neutral-400">{personalInfo.payGrade}</p>
            <p className="text-xs text-neutral-400">초등특수학급, 특수학교, 인지치료</p>
          </div>

          {/* Column 2: Affiliation & Office */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-1">
              (소속 교육청 및 학교)
            </span>
            <p className="text-base font-bold text-white">{personalInfo.school}</p>
            <p className="text-xs text-neutral-400">{personalInfo.cityOffice}</p>
            <p className="text-xs text-neutral-400">{personalInfo.districtOffice}</p>
            <p className="text-xs text-neutral-400">초등특수학급 담임교사</p>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-1">
              (빠른 이동)
            </span>
            <div className="flex flex-col items-center md:items-start gap-1 text-xs text-neutral-300">
              <a href="#about" className="hover:text-white transition-colors">소개 및 인적사항</a>
              <a href="#competencies" className="hover:text-white transition-colors">핵심 역량 & 전문성</a>
              <a href="#experience" className="hover:text-white transition-colors">경력 및 학력 사항</a>
              <a href="#training" className="hover:text-white transition-colors">직무 연수 이수 내역</a>
              <a href="#philosophy" className="hover:text-white transition-colors">수업 철학 & 교육 비전</a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Top Scroll */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 {personalInfo.name} 특수교사 포트폴리오. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors flex items-center gap-1 font-mono uppercase text-[11px]"
          >
            <span>Back to Top</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
