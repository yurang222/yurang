import React from 'react';
import { experiences, educations, licenses } from '../data/portfolioData';
import { ArrowDownRight, Briefcase, GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react';

export const ExperienceEducationSection: React.FC = () => {
  return (
    <section id="experience" className="w-full py-12 sm:py-16 border-b border-black/15 bg-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-black pb-4 mb-10">
          <h3 className="text-base sm:text-lg font-bold text-black tracking-tight">
            (경력 및 학력 사항)
          </h3>
          <ArrowDownRight className="w-6 h-6 text-black" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center justify-between">
              <h4 className="text-xl sm:text-2xl font-black text-black tracking-tight flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-black" />
                경력 사항 (Professional Experience)
              </h4>
              <span className="text-xs font-mono font-bold px-2.5 py-1 bg-black text-white rounded-full">
                총 9년 이상
              </span>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-white/70 border border-black/15 shadow-sm transition-all hover:border-black"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <h5 className="text-lg font-black text-black">{exp.organization}</h5>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                          재직 중 (Current)
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-600 bg-neutral-100 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-neutral-800 mb-2">
                    {exp.role}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="pt-3 border-t border-black/10 space-y-1.5">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle className="w-3.5 h-3.5 text-black mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Box */}
            <div className="pt-4">
              <h4 className="text-lg font-black text-black tracking-tight mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-black" />
                자격 면허 (Certifications & Licenses)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {licenses.map((lic, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-white/70 border border-black/15 shadow-2xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-black text-white">
                        {lic.type}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-500">
                        {lic.issueDate}
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-black mt-2">
                      {lic.title}
                    </h5>
                    <p className="text-xs text-neutral-600 mt-1">
                      발급기관: {lic.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center justify-between">
              <h4 className="text-xl sm:text-2xl font-black text-black tracking-tight flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-black" />
                학력 사항 (Education)
              </h4>
            </div>

            <div className="space-y-6">
              {educations.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-white/70 border border-black/15 shadow-sm transition-all hover:border-black"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-neutral-600 bg-neutral-100 px-2 py-1 rounded">
                      {edu.period}
                    </span>
                    <span className="text-xs font-semibold text-neutral-500">
                      {edu.graduationDate}
                    </span>
                  </div>

                  <h5 className="text-base font-black text-black mt-2">
                    {edu.degree}
                  </h5>
                  <p className="text-sm font-semibold text-neutral-800">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-neutral-600 mb-3">
                    {edu.major}
                  </p>

                  {/* GPA Highlight Badge */}
                  {edu.gpa && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-amber-50 border border-amber-200 text-amber-950 font-mono text-xs font-bold mb-4">
                      <span>취득 학점: {edu.credits}</span>
                      <span>·</span>
                      <span className="text-amber-700 font-extrabold">평점: {edu.gpa}</span>
                    </div>
                  )}

                  {edu.details && (
                    <ul className="pt-3 border-t border-black/10 space-y-1.5 text-xs text-neutral-700">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Core Values Callout */}
            <div className="p-5 rounded-lg border border-black/20 bg-black text-white">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
                EDUCATIONAL EXCELLENCE
              </p>
              <h5 className="text-base font-bold mb-2">
                이론과 현장 실천의 끊임없는 연계
              </h5>
              <p className="text-xs text-neutral-300 leading-relaxed">
                학사 및 석사 과정에서 다진 특수교육학 전문 지식(평점 4.41)과 9년 이상의 현장 담임 경험을 결합하여, 개별 학생에게 꼭 필요한 맞춤형 지원을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
