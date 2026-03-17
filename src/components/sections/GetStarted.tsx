import React from 'react';

/**
 * GetStarted component
 * Rebuilt based on "Get started" Figma CSS specifications.
 * Background: #F2F5F9, Section Height: 541px
 */
export function GetStarted() {
  return (
    <section id="get-started" className="w-full bg-[#F2F5F9] py-12 px-4 md:px-12 font-poppins overflow-hidden">
      <div className="max-w-[1392px] mx-auto min-h-[500px] bg-[#0D8AFF] rounded-[24px] overflow-hidden relative flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 lg:p-24 gap-12">
        
        {/* Content area for app downloads */}
        <div className="flex flex-col gap-8 max-w-[500px] z-10 text-center lg:text-left items-center lg:items-start">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight">
            Turn your free time into rewards. Download BigCradle now
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://app.bigcradle.com"
              className="flex items-center gap-3 px-6 py-3 bg-[#242326] rounded-xl hover:bg-black transition-colors"
            >
              <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M21.5 13.5L4 24L3.8 24.2L3.5 13.2L3.8 2.3V2L21.5 13.5Z" fill="white"/>
                <path d="M16 10L4 2V25L16 10Z" fill="white" opacity="0.3"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-white/70 uppercase">GET IT ON</span>
                <span className="text-lg font-medium text-white leading-tight">Google Play</span>
              </div>
            </a>

            <a 
              href="https://app.bigcradle.com"
              className="flex items-center gap-3 px-6 py-3 bg-[#242326] rounded-xl hover:bg-black transition-colors"
            >
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M18.7 18.5C17.8 19.8 16.7 21.2 15.3 21.2C13.9 21.2 13.5 20.3 11.9 20.3C10.3 20.3 9.8 21.2 8.5 21.2C7.1 21.2 5.9 19.7 5 18.2C3.2 15.3 1.8 10.9 3.6 7.8C4.5 6.2 6.1 5.2 7.9 5.2C9.3 5.2 10.5 6.1 11.4 6.1C12.3 6.1 13.7 5.1 15.3 5.1C16 5.1 18.3 5.4 19.8 7.6C19.7 7.6 17 9.2 17 12.4C17 16.1 20.2 17.4 20.2 17.4C20.2 17.5 19.7 18.5 18.7 18.5ZM14.3 3.6C15.1 2.6 15.7 1.3 15.5 0C14.4 0.1 13 0.8 12.2 1.8C11.4 2.7 10.8 4 11 5.2C12.2 5.3 13.5 4.5 14.3 3.6Z" fill="white"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-white/70">Download on the</span>
                <span className="text-lg font-medium text-white leading-tight">App Store</span>
              </div>
            </a>
          </div>
        </div>

        {/* App interface mockups */}
        <div className="relative flex items-end justify-center lg:justify-end gap-[-20px] md:gap-[-40px] w-full lg:w-auto mt-12 lg:mt-0">
          {/* Home (2) 1 */}
          <div className="w-[140px] h-[300px] md:w-[200px] md:h-[433px] lg:w-[240px] lg:h-[520px] bg-[url('/Home (2).png')] bg-cover border-[4px] md:border-[6px] border-black rounded-[16px] md:rounded-[24px] relative z-0 -mr-12 md:-mr-20" />
          {/* Profile (1) 1 - Featured in middle */}
          <div className="w-[160px] h-[346px] md:w-[240px] md:h-[520px] lg:w-[320px] lg:h-[693px] bg-[url('/profile (1).png')] bg-cover border-[4px] md:border-[6px] border-black rounded-[16px] md:rounded-[24px] relative z-20 shadow-2xl" />
          {/* Tasks (4) 2 */}
          <div className="w-[140px] h-[300px] md:w-[200px] md:h-[433px] lg:w-[240px] lg:h-[520px] bg-[url('/Task (4).png')] bg-cover border-[4px] md:border-[6px] border-black rounded-[16px] md:rounded-[24px] relative z-0 -ml-12 md:-ml-20" />
        </div>

        {/* Background accent glow - positioned relatively behind content */}
        <div className="absolute left-[10%] bottom-0 w-[300px] h-[300px] bg-white opacity-20 blur-[100px] pointer-events-none" />
      </div>
    </section>
  );
}
