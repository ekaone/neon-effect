import React from 'react';

interface BackgroundSceneProps {
  type: string;
  children: React.ReactNode;
}

const BackgroundScene: React.FC<BackgroundSceneProps> = ({ type, children }) => {
  const getBackgroundStyle = () => {
    switch (type) {
      case 'brick':
        return {
          backgroundImage: 'url(https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        };
      case 'gradient':
        return {
          background: 'linear-gradient(135deg, #000000 0%, #1e0033 50%, #000000 100%)',
        };
      case 'city':
        return {
          backgroundImage: 'url(https://images.pexels.com/photos/316902/pexels-photo-316902.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        };
      case 'black':
      default:
        return {
          backgroundColor: '#000000',
        };
    }
  };

  return (
    <div 
      className="w-full h-full min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={getBackgroundStyle()}
    >
      {/* Overlay to darken the background slightly */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      {/* Content container */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default BackgroundScene;