"use client";

import { useEffect, useRef } from 'react';

export default function Section13() {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-flipUp');
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="section bg-black relative min-h-screen flex flex-col justify-center items-center" id="section14">
      {/* Centered Text */}
      <div className="flex justify-center items-center min-h-screen relative z-10">
        <h4
          ref={textRef}
          className="text-[16px] lg:text-[25px] uppercase text-center text-white tracking-wider opacity-0" // start with opacity 0
        >
          GLOBAL ACCESS TO REAL ESTATE AND PROPERTY TO EVERYONE.
        </h4>
      </div>

      {/* Scroll Animation */}
      <a className="navigate-down cursor-pointer text-white invert" href="#nextSection">
        <div className="scroll__animation" style={{ opacity: 1, willChange: 'auto' }}>
          <div className="mouse"></div>
        </div>
      </a>
    </section>
  );
}

