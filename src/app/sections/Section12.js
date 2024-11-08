"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Section12() {
  const textRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-zoomInUp', 'opacity-100');
          observer.unobserve(entry.target); // Stop observing once animation is applied
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe the text and logo
    if (textRef.current) observer.observe(textRef.current);
    if (logoRef.current) observer.observe(logoRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (logoRef.current) observer.unobserve(logoRef.current);
    };
  }, []);

  return (
    <section id="section15" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="w-full flex flex-col items-center text-center">

        {/* Text and Logo */}
        <div className="z-10">
          <h2
            ref={textRef}
            className="text-lg md:text-2xl font-normal uppercase tracking-wider text-gray-800 opacity-0"
          >
            Bringing the world closer together.
          </h2>
          <img
            ref={logoRef}
            className="block mx-auto mt-6 w-26 h-10 opacity-0 delay-200" // Adds delay for a staggered effect
            src="/images/zimo-logo-2.png"
            alt="Zimo Logo"
          />
        </div>

        {/* Hero Image Wrapper */}
        <div className="absolute inset-0 flex items-center justify-center opacity-60 blur-sm">
          <img src="/images/zimoback.png" alt="Zimo Background Logo" className="w-full max-w-3xl" />
        </div>

      </div>

      {/* Scroll Down Icon */}
      <a href="#nextSection" className="absolute bottom-6 text-black flex items-center justify-center animate-bounce">
        <div className="w-6 h-6 border-b-2 border-gray-800"></div>
      </a>
    </section>
  )
}



