// Three.js 관련 상수
export const THREE_CONSTANTS = {
  CAMERA: {
    FOV: 60,
    NEAR: 0.1,
    FAR: 1000,
    POSITION: [3, 2, 4] as [number, number, number],
  },
  LIGHTING: {
    AMBIENT_INTENSITY: 0.6,
    DIRECTIONAL_INTENSITY: 1.2,
    DIRECTIONAL_POSITION: [5, 5, 5] as [number, number, number],
  },
  SHADOWS: {
    MAP_SIZE: 1024,
  },
  ANIMATION: {
    BOX_ROTATION_SPEED: 0.5,
    BOX_ROTATION_SPEED_Y: 0.8,
  },
} as const;

// UI 관련 상수
export const UI_CONSTANTS = {
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
  },
  COLORS: {
    PRIMARY: '#4f46e5',
    SECONDARY: '#6b7280',
    SUCCESS: '#10b981',
    WARNING: '#f59e0b',
    ERROR: '#ef4444',
  },
} as const;

// 애니메이션 관련 상수
export const ANIMATION_CONSTANTS = {
  DURATION: {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
  },
  EASING: {
    LINEAR: 'linear',
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
    EASE_IN_OUT: 'ease-in-out',
  },
} as const;
