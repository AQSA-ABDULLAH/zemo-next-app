"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Section14() {
  const mobileImageRef1 = useRef(null);  // Reference for mobile1 image
  const mobileImageRef2 = useRef(null);  // Reference for mobile2 image

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger the animation when 10% of the element is visible
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          if (entry.target === mobileImageRef1.current) {
            entry.target.classList.add('animate-fadeDownRight');
          } else if (entry.target === mobileImageRef2.current) {
            entry.target.classList.add('animate-fadeDownLeft');
          }
          observer.unobserve(entry.target); // Stop observing after animation is triggered
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe the mobile image elements
    if (mobileImageRef1.current) observer.observe(mobileImageRef1.current);
    if (mobileImageRef2.current) observer.observe(mobileImageRef2.current);

    return () => {
      if (mobileImageRef1.current) observer.unobserve(mobileImageRef1.current);
      if (mobileImageRef2.current) observer.unobserve(mobileImageRef2.current);
    };
  }, []);

  return (
    <section className="py-16 px-10">
      <div className="flex flex-col items-center mb-8">
        <Image src="/iamges/zimo-download.png" width={120} height={60} alt="ZT-Transfer Logo" />
      </div>

      <div className="flex space-between gap-60">
        {/* Mobile 1 Image with fade-down-right animation */}
        <div ref={mobileImageRef1} className="opacity-0 transition-opacity duration-1000">
          <Image src="/iamges/mobile1.png" width={320} height={60} alt="ZT-Transfer Logo" />
        </div>

        <div className="flex flex-col items-center">
          <p className="pt-16 text-[30px] uppercase font-[400]">DOWNLOAD</p>
          <p className="pt-6 text-[26px] uppercase font-[400]">OUR APP</p>
          <div>
            <Image src="/images/GooglePlay.png" width={230} height={60} alt="ZT-Transfer Logo" />
          </div>
          <div>
            <Image src="/iamges/app-store.png" width={280} height={60} alt="ZT-Transfer Logo" />
          </div>
        </div>

        {/* Mobile 2 Image with fade-down-left animation */}
        <div ref={mobileImageRef2} className="opacity-0 transition-opacity duration-1000">
          <Image src="/images/mobile2.png" width={320} height={60} alt="ZT-Transfer Logo" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-10">
        <p className="pt-4 text-[16px] uppercase">Get the ZIMO app on a phone or tablet</p>
        <p className="pt-4 text-[16px] uppercase">To install ZIMO, follow the link for your device from your smartphone or tablet.</p>
        <p className="pt-4 text-[16px] uppercase">ZIMO is available on many devices. The ZIMO app may come pre-installed or you may need to download and install it.</p>
      </div>
    </section>
  );
}


