// Three.js 관련 유틸리티
export const createBoxGeometry = (width = 1, height = 1, depth = 1) => {
  return [width, height, depth] as const;
};

export const createPlaneGeometry = (width = 20, height = 20) => {
  return [width, height] as const;
};

// 애니메이션 관련 유틸리티
export const easeInOut = (t: number): number => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

export const lerp = (start: number, end: number, factor: number): number => {
  return start + (end - start) * factor;
};

// UI 관련 유틸리티
export const classNames = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// 성능 관련 유틸리티
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
