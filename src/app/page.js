import Image from 'next/image';
import HeaderSection from './sections/HeaderSection';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Section6 from './sections/Section6';
import Section7 from './sections/Section7';
import Section8 from './sections/Section8';

export default function Home() {
  return (
    <div>
      {/* FIRST SECTION */}
      <HeaderSection />

      {/* SECOND SECTION */}
      <Section2 />

      {/* THIRD SECTION */}
      <Section3 />

      {/* FOURTH SECTION */}
      <Section4 />

      {/* FIFTH SECTION */}
      <Section5 />

      {/* SIXTH SECTION */}
      <Section6 />


      {/* SEVENTH SECTION */}
      <Section7 />

      {/* EIGHTH SECTION */}
      <Section8 />

      {/* NINTH SECTION */}
      {/* Section for Real Estate */}
      <section id="section7" className="relative min-h-screen w-full">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://zimogroup.org/_next/static/media/beach.8a0e41e5.png)',
            backgroundAttachment: 'fixed',
          }}
        />

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <h4 className="text-4xl uppercase text-white opacity-50 tracking-wider text-center" data-aos="fade-left">
            Beaches
          </h4>
        </div>
      </section>

      {/* Section for Real Estate */}
      <section id="section7" className="relative min-h-screen w-full">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://zimogroup.org/_next/static/media/bg-1.73b2c3da.png)',
            backgroundAttachment: 'fixed',
          }}
        />

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <h4 className="text-4xl uppercase text-white opacity-50 tracking-wider text-center" data-aos="fade-left">
            Real State
          </h4>
        </div>
      </section>

      {/* Section for Cars */}
      <section id="section7" className="relative min-h-screen w-full">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://zimogroup.org/_next/static/media/cars.b1e107ec.png)',
            backgroundAttachment: 'fixed',
          }}
        />

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <h4 className="text-4xl uppercase text-white opacity-50 tracking-wider text-center" data-aos="fade-left">
            Cars
          </h4>
        </div>
      </section>

      {/* Section for Yachts */}
      <section id="section7" className="relative min-h-screen w-full">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://zimogroup.org/_next/static/media/yatch.ee02e208.png)',
            backgroundAttachment: 'fixed',
          }}
        />

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <h4 className="text-4xl uppercase text-white opacity-50 tracking-wider text-center" data-aos="fade-left">
            Yachts
          </h4>
        </div>
      </section>

      {/* Section for Watches */}
      <section id="section8" className="relative min-h-screen w-full">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://zimogroup.org/_next/static/media/watches.16d9cc71.png)',
            backgroundAttachment: 'fixed',
          }}
        />

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <h4 className="text-4xl uppercase text-white opacity-50 tracking-wider text-center" data-aos="fade-right">
            Watches
          </h4>
        </div>


      </section>

      {/* TENTH SECTION */}
      <section id="zdoc" className="section container mx-auto min-h-screen flex flex-col justify-between py-16">
        {/* Encryption Standard Text */}
        <div data-aos="fade-down" className="flex justify-center mt-[40px]">
          <img src="/lock.png" className="opacity-50 w-[20px] mr-2 mb-1 lg:mb-0" alt="Encryption Lock" />
          <p className="lg:text-[14px] text-[9px] tracking-[2px] opacity-50 uppercase text-[#737373] text-center">
            ZIDOC USES ADVANCED ENCRYPTION STANDARD (AES) 256-BIT TO PROTECT THE CONFIDENTIALITY OF THE INFORMATION YOU SUBMIT
          </p>
        </div>

        {/* ZIDOC Logo */}
        <div className="flex justify-center my-8" data-aos="fade-down">
          <img src="/zdoc.png" alt="ZIDOC Logo" className="w-[200px] lg:w-[300px] h-auto" />
        </div>

        {/* Document Signing Description */}
        <div data-aos="fade-up" className="pb-16 md:pb-8 text-center">
          <p className="lg:text-[14px] text-[9px] tracking-[2px] opacity-50 uppercase text-[#737373]">
            Document-signing software technology that lets you sign documents online.
          </p>

          {/* Signature Image */}
          <div className="mt-8 flex justify-end pr-8">
            <img src="/signature.png" className="w-[200px] lg:w-[320px]" alt="Signature" />
          </div>
        </div>
      </section>

      {/* ELEVENTH SECTION */}
      <section className="section bg-black relative min-h-screen flex flex-col justify-center items-center" id="section14">
        {/* Centered Text */}
        <div className="flex justify-center items-center min-h-screen relative z-10">
          <h4 className="text-[16px] lg:text-[25px] text-center uppercase text-white tracking-wider aos-init aos-animate" data-aos="flip-up">
            A REAL ESTATE AND PROPERTY PLATFORM THAT WILL CHANGE THE WORLD.
          </h4>
        </div>

        {/* Scroll Animation */}
        <a className="navigate-down cursor-pointer text-white invert" href="#nextSection">
          <div className="scroll__animation" style={{ opacity: 1, willChange: 'auto' }}>
            <div className="mouse"></div>
          </div>
        </a>

      </section>


      {/* TWELTH SECTION */}
      <section id="section15" className="section min-h-screen relative overflow-hidden bg-white">
        <div className="w-full min-h-screen flex justify-center items-center text-center">

          {/* Text and Logo */}
          <div data-aos="zoom-in-up" className="aos-init aos-animate">
            <h2 className="text-[25px] font-normal uppercase tracking-wider">Bringing the world closer together.</h2>
            <img className="block mx-auto mt-6" src="/zimo-logo-2.png" alt="Zimo Logo" />
          </div>

          {/* Hero Image Wrapper */}
          <div className="hero-img-wrapper">
            <img src="/zimoback.png" data-aos="zoom-in-down" alt="Zimo Black Logo" className="aos-init aos-animate" />
          </div>
        </div>

        {/* Scroll Down Icon */}
        <a className="navigate-down cursor-pointer text-black invert" href="#nextSection">
          <div className="scroll__animation" style={{ opacity: 1, willChange: 'auto' }}>
            <div className="mouse"></div>
          </div>
        </a>
      </section>

      {/* THIRTEEN SECTION */}
      <section className="section bg-black relative min-h-screen flex flex-col justify-center items-center" id="section14">
        {/* Centered Text */}
        <div className="flex justify-center items-center min-h-screen relative z-10">
          <h4 className="text-[16px] lg:text-[25px] uppercase text-center text-white tracking-wider aos-init aos-animate" data-aos="flip-up">
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

      {/* FOURTEEN SECTION */}
      <section className='py-16 px-10'>
        <div className="flex flex-col items-center mb-8">
          <Image src="/zimo-download.png" width={120} height={60} alt="ZT-Transfer Logo" />
        </div>



        <div className="flex space-between gap-60 ">
          <div>
            <Image src="/mobile1.png" width={320} height={60} alt="ZT-Transfer Logo" />
          </div>

          <div className='flex flex-col items-center'>
            <p className='pt-16 text-[30px] uppercase font-[400]'>DOWNLOAD</p>
            <p className='pt-6 text-[26px] uppercase font-[400]'>OUR APP</p>
            <div>
              <Image src="/GooglePlay.png" width={230} height={60} alt="ZT-Transfer Logo" />
            </div>
            <div>
              <Image src="/app-store.png" width={280} height={60} alt="ZT-Transfer Logo" />
            </div>
          </div>

          <div >
            <Image src="/mobile2.png" width={320} height={60} alt="ZT-Transfer Logo" />
          </div>
        </div>


        <div className='flex flex-col items-center mt-10'>
          <p className='pt-4 text-[16px] uppercase'>Get the ZIMO app on a phone or tablet</p>
          <p className='pt-4 text-[16px] uppercase'>To install ZIMO, follow the link for your device from your smartphone or tablet.</p>
          <p className='pt-4 text-[16px] uppercase'>ZIMO is available on many devices. The ZIMO app may come pre-installed or you may need to download and install it.</p>
        </div>
      </section>

      {/* FIFTEEN SECTION */}
      <section
        className="min-h-screen bg-black text-white relative flex flex-col justify-center items-center text-center px-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        {/* Main Header */}
        <h1
          className="text-3xl font-light tracking-wide mb-2"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          ZIMA TEAM
        </h1>

        {/* Subtitle */}
        <p
          className="text-sm uppercase mb-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Design and build the systems that are changing the world. Services in over
          one hundred and twenty countries.
        </p>

        {/* Discover Section */}
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

        {/* Logos */}
        <div
          className="absolute top-4 right-4"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <img src="/path/to/techub-logo.png" alt="TechHub Logo" className="w-20" />
        </div>

        {/* Careers Section */}
        <div
          className="absolute bottom-4 right-4 text-right"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h5 className="text-lg font-light">ZIMA CAREERS</h5>
          <a href="#join" className="text-blue-500 underline text-sm">
            Join our team
          </a>
        </div>
      </section>

      {/* SIXTEEN SECTION */}
      <section id="section15" className="section min-h-screen relative overflow-hidden bg-black">
        <div className="w-full min-h-screen flex justify-center items-center text-center">

          {/* Text and Logo */}
          <div data-aos="zoom-in-up" className="aos-init aos-animate">
            <h2 className="text-[25px] font-normal uppercase tracking-wider text-white">Bringing the world closer together.</h2>
          </div>

          {/* Hero Image Wrapper */}
          <div className="hero-img-wrapper">
            <img src="/zimo-logo-2.png" data-aos="zoom-in-down" alt="Zimo Black Logo" className="aos-init aos-animate" />
          </div>
        </div>

        <h2 className="text-[25px] font-normal flex justify-center items-center uppercase tracking-wider text-white">email.</h2>

        {/* Scroll Down Icon */}
        <a className="navigate-down cursor-pointer text-black invert" href="#nextSection">
          <div className="scroll__animation" style={{ opacity: 1, willChange: 'auto' }}>
            <div className="mouse"></div>
          </div>
        </a>
      </section>

      {/* SEVENTEEN SECTION */}
      <section id="section15" className="section min-h-screen relative overflow-hidden bg-gray-400">
        <div className="w-full min-h-screen flex justify-center items-center text-center">

          <div className="hero-img-wrapper flex justify-center items-center">
            <img src="/thank-you.png" data-aos="zoom-in-down" alt="Zimo Black Logo" className="aos-init aos-animate" />
          </div>

        </div>

        {/* Hero Image Wrapper */}
        <div className="hero-img-wrapper flex justify-center items-center">
          <img src="/zimo-logo-2.png" data-aos="zoom-in-down" alt="Zimo Black Logo" className="aos-init aos-animate" />
        </div>

        {/* Scroll Down Icon */}
        <a className="navigate-down cursor-pointer text-black invert" href="#nextSection">
          <div className="scroll__animation" style={{ opacity: 1, willChange: 'auto' }}>
            <div className="mouse"></div>
          </div>
        </a>
      </section>

      {/* EIGHTEEN SECTION */}
      <section className="flex flex-col items-center text-center p-8 bg-white">
        <div className="w-full max-w-screen-lg">
          {/* Contact Title */}
          <h2 className="text-lg font-medium mb-8">CONTACT</h2>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Left Column */}
            <div className="flex flex-col items-center md:items-start text-sm">
              <p className="font-bold mb-2">ENQUIRIES</p>
              <p>hello@zimogroup.org</p>
            </div>

            {/* Center Column - Logo and Company Info */}
            <div className="flex flex-col items-center text-center">
              {/* Logo */}
              <div className="mb-4">
                <img src="/logo.png" alt="Zima Group Logo" className="h-12" />
              </div>
              <h3 className="font-bold text-lg mb-2">ZIMO GROUP LIMITED</h3>
              <p>71 - 75 Shelton Street Covent Garden London WC2H 9JQ England United Kingdom</p>
              <p>zimogroup.org • hello@zimogroup.org</p>
              <p>Registered in England 14383397</p>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-center md:items-start text-sm">
              <p className="font-bold mb-2">PROPERTY PROFESSIONALS / AGENTS</p>
              <p>agent@zimogroup.org</p>
              <p className="font-bold mt-4">ADVERTISING</p>
              <p>advertising@zimogroup.org</p>
              <p className="font-bold mt-4">SPONSORSHIP</p>
              <p>sponsor@zimogroup.org</p>
              <p className="font-bold mt-4">PARTNERS</p>
              <p>partners@zimogroup.org</p>
              <p className="font-bold mt-4">LEGAL</p>
              <p>legal@zimogroup.org</p>
            </div>
          </div>

          {/* Additional Contact Options */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-sm">
            <div>
              <p className="font-bold">REAL ESTATE</p>
              <p>realestate@zimogroup.org</p>
            </div>
            <div>
              <p className="font-bold">CARS</p>
              <p>cars@zimogroup.org</p>
            </div>
            <div>
              <p className="font-bold">YACHTS</p>
              <p>yachts@zimogroup.org</p>
            </div>
            <div>
              <p className="font-bold">WATCHES</p>
              <p>watches@zimogroup.org</p>
            </div>
            <div>
              <p className="font-bold">JETS</p>
              <p>jets@zimogroup.org</p>
            </div>
            <div>
              <p className="font-bold">PRIVATE ISLANDS</p>
              <p>privateislands@zimogroup.org</p>
            </div>
            <div>
              <p className="font-bold">DIAMONDS</p>
              <p>diamonds@zimogroup.org</p>
            </div>
            <div>
              <p className="font-bold">TRAVEL THE WORLD</p>
              <p>ttw@zimogroup.org</p>
            </div>
            <div>
              <p className="font-bold">PRESS - UK</p>
              <p>press-uk@zimogroup.org</p>
            </div>
            <div>
              <p className="font-bold">PRESS - EUROPE</p>
              <p>press-eu@zimogroup.org</p>
            </div>
            <div>
              <p className="font-bold">PRESS - NORTH AMERICA</p>
              <p>press-na@zimogroup.org</p>
            </div>
            <div>
              <p className="font-bold">PRESS - MIDDLE EAST</p>
              <p>press-me@zimogroup.org</p>
            </div>
            <div>
              <p className="font-bold">PRESS - AFRICA</p>
              <p>press-af@zimogroup.org</p>
            </div>
            <div>
              <p className="font-bold">PRESS - CHINA/HONG KONG</p>
              <p>press-ch@zimogroup.org</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-xs text-gray-500">
            <p>ZIMO is a wholly owned subsidiary company of ZIMO GROUP LIMITED.</p>
            <p>Registered office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, England, United Kingdom.</p>
          </div>
        </div>
      </section>

    </div>
  );
}


