import React from 'react';

export function HowItWorks() {
  return (
    <section 
      id="how-it-works-detailed"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1440px',
        minHeight: '1024px',
        background: '#FFFFFF',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {/* Section header: Title and tagline */}
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
          How it works
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

      {/* Grid container for step-by-step cards */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0px',
          gap: '24px',
          position: 'absolute',
          width: '1392px',
          height: '818px',
          left: '24px',
          top: '169px',
        }}
      >
        {/* "For Businesses" workflow card */}
        <div 
          style={{
            position: 'relative',
            width: '684px',
            height: '818px',
            flex: 'none',
            order: 0,
            flexGrow: 0,
            overflow: 'hidden',
            borderRadius: '24px', // Match the border radius
          }}
        >
          {/* Background & Border */}
          <div 
            style={{
              boxSizing: 'border-box',
              position: 'absolute',
              width: '684px',
              height: '818px',
              left: 0,
              top: 0,
              background: '#F0F8FF',
              border: '1px solid #0D8AFF',
              borderRadius: '24px',
            }}
          />
          {/* Content Header */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '8px',
              position: 'absolute',
              width: '620px',
              height: '86px',
              left: '32px',
              top: '32px',
            }}
          >
            <h3 
              style={{
                width: '620px',
                height: '30px',
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '-0.03em',
                color: '#000000',
                margin: 0,
              }}
            >
              For Businesses (Web Platform)
            </h3>
            <p 
              style={{
                width: '620px',
                height: '48px',
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.03em',
                color: '#676767',
                margin: 0,
              }}
            >
              Create surveys with powerful tools, distribute them to real participants, and analyze responses with built-in insights.
            </p>
          </div>
          {/* Visual: Survey Builder */}
          <div 
            style={{
              position: 'absolute',
              width: '941px',
              height: '675px',
              left: '32px',
              top: '141.64px',
              background: 'url("/Survey builder(1).png") center/cover no-repeat',
              borderRadius: '20px',
            }}
          />
        </div>

        {/* "For Researchers" workflow card */}
        <div 
          style={{
            position: 'relative',
            width: '684px',
            height: '818px',
            flex: 'none',
            order: 1,
            flexGrow: 0,
            overflow: 'hidden',
            borderRadius: '24px', // Match the border radius
          }}
        >
          {/* Background & Border */}
          <div 
            style={{
              boxSizing: 'border-box',
              position: 'absolute',
              width: '684px',
              height: '818px',
              left: 0,
              top: 0,
              background: '#FFF7F0',
              border: '1px solid #FF7E0D',
              borderRadius: '24px',
            }}
          />
          {/* Content Header */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '8px',
              position: 'absolute',
              width: '620px',
              height: '86px',
              left: '32px',
              top: '32px',
            }}
          >
            <h3 
              style={{
                width: '620px',
                height: '30px',
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '-0.03em',
                color: '#000000',
                margin: 0,
              }}
            >
              For Researchers (Mobile App)
            </h3>
            <p 
              style={{
                width: '620px',
                height: '48px',
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.03em',
                color: '#676767',
                margin: 0,
              }}
            >
              Complete simple tasks and earn rewards instantly and track your progress anytime, anywhere.
            </p>
          </div>

          {/* Group 1000001757 - Mobile App Mockups */}
          <div 
            style={{
              position: 'absolute',
              width: '500px',
              height: '891.46px',
              left: 'calc(50% - 500px/2)',
              top: '142px',
            }}
          >
            {/* Tasks (4) 2 - Left Phone */}
            <div 
              style={{
                position: 'absolute',
                width: '395.15px',
                height: '855.64px',
                left: 'calc(50% - 395.15px/2 - 52.42px)',
                top: 0,
                background: 'url("/Task (4).png") center/cover no-repeat',
                border: '6px solid #000000',
                borderRadius: '36px',
                zIndex: 1,
              }}
            />
            {/* Home (2) 1 - Right Phone */}
            <div 
              style={{
                position: 'absolute',
                width: '368.81px',
                height: '798.74px',
                left: '223.19px',
                top: '92.73px', // Offset relative to the first phone
                background: 'url("/Home (2).png") center/cover no-repeat',
                border: '6px solid #000000',
                borderRadius: '36px',
                zIndex: 2,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
