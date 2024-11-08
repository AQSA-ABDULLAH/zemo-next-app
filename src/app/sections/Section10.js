"use client";

import React, { useEffect, useRef } from 'react';

export default function Section10() {
  const encryptionRef = useRef(null);
  const logoRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target === encryptionRef.current || entry.target === logoRef.current) {
            entry.target.classList.add('animate-fadeDown');
          } else if (entry.target === descriptionRef.current) {
            entry.target.classList.add('animate-fadeUp');
          }
        }
      },
      { threshold: 0.1 }
    );

    if (encryptionRef.current) observer.observe(encryptionRef.current);
    if (logoRef.current) observer.observe(logoRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    return () => {
      if (encryptionRef.current) observer.unobserve(encryptionRef.current);
      if (logoRef.current) observer.unobserve(logoRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
    };
  }, []);

  return (
    <section id="zdoc" className="section container mx-auto min-h-screen flex flex-col justify-between py-16">
      {/* Encryption Standard Text */}
      <div ref={encryptionRef} className="flex justify-center mt-[40px] opacity-0">
        <img src="/images/lock.png" className="opacity-50 w-[20px] mr-2 mb-1 lg:mb-0" alt="Encryption Lock" />
        <p className="lg:text-[14px] text-[9px] tracking-[2px] opacity-50 uppercase text-[#737373] text-center">
          ZIDOC USES ADVANCED ENCRYPTION STANDARD (AES) 256-BIT TO PROTECT THE CONFIDENTIALITY OF THE INFORMATION YOU SUBMIT
        </p>
      </div>

      {/* ZIDOC Logo */}
      <div ref={logoRef} className="flex justify-center my-8 opacity-0">
        <img src="/images/zdoc.png" alt="ZIDOC Logo" className="w-[200px] lg:w-[300px] h-auto" />
      </div>

      {/* Document Signing Description */}
      <div ref={descriptionRef} className="pb-16 md:pb-8 text-center opacity-0">
        <p className="lg:text-[14px] text-[9px] tracking-[2px] opacity-50 uppercase text-[#737373]">
          Document-signing software technology that lets you sign documents online.
        </p>

        {/* Signature Image */}
        <div className="mt-8 flex justify-end pr-8">
          <img src="/images/signature.png" className="w-[200px] lg:w-[320px]" alt="Signature" />
        </div>
      </div>
    </section>
  );
}

