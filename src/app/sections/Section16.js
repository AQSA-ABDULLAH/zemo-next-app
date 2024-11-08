import React from 'react'

export default function Section16() {
    return (
        <section id="section15" className="section bg-gray-400">
            <div className="w-full h-[420px] flex justify-center items-center text-center">

                <div className="hero-img-wrapper flex justify-center items-center">
                    <img src="/images/thank-you.png" data-aos="zoom-in-down" alt="Zimo Black Logo" className="aos-init aos-animate" />
                </div>

            </div>

            {/* Hero Image Wrapper */}
            <div className="hero-img-wrapper flex justify-center items-center pb-6">
                <img src="/images/zimo-logo-2.png" data-aos="zoom-in-down" alt="Zimo Black Logo" className="aos-init aos-animate" />
            </div>

            <div className="flex justify-between pb-2 px-4 text-[12px]">
                <p>ZIMO GROUP 2024 ALL RIGHTS RESERVED</p>
                <p>TERMS AND SERVICES | PRIVACY POLICY</p>
            </div>


            {/* Scroll Down Icon */}
            <a className="navigate-down cursor-pointer text-black invert" href="#nextSection">
                <div className="scroll__animation" style={{ opacity: 1, willChange: 'auto' }}>
                    <div className="mouse"></div>
                </div>
            </a>
        </section>
    )
}
