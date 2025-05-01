import React from 'react';
import { Sliders, Type, Palette, LayoutGrid } from 'lucide-react';
import ColorPicker from './ColorPicker';

interface ControlPanelProps {
  text: string;
  setText: (text: string) => void;
  color: string;
  setColor: (color: string) => void;
  fontSize: string;
  setFontSize: (size: string) => void;
  fontStyle: string;
  setFontStyle: (style: string) => void;
  animation: string;
  setAnimation: (animation: string) => void;
  background: string;
  setBackground: (background: string) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  text,
  setText,
  color,
  setColor,
  fontSize,
  setFontSize,
  fontStyle,
  setFontStyle,
  animation,
  setAnimation,
  background,
  setBackground,
}) => {
  // Neon color presets
  const neonColors = [
    { name: 'Red', value: '#ff0000' },
    { name: 'Blue', value: '#0077ff' },
    { name: 'Green', value: '#00ff77' },
    { name: 'Purple', value: '#cc00ff' },
    { name: 'Pink', value: '#ff00aa' },
    { name: 'Orange', value: '#ff7700' },
    { name: 'Teal', value: '#00ffcc' },
    { name: 'Yellow', value: '#ffcc00' },
  ];

  // Background options
  const backgrounds = [
    { name: 'Brick Wall', value: 'brick' },
    { name: 'Dark Gradient', value: 'gradient' },
    { name: 'City Night', value: 'city' },
    { name: 'Pure Black', value: 'black' },
  ];

  // Font size options
  const fontSizes = [
    { name: 'Small', value: '3rem' },
    { name: 'Medium', value: '5rem' },
    { name: 'Large', value: '7rem' },
    { name: 'Extra Large', value: '9rem' },
  ];

  // Font style options
  const fontStyles = [
    { name: 'Sans Serif', value: 'sans' },
    { name: 'Serif', value: 'serif' },
    { name: 'Script', value: 'script' },
  ];

  // Animation options
  const animations = [
    { name: 'None', value: 'none' },
    { name: 'Flicker', value: 'flicker' },
    { name: 'Pulse', value: 'pulse' },
  ];

  return (
    <div className="bg-black/70 backdrop-blur-md p-6 rounded-xl text-white shadow-2xl w-full max-w-md">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Sliders className="w-5 h-5" /> Customize Your Neon Sign
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 flex items-center gap-2">
            <Type className="w-4 h-4" /> Text Content
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your text"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 flex items-center gap-2">
            <Palette className="w-4 h-4" /> Neon Color
          </label>
          <ColorPicker colors={neonColors} selectedColor={color} onChange={setColor} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Font Size
            </label>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {fontSizes.map((size) => (
                <option key={size.value} value={size.value}>
                  {size.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Font Style
            </label>
            <select
              value={fontStyle}
              onChange={(e) => setFontStyle(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {fontStyles.map((style) => (
                <option key={style.value} value={style.value}>
                  {style.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Animation
            </label>
            <select
              value={animation}
              onChange={(e) => setAnimation(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {animations.map((anim) => (
                <option key={anim.value} value={anim.value}>
                  {anim.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <LayoutGrid className="w-4 h-4" /> Background
            </label>
            <select
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {backgrounds.map((bg) => (
                <option key={bg.value} value={bg.value}>
                  {bg.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;