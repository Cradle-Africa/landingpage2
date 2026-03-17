import React from 'react';

export function HowItWorks() {
  return (
    <section id="how-it-works-detailed" className="w-full max-w-[1440px] mx-auto bg-white py-16 px-4 md:px-12 font-poppins overflow-hidden">
      {/* Section header: Title and tagline */}
      <div className="flex flex-col items-center gap-2 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight">
          How it works
        </h2>
        <p className="text-base md:text-lg text-[#676767]">
          Take a deep dive into how Big Cradle works
        </p>
      </div>

      {/* Grid container for step-by-step cards */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 w-full max-w-[1392px] mx-auto">
        {/* "For Businesses" workflow card */}
        <div className="relative w-full lg:w-1/2 min-h-[500px] lg:min-h-[818px] bg-[#F0F8FF] border border-[#0D8AFF] rounded-[24px] overflow-hidden flex flex-col pt-8 px-8">
          {/* Content Header */}
          <div className="flex flex-col gap-2 mb-8 relative z-10">
            <h3 className="text-xl font-medium text-black">
              For Businesses (Web Platform)
            </h3>
            <p className="text-base text-[#676767] leading-relaxed">
              Create surveys with powerful tools, distribute them to real participants, and analyze responses with built-in insights.
            </p>
          </div>
          {/* Visual: Survey Builder */}
          <div className="mt-auto -mr-32 -ml-8 h-[300px] md:h-[450px] lg:h-[550px] bg-[url('/Survey builder(1).png')] bg-cover bg-no-repeat rounded-tl-20 relative" />
        </div>

        {/* "For Researchers" workflow card */}
        <div className="relative w-full lg:w-1/2 min-h-[500px] lg:min-h-[818px] bg-[#FFF7F0] border border-[#FF7E0D] rounded-[24px] overflow-hidden flex flex-col pt-8 px-8">
          {/* Content Header */}
          <div className="flex flex-col gap-2 mb-8 relative z-10">
            <h3 className="text-xl font-medium text-black">
              For Researchers (Mobile App)
            </h3>
            <p className="text-base text-[#676767] leading-relaxed">
              Complete simple tasks and earn rewards instantly and track your progress anytime, anywhere.
            </p>
          </div>

          {/* Mobile App Mockups */}
          <div className="relative mt-auto h-[400px] md:h-[550px] lg:h-[650px] flex items-end justify-center">
            {/* Tasks (4) 2 - Left Phone */}
            <div className="w-[180px] h-[390px] md:w-[260px] md:h-[563px] lg:w-[320px] lg:h-[690px] bg-[url('/Task (4).png')] bg-cover border-[6px] border-black rounded-[24px] lg:rounded-[36px] relative z-10 -mr-16 md:-mr-24" />
            {/* Home (2) 1 - Right Phone */}
            <div className="w-[170px] h-[360px] md:w-[240px] md:h-[520px] lg:w-[290px] lg:h-[630px] bg-[url('/Home (2).png')] bg-cover border-[6px] border-black rounded-[24px] lg:rounded-[36px] relative z-20 shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
