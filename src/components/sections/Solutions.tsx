"use client";

import React from 'react';

interface SolutionBlockProps {
  title: string;
  description: string;
  imageSrc: string;
  order: number;
}

const SolutionBlock = ({ title, description, imageSrc, order }: SolutionBlockProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0px',
        gap: '144px',
        width: '1426px',
        maxWidth: '100%',
        height: '538px',
        flex: 'none',
        order: order,
        alignSelf: 'stretch',
        flexGrow: 0,
      }}
    >
      {/* Text Container - Frame 1618868681 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '24px',
          width: '439px',
          height: '305px',
          flex: 'none',
          order: 0,
          flexGrow: 0,
        }}
      >
        {/* Solutions Badge - Frame 1618868680 */}
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px 12px',
            gap: '10px',
            width: '90px',
            height: '36px',
            background: '#F0F2FF',
            border: '1px dashed #0023E8',
            borderRadius: '36px',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          <span
            style={{
              width: '66px',
              height: '21px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '21px',
              letterSpacing: '0.01em',
              color: '#0023E8',
            }}
          >
            Solutions
          </span>
        </div>

        {/* Content Container - Frame 135 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '16px',
            width: '439px',
            height: 'auto',
            flex: 'none',
            order: 1,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          {/* Header & Desc - Frame 133 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '8px',
              width: '439px',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            <h2
              style={{
                width: '439px',
                height: '44px',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '29px',
                lineHeight: '44px',
                letterSpacing: '0.01em',
                color: '#0C0C0C',
                margin: 0,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                width: '439px',
                height: 'auto',
                minHeight: '90px',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '0.01em',
                color: '#676767',
                margin: 0,
              }}
            >
              {description}
            </p>
          </div>

          {/* Request API Link - Frame 134 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0px',
              gap: '8px',
              width: '205px',
              height: '27px',
              flex: 'none',
              order: 1,
              flexGrow: 0,
              cursor: 'pointer'
            }}
          >
            <span
              style={{
                width: '177px',
                height: '27px',
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '27px',
                letterSpacing: '0.01em',
                color: '#0027FF',
              }}
            >
              Request API Access
            </span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33334 10H16.6667" stroke="#0027FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.6667 5L16.6667 10L11.6667 15" stroke="#0027FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Image Container - Frame 1618868682 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          padding: '24px 24px 0px',
          gap: '10px',
          width: '843px',
          height: '538px',
          background: '#F0F2FF',
          borderRadius: '16px',
          flex: 'none',
          order: 1,
          flexGrow: 0,
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            width: '788px',
            height: '514px',
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left top',
            borderRadius: '16px 0px 0px 0px',
            flex: 'none',
            order: 0,
            flexGrow: 1,
          }}
        />
      </div>
    </div>
  );
};

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
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '100px 72px',
        gap: '52px',
        width: '100%',
        background: '#FFFFFF',
        position: 'relative',
        zIndex: 5,
      }}
    >
      {/* Decorative dot from Figma */}
      <div 
        style={{
          position: 'absolute',
          width: '6px',
          height: '6px',
          left: '1350px',
          top: '32px', // Relative to section top
          background: '#8A9CFF',
          filter: 'blur(4px)',
          borderRadius: '50%'
        }}
      />

      {data.map((item, idx) => (
        <SolutionBlock 
          key={idx} 
          title={item.title} 
          description={item.description} 
          imageSrc={item.imageSrc} 
          order={idx}
        />
      ))}
    </section>
  );
};
