'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export default function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  direction = 'fade',
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  const getDirectionClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translate-y-8 opacity-0';
        case 'down':
          return '-translate-y-8 opacity-0';
        case 'left':
          return 'translate-x-8 opacity-0';
        case 'right':
          return '-translate-x-8 opacity-0';
        case 'fade':
        default:
          return 'opacity-0';
      }
    }
    return 'translate-y-0 translate-x-0 opacity-100';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getDirectionClass()} ${className}`}
    >
      {children}
    </div>
  );
}

