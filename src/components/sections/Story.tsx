import React from 'react';

const cardData = [
  { color: '#0D8AFF', image: '/image (5).png' },
  { color: '#0BAD2E', image: '/image (1).png' },
  { color: '#FF760D', image: '/image (2).png' },
  { color: '#D30000', image: '/image (3).png' },
  { color: '#FF0DFF', image: '/image (4).png' },
  { color: '#9747FF', image: '/image(0).png' },
];

export function Story() {
  return (
    <section 
      id="how-it-works"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '36px 24px',
        gap: '10px',
        width: '100%', // Ensuring it spans the full width of its container
        minHeight: '780.66px',
        background: '#FFFFFF',
      }}
    >
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '6px',
          width: '100%',
          maxWidth: '1392px',
          height: 'auto',
        }}
      >
        <h2 
          style={{
            width: '162px',
            height: '54px',
            fontFamily: "'Poppins', sans-serif",
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '36px',
            lineHeight: '54px',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: '#000000',
            flex: 'none',
            order: 0,
            flexGrow: 0,
            margin: 0,
          }}
        >
          The Story
        </h2>
        <div 
          style={{
            width: '1229px',
            height: '288px',
            fontFamily: "'Poppins', sans-serif",
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '36px',
            textAlign: 'center',
            letterSpacing: '0.01em',
            color: '#676767',
            flex: 'none',
            order: 1,
            flexGrow: 0,
            margin: '20px 0',
          }}
        >
          <p>Every new idea starts with a question. But questions need answers, and answers come from people.</p>
          <p style={{ margin: '24px 0' }}>
            Big Cradle was born out of the need to connect the two — researchers looking for insights and individuals willing to share their experiences. 
            Instead of struggling to find participants, researchers can now create surveys quickly on our platform. 
            And instead of sitting on the sidelines, everyday people can finally take part in shaping innovations by filling those surveys.
          </p>
          <p>It’s not just data. It’s people helping people move the world forward.</p>
        </div>
      </div>

      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '64px 0px 42px',
          gap: '12px',
          width: '100%',
          maxWidth: '1392px',
          height: '350.66px',
          flex: 'none',
          order: 1,
          alignSelf: 'stretch',
          flexGrow: 0,
          flexWrap: 'nowrap',
          border: '1px dashed #0D8AFF', // Matching the container border in the screenshot
          borderRadius: '24px',
          margin: '40px auto',
        }}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            style={{
              boxSizing: 'border-box',
              width: '240px',
              height: '213.33px',
              background: `url("${card.image}") center/cover no-repeat`,
              border: `1px dashed ${card.color}`,
              borderRadius: '12px',
              transform: 'rotate(-8deg)', // Changed to negative to match the 'tilting up on the right' visual
              flex: 'none',
              order: index,
              flexGrow: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
