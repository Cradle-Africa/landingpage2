"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ServiceTabType = 'Data Collection' | 'Data Flywheel' | 'Data Analytics' | 'Market Intelligence' | 'Data Engineering' | 'Data Governance';

interface ServiceContent {
  title: string;
  description: string;
  image: string;
}

const serviceContentData: Record<ServiceTabType, ServiceContent> = {
  'Data Collection': {
    title: "Data Collection and Survey Design",
    description: "Expert-crafted surveys designed to extract meaningful insights from African consumers. Our team ensures culturally relevant questions and methodologies that yield actionable data.",
    image: "/data-collection.png"
  },
  'Data Flywheel': {
    title: "Data Flywheel",
    description: "Ensure your products always meet consumer needs through ongoing optimization driven by real-time feedback.",
    image: "/data-flywheel.png"
  },
  'Data Analytics': {
    title: "Data Analytics",
    description: "Unlock actionable insights from your data with advanced analytics and reporting tools tailored for your business needs.",
    image: "/data-analytics.png"
  },
  'Market Intelligence': {
    title: "Market Intelligence",
    description: "Stay ahead of the competition with comprehensive market intelligence, trend analysis, and competitive benchmarking.",
    image: "/market-intelligence.png"
  },
  'Data Engineering': {
    title: "Data Engineering",
    description: "Build scalable and robust data pipelines to collect, process, and store your data securely and efficiently.",
    image: "/data-engineering.png"
  },
  'Data Governance': {
    title: "Data Governance",
    description: "Ensure data quality, privacy, and compliance with comprehensive data governance policies and frameworks.",
    image: "/data-governance.png"
  }
};

const TABS: ServiceTabType[] = [
  'Data Collection',
  'Data Flywheel',
  'Data Analytics',
  'Market Intelligence',
  'Data Engineering',
  'Data Governance'
];

export const Services = () => {
  const [activeTab, setActiveTab] = useState<ServiceTabType>('Data Collection');

  return (
    <section id="services" className="w-full max-w-[1440px] mx-auto bg-white py-20 px-4 md:px-12 flex flex-col items-center overflow-hidden font-poppins relative">
      {/* Decorative dot */}
      <div className="hidden lg:block absolute w-[6px] h-[6px] right-[40px] md:right-[150px] top-[150px] bg-[#8A9CFF] blur-[4px] rounded-full" />

      {/* Main Section Header */}
      <h2 className="text-[32px] md:text-4xl font-medium text-[#0C0C0C] text-center mb-12">
        BigCradle’s Service
      </h2>

      {/* Tabs Container */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-12 w-full max-w-[1232px]">
        {TABS.map((tab) => {
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
      <div className="w-full flex flex-col items-center gap-8 md:gap-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col items-center gap-8 md:gap-12"
          >
            {/* Dynamic Text Container */}
            <div className="max-w-[979px] w-full flex flex-col items-center gap-4 text-center">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-[26px] leading-snug md:leading-[39px] font-medium text-[#0C0C0C]">
                  {serviceContentData[activeTab].title}
                </h3>
                <p className="text-base md:text-[18px] leading-relaxed md:leading-[27px] font-normal text-[#676767] max-w-[979px]">
                  {serviceContentData[activeTab].description}
                </p>
              </div>

              <a href="https://app.bigcradle.com" className="inline-block mt-2 transition-transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-[#0023E8]/20 rounded-[6px]">
                <button className="flex items-center justify-center w-[180px] h-[40px] bg-gradient-to-r from-[#0546D2] via-[#94B2FF] to-[#0546D2] rounded-[6px] text-white font-medium text-[14px] leading-[21px] tracking-[0.01em]">
                  Create account
                </button>
              </a>
            </div>

            {/* Dynamic Image Container */}
            <div className="w-full max-w-[1200px] mt-4 min-h-[300px] md:min-h-[450px] lg:min-h-[600px] bg-[#F0F2FF] rounded-[32px] p-6 md:p-10 lg:p-14 pb-0 flex items-end overflow-hidden">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full h-full min-h-[250px] md:min-h-[400px] lg:min-h-[550px] bg-cover bg-top bg-no-repeat rounded-t-2xl lg:rounded-t-[32px] shadow-[0_0_40px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-[1.02]"
                style={{ backgroundImage: `url(${serviceContentData[activeTab].image})` }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
