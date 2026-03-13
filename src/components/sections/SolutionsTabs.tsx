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
    <section
      style={{
        width: '100%',
        maxWidth: '1440px',
        minHeight: '1354px',
        background: '#FFFFFF',
        position: 'relative',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '103px 0px',
        overflow: 'hidden'
      }}
    >
      {/* Decorative dot */}
      <div 
        style={{
          position: 'absolute',
          width: '6px',
          height: '6px',
          left: '1350px',
          top: '832px',
          background: '#8A9CFF',
          filter: 'blur(4px)',
          borderRadius: '50%'
        }}
      />

      {/* Main Section Header */}
      <h2
        style={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '32px',
          lineHeight: '156.77%',
          textAlign: 'center',
          letterSpacing: '0.01em',
          color: '#0C0C0C',
          margin: '0 0 29px 0',
          width: 'auto',
          minWidth: '344px'
        }}
      >
        BigCradle’s Solutions
      </h2>

      {/* Tabs Container - Frame 1618868693 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px',
          gap: '42px',
          width: 'auto',
          minWidth: '360px',
          height: '33px',
          marginBottom: '49px'
        }}
      >
        {(['Survey', 'Data Pipeline', 'API'] as TabType[]).map((tab) => {
          const isActive = activeTab === tab;
          return (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                cursor: 'pointer',
                flex: 'none',
                order: tab === 'Survey' ? 0 : tab === 'Data Pipeline' ? 1 : 2,
                flexGrow: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '156.77%',
                  textAlign: 'center',
                  letterSpacing: '0.01em',
                  color: isActive ? '#0023E8' : '#979797',
                  transition: 'color 0.3s ease'
                }}
              >
                {tab}
              </span>
              <div
                style={{
                  width: '60px',
                  height: '2px',
                  background: '#0023E8',
                  borderRadius: '2px',
                  opacity: isActive ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  marginTop: '0px'
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Content Frame - Frame 168 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px',
          gap: '32px',
          width: '1407px',
          height: 'auto',
          minHeight: '987px',
        }}
      >
        {/* Dynamic Text Container - Frame 135 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
            gap: '16px',
            width: '979px',
            height: '157px',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          {/* Header & Desc - Frame 133 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px',
              gap: '8px',
              width: '979px',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            <h3
              style={{
                width: '100%',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '26px',
                lineHeight: '39px',
                textAlign: 'center',
                letterSpacing: '0.01em',
                color: '#0C0C0C',
                margin: 0
              }}
            >
              {contentData[activeTab].title}
            </h3>
            <p
              style={{
                width: '100%',
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '27px',
                textAlign: 'center',
                letterSpacing: '0.01em',
                color: '#676767',
                margin: 0
              }}
            >
              {contentData[activeTab].description}
            </p>
          </div>

          {/* Button - Medium btns */}
          <a
            href="https://app.bigcradle.com"
            style={{
              textDecoration: 'none'
            }}
          >
            <button
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                gap: '12px',
                width: '180px',
                height: '40px',
                background: 'linear-gradient(90deg, #0546D2 0%, #94B2FF 50.42%, #0546D2 100%)',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                flex: 'none',
                order: 1,
                flexGrow: 0,
              }}
            >
              <span
                style={{
                  width: '139px',
                  height: '21px',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '21px',
                  letterSpacing: '0.01em',
                  color: '#FFFFFF',
                }}
              >
                Create account
              </span>
            </button>
          </a>
        </div>

        {/* Dynamic Image Container */}
        <div
          style={{
            width: '1407px',
            height: '798px',
            backgroundImage: `url(${contentData[activeTab].image})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            flex: 'none',
            order: 1,
            flexGrow: 0,
            transition: 'background-image 0.5s ease'
          }}
        />
      </div>
    </section>
  );
};
