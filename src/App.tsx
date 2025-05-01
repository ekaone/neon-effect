import React, { useState } from 'react';
import NeonText from './components/NeonText';
import ControlPanel from './components/ControlPanel';
import BackgroundScene from './components/BackgroundScene';

function App() {
  // State for neon text customization
  const [text, setText] = useState('NEON');
  const [color, setColor] = useState('#ff0000');
  const [fontSize, setFontSize] = useState('7rem');
  const [fontStyle, setFontStyle] = useState('sans');
  const [animation, setAnimation] = useState('flicker');
  const [background, setBackground] = useState('brick');

  return (
    <BackgroundScene type={background}>
      <div className="flex flex-col gap-12 items-center justify-center min-h-screen w-full">
        {/* Neon Text Display */}
        <div className="flex flex-col items-center justify-center p-8">
          <NeonText
            text={text || 'NEON'}
            color={color}
            fontSize={fontSize}
            fontStyle={fontStyle}
            animation={animation}
            className="select-none"
          />
        </div>

        {/* Control Panel */}
        <ControlPanel
          text={text}
          setText={setText}
          color={color}
          setColor={setColor}
          fontSize={fontSize}
          setFontSize={setFontSize}
          fontStyle={fontStyle}
          setFontStyle={setFontStyle}
          animation={animation}
          setAnimation={setAnimation}
          background={background}
          setBackground={setBackground}
        />
      </div>
    </BackgroundScene>
  );
}

export default App;