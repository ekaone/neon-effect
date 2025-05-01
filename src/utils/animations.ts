// Define the animation keyframes for neon effects
export const neonAnimations = {
  // Flicker animation mimicking realistic neon light flickering
  flicker: `@keyframes neonFlicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      opacity: 1;
    }
    20%, 24%, 55% {
      opacity: 0.8;
    }
    22%, 53% {
      opacity: 0.9;
    }
  }`,
  
  // Pulse animation for a breathing effect
  pulse: `@keyframes neonPulse {
    0%, 100% {
      opacity: 1;
      filter: brightness(1);
    }
    50% {
      opacity: 0.85;
      filter: brightness(0.85);
    }
  }`
};