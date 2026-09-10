import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Printer, Mail, Copy, Check, Menu, X, ArrowUpRight, ExternalLink } from 'lucide-react';

interface HeaderProps {
  onPrint: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onPrint }) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenMarketChannelKpi = () => {
    window.open('/market_channel_kpi.html', '_blank');
  };

  const navLinks = [
    { label: '소개', href: '#about' },
    { label: '핵심 역량', href: '#competencies' },
    { label: '경력 & 학력', href: '#experience' },
    { label: '직무 연수', href: '#training' },
    { label: '교육 철학', href: '#philosophy' },
    { label: '연락처', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F6F5F0]/95 backdrop-blur-md border-b border-black/10 transition-all">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex items-start justify-between">
        {/* Brand Typography matching editorial style in reference image */}
        <div>
          <a href="#" className="group block text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] leading-none uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#222222] mt-1 tracking-tight">
              {personalInfo.role}
            </p>
            <p className="text-xs sm:text-sm font-medium text-neutral-600 tracking-normal mt-0.5">
              ({personalInfo.school})
            </p>
          </a>
        </div>

        {/* Desktop Controls & Badges */}
        <div className="flex items-center gap-3 sm:gap-4 pt-1">
          {/* Experience Counter Badge like the '0' in reference image */}
          <div 
            className="hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-[#111111] text-[#F6F5F0] text-xs font-bold tracking-tight shadow-sm"
            title="총 교육 경력 10년차"
          >
            10Y+
          </div>

          {/* AI 1주차 실습1 market_channel_kpi.html 새 탭 열기 버튼 */}
          <button
            onClick={handleOpenMarketChannelKpi}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border border-black/30 hover:border-black hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
            title="market_channel_kpi.html 새 탭에서 열기"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>market_channel_kpi.html</span>
          </button>

          {/* Print / PDF Button */}
          <button
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-black text-white hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
            title="포트폴리오 인쇄 및 PDF 저장"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">인쇄 / PDF</span>
            <span className="sm:hidden">PDF</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 rounded-full border border-black/20 hover:border-black"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Quick Category Anchor Bar (Desktop) */}
      <nav className="hidden lg:block border-t border-black/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-2 flex items-center justify-between text-xs font-semibold text-neutral-600">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-black py-1 transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            <span className="font-mono text-[11px]">2026년 기준 20호봉 · 공립 초등특수학급 담임</span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-black/15 bg-[#F6F5F0] px-6 py-4 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-neutral-800 hover:text-black py-1.5 flex items-center justify-between border-b border-black/5"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between text-xs text-neutral-600">
              <span className="font-mono">{personalInfo.email}</span>
              <button
                onClick={handleCopyEmail}
                className="text-xs font-semibold text-black underline"
              >
                {copied ? '복사됨' : '복사'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
