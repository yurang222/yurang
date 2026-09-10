import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CompetenciesSection } from './components/CompetenciesSection';
import { EditorialDivider } from './components/EditorialDivider';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { TrainingSection } from './components/TrainingSection';
import { TeachingPhilosophySection } from './components/TeachingPhilosophySection';
import { ContactFooter } from './components/ContactFooter';
import { PrintModal } from './components/PrintModal';

export default function App() {
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'competencies', 'experience', 'training', 'philosophy', 'contact'];
      const scrollY = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F5F0] text-[#161616] font-sans selection:bg-black selection:text-white flex flex-col">
      {/* Editorial Header */}
      <Header
        onPrint={() => setIsPrintModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CompetenciesSection />
        <EditorialDivider />
        <ExperienceEducationSection />
        <TrainingSection />
        <TeachingPhilosophySection />
      </main>

      {/* Modernist Editorial Footer */}
      <ContactFooter onPrint={() => setIsPrintModalOpen(true)} />

      {/* Print / Official PDF Export Modal */}
      <PrintModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />
    </div>
  );
}

