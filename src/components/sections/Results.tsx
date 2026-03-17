"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false,
  ctaText = "Create account"
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  isPopular?: boolean;
  ctaText?: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-start p-[30px] gap-10 w-full max-w-[387px] bg-white rounded-[24px] ${
        isPopular ? 'shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03)] border-2 border-[#0023E8]' : 'border border-gray-100'
      }`}
    >
      <div className="flex flex-col items-start gap-10 self-stretch">
        <div className="flex flex-col items-start gap-8 self-stretch">
          
          {/* Badge for Popular */}
          {isPopular && (
            <div className="flex flex-row justify-center items-center px-4 py-3 gap-2.5 w-[121px] h-11 bg-[#0023E8] rounded-[100px]">
              <span className="font-inter font-medium text-sm leading-5 text-white">Most Popular</span>
            </div>
          )}

          <div className="flex flex-col items-start gap-6 self-stretch">
            <h3 className="font-inter font-bold text-2xl leading-8 text-[#181D27]">
              {title}
            </h3>
            
            <div className="flex flex-col items-start gap-3 self-stretch font-inter">
              <div className="text-[48px] font-medium leading-[60px] tracking-[-0.02em] text-[#181D27]">
                {price}
              </div>
              <p className="text-base font-normal leading-6 text-[#181D27]">
                {description}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col items-start gap-4 self-stretch">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-row items-center gap-4 self-stretch">
                <div className="flex items-center justify-center w-6 h-6 border-[1.5px] border-[#181D27] rounded-full">
                  <Check className="w-3.5 h-3.5 text-[#181D27]" strokeWidth={3} />
                </div>
                <span className="font-inter font-normal text-sm leading-5 text-[#181D27]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <a 
          href="https://app.bigcradle.com" 
          className="flex flex-row justify-center items-center p-0 gap-3 w-full h-[60px] bg-gradient-to-r from-[#0546D2] via-[#94B2FF] to-[#0546D2] rounded-md transition-opacity hover:opacity-90"
        >
          <span className="font-poppins font-medium text-sm leading-[21px] tracking-[0.01em] text-white">
            {ctaText}
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export const Results = () => {
  return (
    <section className="w-full flex flex-col items-center py-10 px-6 md:px-36 gap-14 bg-[#FCFCFC] font-poppins">
      
      {/* Header Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-3 w-full max-w-[983px]"
      >
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[23px] font-normal leading-8 text-center tracking-[0.01em] text-[#676767]">
              Built to deliver
            </span>
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-[32px] font-medium leading-[48px] tracking-[0.01em] bg-gradient-to-r from-[#0546D2] via-[#94B2FF] to-[#0546D2] bg-clip-text text-transparent">
                Results
              </h2>
              <div className="w-[100px] h-[8px] border-b-2 border-[#3C6FE3]" />
            </div>
          </div>
        </div>
        <p className="text-xl font-normal leading-[30px] text-center tracking-[0.01em] text-[#676767]">
          BigCradle is a scalable insight engine that turns raw data into intelligence—supporting AI, and organizations with analytics and impact-driven decisions.
        </p>
      </motion.div>

      {/* Pricing Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-[1364px] bg-[#F7F7F7] rounded-xl py-10 px-4 flex flex-col lg:flex-row items-center justify-center gap-5"
      >
        <PricingCard 
          title="Basic"
          price="$10/month"
          description="Get started with essential health tracking and basic AI insights — completely free."
          features={[
            "Limited datasets access",
            "Basic analytics dashboards",
            "Community support",
            "1 project per month",
            "Standard data export"
          ]}
        />
        
        <PricingCard 
          title="Pro Plan"
          price="$100/month"
          isPopular={true}
          description="Get full access to personalized workouts, meal plans, and advanced daily AI health insights"
          features={[
            "Curated datasets access",
            "Advanced analytics dashboards",
            "Priority support",
            "10 projects per month",
            "Enhanced data export & API"
          ]}
        />

        <PricingCard 
          title="Premium"
          price="$1000/month"
          description="Unlock advanced AI guidance, exclusive programs, complete health experience."
          features={[
            "Unlimited datasets access",
            "AI model-ready data",
            "Dedicated account manager",
            "Unlimited projects & surveys",
            "Custom integrations & real-time data"
          ]}
        />
      </motion.div>
    </section>
  );
};
