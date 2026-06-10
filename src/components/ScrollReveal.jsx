import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal component to animate elements as they enter the viewport.
 * Animations are inspired by premium scroll reveals like on https://qreatif.id/
 */
export default function ScrollReveal({
  children,
  animation = 'fade-up',
  duration = 800, // transition duration in ms
  delay = 0, // transition delay in ms
  threshold = 0.1, // trigger when 10% of the element is visible
  once = true, // animate only once
  className = '',
  ...props
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // trigger slightly before entering viewport fully
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, once]);

  // Define starting states based on the chosen animation
  const getAnimationStyles = () => {
    if (isIntersecting) {
      return {
        opacity: 1,
        transform: 'translate(0, 0) scale(1)',
      };
    }

    switch (animation) {
      case 'fade-down':
        return {
          opacity: 0,
          transform: 'translateY(-30px)',
        };
      case 'fade-left':
        return {
          opacity: 0,
          transform: 'translateX(30px)',
        };
      case 'fade-right':
        return {
          opacity: 0,
          transform: 'translateX(-30px)',
        };
      case 'zoom-in':
        return {
          opacity: 0,
          transform: 'scale(0.95)',
        };
      case 'zoom-out':
        return {
          opacity: 0,
          transform: 'scale(1.05)',
        };
      case 'fade-up':
      default:
        return {
          opacity: 0,
          transform: 'translateY(30px)',
        };
    }
  };

  const style = {
    ...getAnimationStyles(),
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1)', // Out-cubic easing for premium feel
    willChange: 'transform, opacity',
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`transition-all ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
