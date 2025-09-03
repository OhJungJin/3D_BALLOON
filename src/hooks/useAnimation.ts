import { useState, useEffect, useCallback } from "react";
import { AnimationConfig } from "@/types";
import { ANIMATION_CONSTANTS } from "@/constants";

export const useAnimation = (config: Partial<AnimationConfig> = {}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const {
    duration = ANIMATION_CONSTANTS.DURATION.NORMAL,
    easing = ANIMATION_CONSTANTS.EASING.EASE_IN_OUT,
    delay = 0,
  } = config;

  const startAnimation = useCallback(() => {
    setIsAnimating(true);
    setProgress(0);
    
    const startTime = Date.now() + delay;
    
    const animate = () => {
      const currentTime = Date.now();
      if (currentTime < startTime) {
        requestAnimationFrame(animate);
        return;
      }
      
      const elapsed = currentTime - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      
      setProgress(newProgress);
      
      if (newProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };
    
    requestAnimationFrame(animate);
  }, [duration, delay]);

  const stopAnimation = useCallback(() => {
    setIsAnimating(false);
    setProgress(0);
  }, []);

  const resetAnimation = useCallback(() => {
    setProgress(0);
    setIsAnimating(false);
  }, []);

  return {
    isAnimating,
    progress,
    startAnimation,
    stopAnimation,
    resetAnimation,
  };
};

export const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount(prev => prev + step), [step]);
  const decrement = useCallback(() => setCount(prev => prev - step), [step]);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);
  const setValue = useCallback((value: number) => setCount(value), []);

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
};
