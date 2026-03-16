import React from 'react';

/**
 * StartSurvey component
 * Rebuilt based on "Ready to collect better data?" Figma CSS specifications.
 * Background: #F2F5F9, Section Height: 541px
 */
export function StartSurvey() {
  return (
    <section 
      id="start-survey"
      style={{
        width: '100%',
        maxWidth: '1440px',
        height: '541px',
        background: '#F2F5F9',
        position: 'relative',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {/* Main survey card container */}
      <div 
        style={{
          position: 'absolute',
          width: '1392px',
          height: '493px',
          left: '24px',
          top: '24px',
          background: '#00106B',
          borderRadius: '24px',
          overflow: 'hidden',
        }}
      >
        {/* Survey text and information area */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '24px',
            position: 'absolute',
            width: '466px',
            height: '144px',
            left: '60px',
            top: 'calc(50% - 144px/2 - 0.5px)',
            zIndex: 10,
          }}
        >
          <h2 
            style={{
              width: '466px',
              height: '72px',
              fontFamily: "'Poppins', sans-serif",
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '36px',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            Ready to collect better data? Start your first survey today
          </h2>

          {/* Survey action button */}
          <a 
            href="#"
            style={{
              boxSizing: 'border-box', // Essential for fixed height + padding
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '12px',
              gap: '12px',
              width: '208px',
              height: '48px',
              background: '#FFFFFF',
              border: '1px solid #C0E0FF',
              borderRadius: '8px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <span 
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0.01em',
                color: '#0D8AFF',
                textAlign: 'center',
                whiteSpace: 'nowrap', // Prevents the wrap shown in your screenshot
              }}
            >
              Create account
            </span>
          </a>
        </div>

        {/* Visual mockups and illustrations */}
        <div 
          style={{
            position: 'absolute',
            width: '742px',
            height: '496px',
            left: '590px',
            top: '54px',
          }}
        >
          {/* Overview page (6) 2 */}
          <div 
            style={{
              position: 'absolute',
              width: '700px',
              height: '496px',
              left: '0px', // Relative to Group parent (590-590)
              top: '0px', // Relative to Group parent (54-54)
              background: 'url("/overview page (6).png") center/cover no-repeat',
              borderRadius: '16px',
              zIndex: 1,
            }}
          />

          {/* pipeline 2 3 */}
          <div 
            style={{
              position: 'absolute',
              width: '600px',
              height: '430px',
              left: '142px', // 732 - 590
              top: '45px', // 99 - 54
              background: 'url("/pipeline (2).png") center/cover no-repeat',
              filter: 'drop-shadow(-11px 4px 14.6px rgba(0, 0, 0, 0.48))',
              borderRadius: '16px',
              zIndex: 2,
            }}
          />
        </div>

        {/* Soft background glow/blur effect */}
        <div 
          style={{
            position: 'absolute',
            width: '201.32px',
            height: '231.82px',
            left: '293px',
            top: '318px',
            opacity: 0.4,
            pointerEvents: 'none',
          }}
        >
          <div 
            style={{
              position: 'absolute',
              width: '211.6px',
              height: '50px',
              left: '0px',
              top: '0px',
              background: '#FFFFFF',
              filter: 'blur(58.8px)',
              transform: 'rotate(-35.48deg)',
            }}
          />
          <div 
            style={{
              position: 'absolute',
              width: '211.6px',
              height: '33.15px',
              left: '0px',
              top: '82px',
              background: '#FFFFFF',
              filter: 'blur(58.8px)',
              transform: 'rotate(-35.48deg)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
