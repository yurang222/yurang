import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, School, Award, Calendar, BookOpen, Clock } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="w-full py-12 sm:py-16 border-b border-black/15 bg-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Label in parentheses matching reference image: (나에 대하여) */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm sm:text-base font-bold text-neutral-800 tracking-tight">
            (소개)
          </span>

          {/* Action icon links */}
          <div className="flex items-center gap-2">
            <button
              onClick={copyEmail}
              className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-neutral-700 hover:border-black hover:bg-black hover:text-white transition-colors"
              title="이메일 복사"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-neutral-700 hover:border-black hover:bg-black hover:text-white transition-colors"
              title="이메일 보내기"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Large Bold Editorial Statement matching reference typography */}
        <div className="mt-3 mb-10 max-w-5xl">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#111111] leading-[1.25] tracking-tight">
            자신만의 속도로 자라는 교실
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-700 leading-relaxed max-w-4xl font-normal">
            10년차 공립초등특수학급 담임교사입니다. 초등특수교육 석사 과정을 통해 이론적 깊이를 더했습니다. 학생 개별 맞춤형 교수자료를 활용한 개별화교육, 긍정적 행동지원 기반 생활지도를 통해 생각의 깊이와 자기조절력을 넓혀 나갑니다.
          </p>
        </div>

        {/* Key Information & Official Personnel Grid */}
        <div className="border-t border-black/15 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Card 1: Affiliation */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-bold uppercase tracking-wider">
              <School className="w-3.5 h-3.5 text-black" />
              <span>소속 및 직급</span>
            </div>
            <div className="text-lg font-extrabold text-black tracking-tight">
              {personalInfo.school}
            </div>
            <div className="text-xs text-neutral-600 space-y-0.5">
              <p>{personalInfo.cityOffice} {personalInfo.districtOffice}</p>
              <p className="font-semibold text-neutral-800">{personalInfo.grade} · {personalInfo.position}</p>
            </div>
          </div>

          {/* Card 2: Career & Pay Grade */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-black" />
              <span>경력 및 호봉</span>
            </div>
            <div className="text-lg font-extrabold text-black tracking-tight">
              10년차
            </div>
            <div className="text-xs text-neutral-600 space-y-0.5">
              <p>최초 임용: {personalInfo.appointmentDate}</p>
              <p className="font-semibold text-neutral-800">특수학급, 특수학교, 인지치료</p>
            </div>
          </div>

          {/* Card 3: Master's Degree */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-black" />
              <span>학력 및 평점</span>
            </div>
            <div className="text-lg font-extrabold text-black tracking-tight">
              초등특수교육 석사
            </div>
            <div className="text-xs text-neutral-600 space-y-0.5">
              <p>단국대 특수교육대학원 (2023.08)</p>
              <p className="font-semibold text-neutral-800">초등특수교육 전공</p>
            </div>
          </div>

          {/* Card 4: Certification */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-black" />
              <span>자격 면허</span>
            </div>
            <div className="text-lg font-extrabold text-black tracking-tight">
              초등특수 1급 정교사
            </div>
            <div className="text-xs text-neutral-600 space-y-0.5">
              <p>서울특별시교육청 (2021.08.23)</p>
              <p className="text-neutral-500">정교사 2급 (나사렛대, 2012.02.09)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
