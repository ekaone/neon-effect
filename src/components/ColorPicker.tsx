import React from 'react';
import { Circle } from 'lucide-react';

interface ColorPickerProps {
  colors: { name: string; value: string }[];
  selectedColor: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors, selectedColor, onChange }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color) => (
        <button
          key={color.name}
          className={`w-8 h-8 rounded-full transition-transform duration-200 ${
            selectedColor === color.value ? 'ring-2 ring-white scale-110' : ''
          }`}
          style={{ backgroundColor: color.value }}
          onClick={() => onChange(color.value)}
          title={color.name}
          aria-label={`Select ${color.name} color`}
        >
          {selectedColor === color.value && (
            <Circle className="w-4 h-4 text-white mx-auto" fill="white" />
          )}
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;