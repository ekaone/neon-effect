<p align="center">
  <img src="https://res.cloudinary.com/ddjsyskef/image/upload/v1746108239/public/xa5n8cfpnbaan1tu4enw.png" alt="Neon Text Effect Generator">
</p>

# Neon Text Effect Generator

A modern React application that allows users to create and customize stunning neon text effects with real-time preview. Built with React, TypeScript, and Tailwind CSS.

![Neon Text Effect Demo](demo.gif)

## Features

- **Real-time Text Customization**: Edit text content with instant preview
- **Color Selection**: Choose from a variety of preset neon colors
- **Font Customization**: Multiple font styles and sizes available
- **Animation Effects**: 
  - Flicker: Mimics realistic neon light flickering
  - Pulse: Creates a smooth breathing effect
  - None: Static display
- **Background Options**:
  - Brick Wall
  - Dark Gradient
  - City Night
  - Pure Black
- **Responsive Design**: Works seamlessly across different screen sizes
- **Modern UI**: Clean and intuitive control panel interface

## Tech Stack

- React 18.3
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ekaone/neon-effect
cd neon-effect
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
neon-effect/
├── src/
│   ├── components/
│   │   ├── BackgroundScene.tsx   # Background scene manager
│   │   ├── ColorPicker.tsx       # Color selection component
│   │   ├── ControlPanel.tsx      # Main controls interface
│   │   └── NeonText.tsx          # Neon text effect renderer
│   ├── utils/
│   │   └── animations.ts         # Animation keyframes
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global styles and animations
├── public/                       # Static assets
└── [Configuration files]         # Various config files
```

## Customization

### Adding New Colors

Add new colors in the `tailwind.config.js` file under the `neon` color palette:

```js
theme: {
  extend: {
    colors: {
      neon: {
        // Add your custom colors here
        newColor: '#hexcode',
      }
    }
  }
}
```

### Adding New Animations

1. Define new keyframes in `src/utils/animations.ts`
2. Add the animation option in `src/components/ControlPanel.tsx`
3. Implement the animation in `src/components/NeonText.tsx`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.