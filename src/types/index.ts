// Three.js 관련 타입
export interface ThreeSceneProps {
  className?: string;
}

export interface SpinningBoxProps {
  speed?: number;
  color?: string;
}

// UI 컴포넌트 타입
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

// 애니메이션 관련 타입
export interface AnimationConfig {
  duration: number;
  easing: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  delay?: number;
}
