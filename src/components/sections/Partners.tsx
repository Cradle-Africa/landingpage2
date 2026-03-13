"use client";

import React from 'react';

export const Partners = () => {
  const logos = [
    { src: "/logo (1).png", alt: "Partner 1", width: '110px', height: '64px' },
    { src: "/logo (3).png", alt: "Partner 3", width: '135px', height: '135px' },
    { src: "/logo (4).png", alt: "Partner 4", width: '82px', height: '63.08px' },
    { src: "/logo (5).png", alt: "Partner 5", width: '134px', height: '88px' },
    { src: "/logo (6).png", alt: "Partner 6", width: '164px', height: '59px' },
    { src: "/logo (7).png", alt: "Partner 7", width: '110px', height: '64px' },
  ];

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '93px 0', // Reduced horizontal padding to allow full width for marquee
        gap: '72px',
        width: '100%',
        minHeight: '737px',
        background: '#FCFCFC',
        position: 'relative',
        zIndex: 5,
        overflow: 'hidden',
      }}
    >
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-container {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
          .marquee-container:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Partners Section - Frame 2095586484 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '28px',
          width: '100%',
          flex: 'none',
          order: 0,
          flexGrow: 0,
        }}
      >
        <h5
          style={{
            width: '1110px',
            maxWidth: '90%',
            height: '30px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '30px',
            textAlign: 'center',
            letterSpacing: '0.01em',
            color: '#494949',
            margin: 0,
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          Trusted by industry-leading companies around the world
        </h5>

        {/* Logo Row - Animated Marquee */}
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
            padding: '20px 0',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="marquee-container">
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0 40px', // Spacing between logos
                  flexShrink: 0,
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    width: logo.width,
                    height: logo.height,
                    objectFit: 'contain',
                    margin: '0 auto',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section - Frame 131 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '20px',
          width: '934px',
          maxWidth: '100%',
          height: '286px',
          flex: 'none',
          order: 1,
          flexGrow: 0,
        }}
      >
        <h2
          style={{
            width: '347px',
            maxWidth: '100%',
            height: '56px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '36px',
            lineHeight: '156.77%',
            textAlign: 'center',
            letterSpacing: '0.01em',
            color: '#000000',
            margin: 0,
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          What is <span style={{ color: '#0023E8' }}>BigCradle?</span>
        </h2>

        <p
          style={{
            width: '934px',
            maxWidth: '100%',
            height: 'auto', // Changed from 210px to auto for responsiveness
            minHeight: '210px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '30px',
            textAlign: 'center',
            letterSpacing: '0.01em',
            color: '#676767',
            margin: 0,
            flex: 'none',
            order: 1,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          At BigCradle, we turn raw data into intelligence through a continuous data flywheel. 
          Using our Task/Survey platform, we crowdsource real-world data at scale, then transform it 
          through data labeling and high-integrity metadata generation to power AI model training, 
          autonomous systems, and advanced analytics. This allows us to support AI companies 
          with model training data, autonomous vehicle companies with labeled datasets, and 
          organizations and NGOs with analytics and impact assessment—turning raw information 
          into decisions that drive real outcomes.
        </p>
      </div>
    </section>
  );
};
