import React from 'react';

export const EditorialDivider: React.FC = () => {
  return (
    <div className="w-full bg-[#F6F5F0] overflow-hidden border-b border-black/15">
      {/* Kinetic Typography Marquee Banner matching reference's "일하다. 일하다. 일하다." */}
      <div className="py-6 border-y border-black/10 select-none overflow-hidden flex whitespace-nowrap">
        <div className="flex gap-8 text-4xl sm:text-6xl md:text-7xl font-black text-black tracking-tighter opacity-90 animate-marquee uppercase">
          <span>배움.</span>
          <span>성장.</span>
          <span>포용.</span>
          <span>동행.</span>
          <span>배움.</span>
          <span>성장.</span>
          <span>포용.</span>
          <span>동행.</span>
          <span>배움.</span>
          <span>성장.</span>
          <span>포용.</span>
          <span>동행.</span>
        </div>
      </div>

      {/* Editorial Photograph Break matching the reference image layout */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[460px] rounded-lg overflow-hidden border border-black/20 bg-neutral-200 shadow-sm">
          <img
            src="/src/assets/images/little_cat_wallpaper.jpg"
            onError={(e) => {
              e.currentTarget.src = 'https://raw.githubusercontent.com/yurang222/yurang/cc6d425d09bd32940aaab82d1b96855617f9252c/Little_cat_im_hungry-Animal_Photo_HD_Wallpaper_1366x768.jpg';
            }}
            alt="Little cat"
            className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.02]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

          {/* Caption Overlay */}
          <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 text-white">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300">
              CLASSROOM PRACTICE & SEL ARTIFACTS
            </span>
            <p className="text-sm sm:text-lg font-bold text-white mt-0.5">
              하루 10분 감정 리추얼 & Canva 맞춤형 특수교육 워크시트
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
