import React from 'react'

export default function Section15() {
    return (
        <section className=" py-10 bg-black text-white relative flex flex-col justify-center items-center text-center">
            {/* Main Header */}
            <h1 className="text-3xl font-light tracking-wide mb-8" >
                ZIMA TEAM
            </h1>

            <p className="text-[12px] tracking-wide uppercase mb-0">
                Design and build the systems that are changing the world.
            </p>
            <p className="text-[11px] tracking-wide uppercase mb-10">
                Services in over one hundred and twenty countries.
            </p>

            {/* HT Logos */}
            <div
                className="absolute top-8 right-4"
                data-aos="fade-left"
                data-aos-duration="800"
            >
                <img src="/images/TH-logo.png" alt="TechHub Logo" className="w-20" />
            </div>
            

            {/* Discover Section */}
            <div>
                <img src="/images/zimo-logo-white.png" alt="TechHub Logo" className="w-20" />
            </div>
            <div
                className="text-center mt-10 mb-10"
                data-aos="zoom-in"
                data-aos-duration="1000"
            >
                <h3 className="text-xl font-light uppercase">Discover</h3>
                <h2 className="text-5xl font-bold mt-2">A New World</h2>
                <p className="text-sm font-light mt-2">
                    Together, we create and build a better world.
                </p>
            </div>

            {/* Global Vision */}
            <div
                className="mt-10 text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h4 className="text-lg font-light uppercase">Global Vision</h4>
                <p className="text-sm mt-2">
                    With a remote culture, diversity is naturally in our DNA. Based across
                    the globe, making up over 23 different nationalities.
                </p>
            </div>



            {/* Careers Section */}
            <div
                className="absolute bottom-4 right-4 text-right"
                data-aos="fade-up"
                data-aos-duration="800"
            >

                <div>
                    <img src="/images/zimo-career.png" alt="TechHub Logo" className="w-32" />
                </div>
                <a href="#join" className="tracking-wide text-white-500 text-lg">
                    Join our team
                </a>
            </div>
        </section>
    )
}
