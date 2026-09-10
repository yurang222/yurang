import React from 'react';
import { personalInfo, educations, licenses, experiences, competencies, trainingCourses } from '../data/portfolioData';
import { Printer, X, Download, Check, FileText } from 'lucide-react';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintModal: React.FC<PrintModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 no-print">
      <div className="bg-white text-black w-full max-w-4xl rounded-xl shadow-2xl border border-neutral-300 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Toolbar */}
        <div className="p-4 bg-neutral-100 border-b border-neutral-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-neutral-800" />
            <h3 className="font-bold text-sm sm:text-base text-black">
              송경은 특수교사 공식 포트폴리오 (인쇄 및 PDF 저장용 양식)
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-black text-white text-xs font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>지금 인쇄 / PDF 저장</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-neutral-600 hover:text-black hover:bg-neutral-200 transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable A4 Document Preview */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 text-neutral-900 font-sans text-sm">
          {/* Header Title */}
          <div className="border-b-2 border-black pb-4 text-center">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-black">
              송경은 특수교사 포트폴리오
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-neutral-600 mt-1">
              초등특수학급 담임교사 · 서울백운초등학교 · 서울특별시북부교육지원청
            </p>
          </div>

          {/* Section 1: Personal Info */}
          <div>
            <h2 className="text-base font-extrabold border-b border-neutral-300 pb-1 mb-3 text-black">
              1. 기본 인적사항
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-neutral-50 p-4 rounded border border-neutral-200">
              <div><span className="font-bold text-neutral-500">성명:</span> {personalInfo.name}</div>
              <div><span className="font-bold text-neutral-500">직교구분 / 직급:</span> {personalInfo.grade}</div>
              <div><span className="font-bold text-neutral-500">소속:</span> {personalInfo.school}</div>
              <div><span className="font-bold text-neutral-500">보직:</span> {personalInfo.position}</div>
              <div><span className="font-bold text-neutral-500">호봉:</span> {personalInfo.payGrade}</div>
              <div><span className="font-bold text-neutral-500">최초 임용일:</span> {personalInfo.appointmentDate}</div>
              <div className="col-span-2"><span className="font-bold text-neutral-500">연락처(이메일):</span> {personalInfo.email}</div>
              <div><span className="font-bold text-neutral-500">총 경력:</span> {personalInfo.totalExperience}</div>
            </div>
          </div>

          {/* Section 2: Education */}
          <div>
            <h2 className="text-base font-extrabold border-b border-neutral-300 pb-1 mb-3 text-black">
              2. 학력 사항
            </h2>
            <div className="space-y-3">
              {educations.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-black pl-3 text-xs">
                  <div className="font-bold text-sm text-black">{edu.degree} ({edu.institution})</div>
                  <div className="text-neutral-600 font-mono">{edu.period} | {edu.graduationDate}</div>
                  {edu.gpa && (
                    <div className="text-emerald-700 font-semibold mt-0.5">
                      취득 학점: {edu.credits} / 평점: {edu.gpa}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Certifications */}
          <div>
            <h2 className="text-base font-extrabold border-b border-neutral-300 pb-1 mb-3 text-black">
              3. 자격 면허
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {licenses.map((lic, idx) => (
                <div key={idx} className="p-3 bg-neutral-50 border border-neutral-200 rounded">
                  <div className="font-bold text-black">{lic.title}</div>
                  <div className="text-neutral-600 mt-0.5">발급기관: {lic.issuer} ({lic.issueDate})</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Experience */}
          <div>
            <h2 className="text-base font-extrabold border-b border-neutral-300 pb-1 mb-3 text-black">
              4. 경력 사항
            </h2>
            <div className="space-y-3">
              {experiences.map((exp, idx) => (
                <div key={idx} className="text-xs border-l-2 border-black pl-3">
                  <div className="flex justify-between font-bold text-sm text-black">
                    <span>{exp.organization} — {exp.role}</span>
                    <span className="font-mono text-neutral-500 font-normal">{exp.period}</span>
                  </div>
                  <p className="text-neutral-700 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Key Competencies */}
          <div>
            <h2 className="text-base font-extrabold border-b border-neutral-300 pb-1 mb-3 text-black">
              5. 핵심 역량 & 전문성
            </h2>
            <div className="space-y-3 text-xs">
              {competencies.map((comp) => (
                <div key={comp.id} className="p-3 bg-neutral-50 rounded border border-neutral-200">
                  <div className="font-bold text-sm text-black mb-1">{comp.number}. {comp.title}</div>
                  <p className="text-neutral-700 mb-2">{comp.summary}</p>
                  <ul className="list-disc list-inside space-y-1 text-neutral-600 pl-1">
                    {comp.points.map((p, pi) => (
                      <li key={pi}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Training Record */}
          <div>
            <h2 className="text-base font-extrabold border-b border-neutral-300 pb-1 mb-3 text-black">
              6. 주요 직무 연수 이수 내역 (총 {trainingCourses.length}개 과정)
            </h2>
            <table className="w-full text-left text-xs border border-neutral-300 divide-y divide-neutral-200">
              <thead className="bg-neutral-100 font-bold text-neutral-700">
                <tr>
                  <th className="p-2">과정명</th>
                  <th className="p-2 w-28">이수 기관</th>
                  <th className="p-2 w-16 text-right">시간</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {trainingCourses.map((c) => (
                  <tr key={c.id}>
                    <td className="p-2 font-medium text-black">{c.title}</td>
                    <td className="p-2 text-neutral-600">{c.institution}</td>
                    <td className="p-2 text-right font-mono font-bold text-black">{c.hours}h</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-neutral-100 border-t border-neutral-300 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-200 transition-colors"
          >
            닫기
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-2 rounded-lg bg-black text-white text-xs font-bold hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>인쇄 / PDF 저장 실행</span>
          </button>
        </div>
      </div>
    </div>
  );
};
