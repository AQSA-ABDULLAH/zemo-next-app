"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Section3() {
  const textRef = useRef(null);
  const bottomTextRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeDown');  // Updated to animate-fadeDown
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    const bottomTextObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeUp');  // Updated to animate-fadeUp
        }
      },
      { threshold: 0.1 }
    );

    if (bottomTextRef.current) {
      bottomTextObserver.observe(bottomTextRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (bottomTextRef.current) bottomTextObserver.unobserve(bottomTextRef.current);
    };
  }, []);

  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center text-black p-8 gap-8 font-semibold text-lg relative">
        {/* Top Text */}
        <p
          ref={textRef}
          className="text-[30px] font-[400] pb-12 text-center tracking-wider opacity-0" // start with opacity 0
        >
          REVOLUTIONARY
        </p>

        {/* Logos and Divider */}
        <div className="flex items-center gap-40">
          {/* Left Logo */}
          <div className="flex flex-col items-center">
            <Image src="/images/zimo-logo3.png" width={350} height={50} alt="ZIMA Logo" />
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-48 bg-gray-400"></div>

          {/* Right Logo with "Pro" badge */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image src="/images/zimo-logo3.png" width={350} height={50} alt="ZIMA Pro Logo" />
              <span className="absolute top-0 left-80 bg-black text-white text-xs px-1 py-0.5">PRO</span>
            </div>
          </div>
        </div>

        {/* Bottom Text with animation */}
        <p
          ref={bottomTextRef}
          className="text-center text-[30px] pt-16 tracking-wider uppercase font-[400] opacity-0"
        >
          THE ONLY PLATFORM OF ITS KIND IN THE WORLD.
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 flex flex-col items-center">
          <div className="w-4 h-6 border-2 border-black rounded-full flex items-start">
            <div className="w-1 h-2 bg-black rounded-full animate-bounce mb-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}



