"use client";

import React, { useState } from 'react';

type TabType = 'Survey' | 'Data Pipeline' | 'API';

interface SolutionContent {
  title: string;
  description: string;
  image: string;
}

const contentData: Record<TabType, SolutionContent> = {
  'Survey': {
    title: "Survey Design & Insight Collection",
    description: "Expert-crafted surveys designed to extract meaningful insights from African consumers. Our team ensures culturally relevant questions and methodologies that yield actionable data.",
    image: "/Survey.png"
  },
  'Data Pipeline': {
    title: "Data Driven Pipeline",
    description: "Streamlined data flows that connect consumer feedback directly to your business intelligence tools. Our pipeline ensures high-quality data integrity and real-time accessibility.",
    image: "/Pipeline.png"
  },
  'API': {
    title: "API Integration & Automation",
    description: "Seamlessly integrate our consumer insight engine into your existing workflows. Our robust APIs allow for automated task deployment and real-time insight streaming at scale.",
    image: "/API.png"
  }
};

export const SolutionsTabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Survey');

  return (
    <section id="solution" className="w-full max-w-[1440px] mx-auto bg-white py-16 px-4 md:px-12 flex flex-col items-center overflow-hidden font-poppins">
      {/* Decorative dot - hidden on small screens or positioned relatively */}
      <div className="hidden lg:block absolute w-[6px] h-[6px] right-[40px] top-[400px] bg-[#8A9CFF] blur-[4px] rounded-full" />

      {/* Main Section Header */}
      <h2 className="text-3xl md:text-4xl font-medium text-[#0C0C0C] text-center mb-8">
        BigCradle’s Solutions
      </h2>

      {/* Tabs Container */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-12">
        {(['Survey', 'Data Pipeline', 'API'] as TabType[]).map((tab) => {
          const isActive = activeTab === tab;
          return (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex flex-col items-center cursor-pointer group"
            >
              <span className={`text-lg md:text-xl font-normal transition-colors duration-300 ${isActive ? 'text-[#0023E8]' : 'text-[#979797] group-hover:text-[#4a62ff]'}`}>
                {tab}
              </span>
              <div className={`w-[40px] h-[2px] bg-[#0023E8] rounded-full mt-1 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          );
        })}
      </div>

      {/* Content Frame */}
      <div className="w-full flex flex-col items-center gap-12">
        {/* Dynamic Text Container */}
        <div className="max-w-[979px] w-full flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-3xl font-medium text-[#0C0C0C]">
              {contentData[activeTab].title}
            </h3>
            <p className="text-base md:text-lg text-[#676767] max-w-[800px]">
              {contentData[activeTab].description}
            </p>
          </div>

          <a href="https://app.bigcradle.com" className="inline-block transition-transform hover:scale-105 active:scale-95">
            <button className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#0546D2] via-[#94B2FF] to-[#0546D2] rounded-[6px] text-white font-medium text-sm md:text-base">
              Create account
            </button>
          </a>
        </div>

        {/* Dynamic Image Container */}
        <div 
          className="w-full max-w-[1200px] aspect-[16/9] md:aspect-[1407/798] bg-contain bg-center bg-no-repeat transition-all duration-500 ease-in-out"
          style={{ backgroundImage: `url(${contentData[activeTab].image})` }}
        />
      </div>
    </section>
  );
};
