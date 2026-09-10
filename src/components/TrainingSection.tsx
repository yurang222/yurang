import React, { useState, useMemo } from 'react';
import { trainingCourses } from '../data/portfolioData';
import { TrainingCategory, TrainingItem } from '../types';
import { ArrowDownRight, Search, Clock, Award, BookOpen, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export const TrainingSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TrainingCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCourses = useMemo(() => {
    return trainingCourses.filter((course) => {
      const matchesCategory =
        selectedCategory === 'all' || course.category === selectedCategory;

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.institution.toLowerCase().includes(q) ||
        (course.description && course.description.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalHours = useMemo(() => {
    return trainingCourses.reduce((sum, c) => sum + c.hours, 0);
  }, []);

  const aiHours = useMemo(() => {
    return trainingCourses.filter(c => c.category === 'ai-edtech').reduce((sum, c) => sum + c.hours, 0);
  }, []);

  const selHours = useMemo(() => {
    return trainingCourses.filter(c => c.category === 'sel-pbs').reduce((sum, c) => sum + c.hours, 0);
  }, []);

  const curHours = useMemo(() => {
    return trainingCourses.filter(c => c.category === 'curriculum-mgmt').reduce((sum, c) => sum + c.hours, 0);
  }, []);

  const categories: { id: TrainingCategory; label: string; count: number; hours: number }[] = [
    { id: 'all', label: '전체 연수', count: trainingCourses.length, hours: totalHours },
    { id: 'ai-edtech', label: 'AI · 에듀테크 & 미래교육', count: 7, hours: aiHours },
    { id: 'sel-pbs', label: '행동중재, 상담 & 사회정서학습', count: 6, hours: selHours },
    { id: 'curriculum-mgmt', label: '특수교육 수업전문성 & 학급경영', count: 7, hours: curHours },
  ];

  return (
    <section id="training" className="w-full py-12 sm:py-16 border-b border-black/15 bg-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-black pb-4 mb-8">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-black tracking-tight">
              (주요 연수 및 직무 교육 이수 내역)
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Professional Development & Continuous Teacher Learning (총 {trainingCourses.length}개 과정, 누적 {totalHours}시간 이수)
            </p>
          </div>
          <ArrowDownRight className="w-6 h-6 text-black shrink-0 ml-4" />
        </div>

        {/* Summary Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="p-4 rounded-lg bg-black text-white">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">TOTAL HOURS</span>
            <div className="text-2xl sm:text-3xl font-black mt-0.5">{totalHours}시간</div>
            <p className="text-xs text-neutral-300 mt-1">누적 직무 연수 이수</p>
          </div>
          <div className="p-4 rounded-lg bg-white/80 border border-black/15">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">AI & EDTECH</span>
            <div className="text-2xl sm:text-3xl font-black text-black mt-0.5">{aiHours}시간</div>
            <p className="text-xs text-neutral-600 mt-1">7개 미래교육 과정</p>
          </div>
          <div className="p-4 rounded-lg bg-white/80 border border-black/15">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">SEL & PBS</span>
            <div className="text-2xl sm:text-3xl font-black text-black mt-0.5">{selHours}시간</div>
            <p className="text-xs text-neutral-600 mt-1">6개 행동중재·상담 과정</p>
          </div>
          <div className="p-4 rounded-lg bg-white/80 border border-black/15">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">CURRICULUM & 1급</span>
            <div className="text-2xl sm:text-3xl font-black text-black mt-0.5">{curHours}시간</div>
            <p className="text-xs text-neutral-600 mt-1">1급 정교사 100시간 포함</p>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                    active
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-black/5 text-neutral-700 hover:bg-black/10 border border-black/10'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`ml-1.5 font-mono text-[10px] ${active ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="연수명, 기관(교육청, 티처빌 등) 검색..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white/90 border border-black/20 rounded-full focus:outline-none focus:border-black focus:ring-1 focus:ring-black placeholder:text-neutral-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-black"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Training Course List */}
        <div className="bg-white/80 rounded-lg border border-black/20 shadow-sm overflow-hidden divide-y divide-black/10">
          {filteredCourses.length === 0 ? (
            <div className="py-12 text-center text-neutral-500 text-sm">
              검색어와 일치하는 연수 이수 내역이 없습니다.
            </div>
          ) : (
            filteredCourses.map((course) => {
              const isMajor = course.hours >= 60;
              return (
                <div
                  key={course.id}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-black/[0.02] transition-colors"
                >
                  <div className="space-y-1 sm:max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase ${
                        course.category === 'ai-edtech'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : course.category === 'sel-pbs'
                          ? 'bg-rose-100 text-rose-900 border border-rose-300'
                          : 'bg-blue-100 text-blue-900 border border-blue-300'
                      }`}>
                        {course.category === 'ai-edtech' ? 'AI · 에듀테크' : course.category === 'sel-pbs' ? '행동중재 & SEL' : '수업전문성'}
                      </span>
                      {course.year && (
                        <span className="text-xs font-mono text-neutral-500">
                          {course.year}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm sm:text-base font-black text-black leading-snug">
                      {course.title}
                    </h4>

                    {course.description && (
                      <p className="text-xs text-neutral-600 leading-relaxed pt-0.5">
                        {course.description}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-black/5">
                    {/* Institution */}
                    <div className="text-left sm:text-right">
                      <span className="text-[11px] font-semibold text-neutral-500 block">
                        이수 기관
                      </span>
                      <span className="text-xs font-bold text-neutral-800">
                        {course.institution}
                      </span>
                    </div>

                    {/* Hours Tag */}
                    <div className={`px-3 py-1.5 rounded-md font-mono text-xs font-black shrink-0 ${
                      isMajor
                        ? 'bg-black text-white shadow-xs'
                        : 'bg-neutral-100 text-black border border-black/10'
                    }`}>
                      {course.hours}시간
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Note beneath table */}
        <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-neutral-500 font-mono">
          <span>* 특수학교(초등) 1급 정교사 자격연수 100시간 및 교육청 공인 행동중재 전문가 과정 이수</span>
          <span>출처: 서울특별시교육청 교육행정정보시스템(NEIS) 직무연수 이수 기록</span>
        </div>
      </div>
    </section>
  );
};
