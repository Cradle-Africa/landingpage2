import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section 
      id="services"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1440px',
        minHeight: '968px',
        background: '#FFFFFF',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {/* Section Header with title and description */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '6px',
          position: 'absolute',
          width: '353px',
          height: '83px',
          left: 'calc(50% - 353px/2 - 0.5px)',
          top: '36px',
        }}
      >
        <h2 
          style={{
            width: '353px',
            height: '54px',
            fontFamily: "'Poppins', sans-serif",
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '36px',
            lineHeight: '54px',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: '#000000',
            margin: 0,
          }}
        >
          Services we offer
        </h2>
        <p 
          style={{
            width: '353px',
            height: '24px',
            fontFamily: "'Poppins', sans-serif",
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            textAlign: 'center',
            letterSpacing: '0.01em',
            color: '#676767',
            margin: 0,
          }}
        >
          Take a deep dive into how Big Cradle works
        </p>
      </div>

      {/* Main layout container for service details */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '24px',
          position: 'absolute',
          width: '1322px',
          height: '747px',
          left: 'calc(50% - 1322px/2)',
          top: '171px',
        }}
      >
        {/* Frame 136 */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '32px',
            width: '1322px',
            height: '747px',
          }}
        >
          {/* Frame 135 */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '16px',
              width: '849px',
              height: '199px',
            }}
          >
            {/* Frame 133 */}
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '8px',
                width: '849px',
                height: '156px',
              }}
            >
              <h3 
                style={{
                  width: '849px',
                  height: '88px',
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '29px',
                  lineHeight: '44px',
                  letterSpacing: '0.01em',
                  color: '#0C0C0C',
                  margin: 0,
                }}
              >
                Data-Driven Market Research & Business Intelligence Consultation
              </h3>
              <p 
                style={{
                  width: '849px',
                  height: '60px',
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '30px',
                  letterSpacing: '0.01em',
                  color: '#676767',
                  margin: 0,
                }}
              >
                We offer end-to-end market research solutions that combine real-world data with rigorous analysis.
              </p>
            </div>

            {/* Frame 134 - CTA Link */}
            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0px',
                gap: '8px',
                width: '205px',
                height: '27px',
                cursor: 'pointer',
              }}
            >
              <span 
                style={{
                  width: '177px',
                  height: '27px',
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '27px',
                  letterSpacing: '0.01em',
                  color: '#0027FF',
                }}
              >
                Request API Access
              </span>
              <ArrowRight size={20} color="#0027FF" />
            </div>
          </div>

          {/* Bento-style grid for visual features */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0px',
              gap: '3px',
              width: '1322px',
              height: '516px',
            }}
          >
            {/* Large analytics visual column */}
            <div 
              style={{
                position: 'relative',
                width: '943px',
                height: '516px',
                background: '#F5F6FF',
                borderRadius: '12px 0px 0px 12px',
                overflow: 'hidden',
                flex: 'none',
                order: 0,
                flexGrow: 1,
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  width: '1099px',
                  height: '1395px',
                  left: '-193px',
                  top: '-606.36px',
                  background: 'url("/Analytics (8).png") center/contain no-repeat', // Assuming root placement
                }}
              />
            </div>

            {/* Insight highlight card with background image */}
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                padding: '24px',
                gap: '10px',
                width: '376px',
                height: '516px',
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/image.png") center/cover no-repeat',
                borderRadius: '0px 12px 12px 0px',
                flex: 'none',
                order: 1,
                flexGrow: 0,
              }}
            >
              <p 
                style={{
                  width: '315px',
                  height: 'auto', // Auto height for the text content
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0.01em',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                Big Cradle Marketplace provides location-based intelligence for market entry, pricing, and competitor analysis. 
                Businesses can upload internal data to our secure platform for expert consultation, where we deliver tailored insights to guide smarter decisions, improve retention, and boost profitability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
