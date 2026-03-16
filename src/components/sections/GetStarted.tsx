import React from 'react';

/**
 * GetStarted component
 * Rebuilt based on "Get started" Figma CSS specifications.
 * Background: #F2F5F9, Section Height: 541px
 */
export function GetStarted() {
  return (
    <section 
      id="get-started"
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
      {/* CTA card container */}
      <div 
        style={{
          position: 'absolute',
          width: '1392px',
          height: '493px',
          left: '24px',
          top: '24px',
          background: '#0D8AFF',
          borderRadius: '24px',
          overflow: 'hidden',
        }}
      >
        {/* Content area for app downloads */}
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
            height: '148px',
            left: '60px',
            top: 'calc(50% - 148px/2 - 0.5px)',
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
            Turn your free time into rewards. Download BigCradle now
          </h2>

          {/* Mobile store download links */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '12px',
              width: '320px',
              height: '52px',
            }}
          >
            {/* Play Store link */}
            <a 
              href="https://app.bigcradle.com"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '12px 16px',
                gap: '8px',
                width: '155px',
                height: '50px',
                background: '#242326',
                borderRadius: '12px',
                textDecoration: 'none',
              }}
            >
              <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 13.5L4 24L3.8 24.2L3.5 13.2L3.8 2.3V2L21.5 13.5Z" fill="white"/>
                <path d="M16 10L4 2V25L16 10Z" fill="white" opacity="0.3"/>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '7px', color: '#FFFFFF', opacity: 0.7, fontFamily: 'Poppins' }}>GET IT ON</span>
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#FFFFFF', fontFamily: 'Poppins', lineHeight: '1' }}>Google Play</span>
              </div>
            </a>

            {/* App Store link */}
            <a 
              href="https://app.bigcradle.com"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '12px 16px',
                gap: '8px',
                width: '153px',
                height: '52px',
                background: '#242326',
                borderRadius: '12px',
                textDecoration: 'none',
              }}
            >
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7 18.5C17.8 19.8 16.7 21.2 15.3 21.2C13.9 21.2 13.5 20.3 11.9 20.3C10.3 20.3 9.8 21.2 8.5 21.2C7.1 21.2 5.9 19.7 5 18.2C3.2 15.3 1.8 10.9 3.6 7.8C4.5 6.2 6.1 5.2 7.9 5.2C9.3 5.2 10.5 6.1 11.4 6.1C12.3 6.1 13.7 5.1 15.3 5.1C16 5.1 18.3 5.4 19.8 7.6C19.7 7.6 17 9.2 17 12.4C17 16.1 20.2 17.4 20.2 17.4C20.2 17.5 19.7 18.5 18.7 18.5ZM14.3 3.6C15.1 2.6 15.7 1.3 15.5 0C14.4 0.1 13 0.8 12.2 1.8C11.4 2.7 10.8 4 11 5.2C12.2 5.3 13.5 4.5 14.3 3.6Z" fill="white"/>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '7px', color: '#FFFFFF', opacity: 0.7, fontFamily: 'Poppins' }}>Download on the</span>
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#FFFFFF', fontFamily: 'Poppins', lineHeight: '1' }}>App Store</span>
              </div>
            </a>
          </div>
        </div>

        {/* App interface mockups */}
        <div 
          style={{
            position: 'absolute',
            width: '779px',
            height: '693px',
            left: '546px',
            top: '40px',
          }}
        >
          {/* Home (2) 1 */}
          <div 
            style={{
              position: 'absolute',
              width: '260px',
              height: '563px',
              left: '0px', // Adjusted relative to parent Group
              top: '81px', // 121 - 40
              background: 'url("/Home (2).png") center/cover no-repeat',
              border: '6px solid #000000',
              borderRadius: '24px',
              zIndex: 1,
            }}
          />

          {/* Tasks (4) 2 */}
          <div 
            style={{
              position: 'absolute',
              width: '260px',
              height: '563px',
              left: '519px', // 1065 - 546
              top: '81px', // 121 - 40
              background: 'url("/Task (4).png") center/cover no-repeat',
              border: '6px solid #000000',
              borderRadius: '24px',
              zIndex: 1,
            }}
          />

          {/* Profile (1) 1 */}
          <div 
            style={{
              position: 'absolute',
              width: '320px',
              height: '693px',
              left: '229px', // 775 - 546
              top: '0px', // 40 - 40
              background: 'url("/profile (1).png") center/cover no-repeat',
              border: '6px solid #000000',
              borderRadius: '24px',
              zIndex: 2,
            }}
          />
        </div>

        {/* Background accent glow */}
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
