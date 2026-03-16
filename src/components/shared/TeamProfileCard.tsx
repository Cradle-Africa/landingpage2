
import React from 'react';

interface TeamProfileCardProps {
  imageSrc: string;
  borderColor: string;
  className?: string;
}

/**
 * TeamProfileCard component
 * Renders a rotated dashed profile card for team highlights.
 */
export const TeamProfileCard: React.FC<TeamProfileCardProps> = ({ 
  imageSrc, 
  borderColor,
  className = "" 
}) => {
  return (
    <div 
      className={`relative shrink-0 flex-none overflow-hidden rounded-[12px] border border-dashed bg-cover bg-center ${className}`}
      style={{ 
        width: '170px', 
        height: '151.11px', 
        borderColor: borderColor,
        backgroundImage: `url(${imageSrc})`,
        transform: 'rotate(8deg)'
      }}
    />
  );
};
