import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = "fit-content", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [overflowVisible, setOverflowVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          
          // Allow overflow after animation (0.9s) + delay to ensure hover effects (shadow/scale) aren't clipped
          const animationTime = 900; 
          const delayTime = delay * 1000;
          setTimeout(() => {
            setOverflowVisible(true);
          }, animationTime + delayTime);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.disconnect();
    };
  }, [delay]);

  return (
    <div ref={ref} style={{ width, overflow: overflowVisible ? 'visible' : 'hidden' }}>
      <div
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(75px)",
          opacity: isVisible ? 1 : 0,
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
        }}
      >
        {children}
      </div>
    </div>
  );
};