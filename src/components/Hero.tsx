import React from 'react';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[rgb(17,24,39)] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="bg-[rgb(241,176,55)] text-white text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-3 py-1 rounded-full font-medium whitespace-nowrap">
              Embraced by Kottravai • Empowered by Love
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[rgb(238,233,248)]">
            <span className="block">From Mother's Love to</span>
            <span className="bg-gradient-to-r from-[rgb(136,71,173)] to-[rgb(233,120,118)] bg-clip-text text-transparent">
              Digital Empowerment
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[rgb(238,233,248)] mb-8 max-w-3xl mx-auto leading-relaxed">
            Join Kottravai, the divine mother goddess's mission, as we nurture
            and empower rural women entrepreneurs through technology. Together,
            we're building India's first e-commerce platform that carries a
            mother's touch.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#join-us"
              className="bg-gradient-to-r from-[rgb(136,71,173)] to-[rgb(233,120,118)] hover:from-[rgb(116,51,153)] hover:to-[rgb(213,100,98)] text-white px-8 py-3 rounded-md text-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              Join Our Family of Builders
            </a>
            <a
              href="#about"
              className="border-2 border-[rgb(241,176,55)] text-[rgb(241,176,55)] hover:bg-[rgb(244,238,255)] hover:text-[rgb(136,71,173)] px-8 py-3 rounded-md text-lg font-medium transition-colors w-full sm:w-auto"
            >
              Discover Our Story
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute -right-16 top-20 w-64 h-64 bg-dots-pattern opacity-20 text-[rgb(241,176,55)]"></div>
      <div className="hidden md:block absolute -left-16 -bottom-16 w-64 h-64 bg-dots-pattern opacity-20 text-[rgb(233,120,118)]"></div>
    </section>
  );
};
