import React from 'react';

interface NeonTextProps {
  text: string;
  color: string;
  fontSize: string;
  fontStyle: string;
  animation: string;
  className?: string;
}

const NeonText: React.FC<NeonTextProps> = ({
  text,
  color,
  fontSize,
  fontStyle,
  animation,
  className = '',
}) => {
  // Define base styles for the neon text
  const getBaseStyle = () => {
    return {
      color: 'white',
      fontFamily: fontStyle === 'script' ? 'cursive' : fontStyle === 'serif' ? 'serif' : 'sans-serif',
      fontSize,
      textShadow: `
        0 0 7px ${color},
        0 0 10px ${color},
        0 0 21px ${color},
        0 0 42px ${color},
        0 0 82px ${color},
        0 0 92px ${color},
        0 0 102px ${color},
        0 0 151px ${color}
      `,
    };
  };

  // Apply animation class based on selection
  const getAnimationClass = () => {
    switch (animation) {
      case 'flicker':
        return 'animate-neon-flicker';
      case 'pulse':
        return 'animate-neon-pulse';
      case 'none':
      default:
        return '';
    }
  };

  return (
    <div 
      className={`neon-container ${getAnimationClass()} ${className}`}
      style={getBaseStyle()}
    >
      {text}
    </div>
  );
};

export default NeonText;