"use client";

import React from 'react';

interface SolutionBlockProps {
  title: string;
  description: string;
  imageSrc: string;
  order: number;
}

export const Solutions = () => {
  const data = [
    {
      title: "Data Collection API",
      description: "Collect real-time, authentic insights directly from a diverse network of verified African consumers to understand their preferences, behaviors, and evolving needs.",
      imageSrc: "/dashboard1.png"
    },
    {
      title: "Insight Streaming API",
      description: "Continuously stream real-time consumer insights to always stay in sync with their evolving needs and preferences",
      imageSrc: "/dashboard2.png"
    },
    {
      title: "Data Flywheel API",
      description: "Ensure your products always meet consumer needs through ongoing optimization driven by real-time feedback",
      imageSrc: "/dashboard3.png"
    },
    {
      title: "Task Deployment API",
      description: "Streamline your research efforts by assigning highly targeted tasks and acquiring detailed, structured feedback that's easy to analyze and apply",
      imageSrc: "/dashboard4.png"
    },
    {
      title: "User Trigger API",
      description: "Set up automated feedback collection at critical stages of the customer journey to continuously understand their experience",
      imageSrc: "/dashboard5.png"
    }
  ];

  return (
    <section id="api" className="flex flex-col items-center py-20 px-6 md:px-12 lg:px-20 gap-16 w-full bg-white relative z-[5] font-poppins">
      {/* Decorative dot from Figma */}
      <div className="hidden lg:block absolute w-[6px] h-[6px] right-[40px] top-[32px] bg-[#8A9CFF] blur-[4px] rounded-full" />

      {data.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-36 w-full max-w-[1426px] py-12`}
        >
          {/* Text Container */}
          <div className="flex flex-col items-start gap-6 w-full lg:max-w-[439px]">
            {/* Solutions Badge */}
            <div className="flex items-center justify-center px-3 py-2 bg-[#F0F2FF] border border-dashed border-[#0023E8] rounded-full">
              <span className="text-sm font-medium text-[#0023E8]">Solutions</span>
            </div>

            {/* Content Container */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#0C0C0C] leading-tight">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl text-[#676767] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Request API Link */}
              <div className="flex items-center gap-2 text-[#0027FF] cursor-pointer group">
                <span className="text-lg group-hover:underline">Request API Access</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M3.33334 10H16.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.6667 5L16.6667 10L11.6667 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="w-full flex-1 min-h-[300px] md:min-h-[400px] lg:min-h-[538px] bg-[#F0F2FF] rounded-2xl p-6 md:p-8 lg:p-12 pb-0 flex items-end overflow-hidden">
            <div
              className="w-full h-full min-h-[250px] md:min-h-[350px] bg-contain bg-left-top bg-no-repeat rounded-tl-2xl shadow-2xl transition-transform hover:scale-[1.02]"
              style={{ backgroundImage: `url(${item.imageSrc})` }}
            />
          </div>
        </div>
      ))}
    </section>
  );
};
