import Image from 'next/image';
import HeaderSection from './sections/HeaderSection';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';

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
      <section className="w-full min-h-screen flex items-center justify-center relative">
        <Image src="/background.png" width={2000} height={150} alt="ZIMA Pro Logo" />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 flex flex-col items-center">
          <div className="w-4 h-6 border-2 border-white rounded-full flex items-start">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce mb-1"></div>
          </div>
        </div>
      </section>


      {/* FIFTH SECTION */}
      <section>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center text-black p-8 gap-4 font-semibold text-lg relative">

          <div className="flex flex-col items-center">
            <Image src="/zimo-ai.png" width={600} height={60} alt="ZIMA AI Logo" />
          </div>

          <p className="text-[30px] pt-16 tracking-wider uppercase font-[400] mt-4">
            Artificial Intelligence for Everyone
          </p>

          <div className="absolute right-8 bottom-16">
            <Image src="/zimo-brick-ai.png" width={200} height={60} alt="ZIMA AI Logo" />
          </div>

          <div className="absolute bottom-8 flex flex-col items-center">
            <div className="w-4 h-6 border-2 border-black rounded-full flex items-start">
              <div className="w-1 h-2 bg-black rounded-full animate-bounce mb-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SIXTH SECTION */}
      <section>
        <video
          src="assets/ZGS SCREEN VIDEO 2.mp4"
          controls
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-screen object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </section>


      {/* SEVENTH SECTION */}
      <section className="container mx-auto relative py-16 px-12 flex flex-col gap-4 min-h-screen uppercase bg-white text-black font-semibold text-lg">

        <div className="flex flex-col">
          <Image src="/zemo-meet.png" width={200} height={60} alt="ZIMA Meet Logo" className="w-[200px] lg:w-[400px] 2xl:w-[524px]" />
        </div>

        <div className="flex flex-col gap-1 tracking-[2px] text-[10px] 2xl:text-[14px] mt-10 text-gray-600">
          <p>PREMIUM VIDEO MEETINGS</p>
          <p>END-TO-END ENCRYPTION</p>
          <p>LOBBY MODE</p>
          <p>PASSWORD PROTECTED MEETINGS</p>
          <p>CUSTOMISED LINKS</p>
          <p>RECORDINGS</p>
          <p>FREE FOR EVERYONE</p>
        </div>

        <a href="https://zimomeet.com" target="_blank" rel="noreferrer" className="lg:absolute left-1/2 top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20" data-aos="zoom-in">
          <Image src="/zimo-meet2.png" width={230} height={60} alt="Visit ZIMO Meet" className="w-[120px] lg:w-[230px] 2xl:w-[430px]" />
          <span className="text-[14px] relative left-40 tracking-[2px]">visit</span>
        </a>

        <article className="flex flex-col tracking-[4px] mt-8">
          <h4 className="text-[18px] lg:text-[20px] 2xl:text-[25px]">discover</h4>
          <h2 className="text-[25px] lg:text-[30px] 2xl:text-[40px] pt-3">one platform</h2>
          <p className="text-silver tracking-[2px] text-[12px] lg:text-[14px] 2xl:text-[16px] pt-3">together, we create and build a better world.</p>
        </article>

        <div className="flex absolute top-[5%] right-[0%]">
          <div className="2xl:mr-[-124px] mr-[-96px]">
            <div className="flex">
              <img src="/zimomeetscreen1.svg" className="lg:h-[200px] lg:w-[100.5px] xl:h-[200px] xl:w-[100.5px] 2xl:h-[270px] 2xl:w-[133px]" alt="Screen 1" />
              <img src="/zimomeetscreen2.svg" className="lg:h-[200px] lg:w-[100.5px] xl:h-[200px] xl:w-[100.5px] 2xl:h-[270px] 2xl:w-[133px] mt-[64px]" alt="Screen 3" />
              <img src="/zimomeetscreen3.svg" className="lg:h-[200px] lg:w-[100.5px] xl:h-[200px] xl:w-[100.5px] 2xl:h-[270px] 2xl:w-[133px] mt-[116px]" alt="Screen 2" />
            </div>
            <div className="flex mt-[-102px] hidden">
              <img src="/zimomeetscreen4.svg" className="lg:h-[200px] lg:w-[100.5px] xl:h-[200px] xl:w-[100.5px] 2xl:h-[270px] 2xl:w-[133px]" alt="Screen 4" />
              <img src="/zimomeetscreen5.svg" className="lg:h-[200px] lg:w-[100.5px] xl:h-[200px] xl:w-[100.5px] 2xl:h-[270px] 2xl:w-[133px] mt-[64px]" alt="Screen 5" />
              <img src="/zimomeetscreen6.svg" className="lg:h-[200px] lg:w-[100.5px] xl:h-[200px] xl:w-[100.5px] 2xl:h-[270px] 2xl:w-[133px] mt-[111px]" alt="Screen 6" />
            </div>
          </div>
          <div className="flex flex-col items-center" style={{ opacity: 1, transform: 'none', willChange: 'transform, opacity' }}>
            <button className="mb-3 h-[45px] w-[150px]">
              <img src="/GooglePlay.png" className="h-full w-full" alt="Download on Google Play" />
            </button>
            <button className="w-[165px] h-[60px]">
              <img src="/app-store.png" className="h-full w-full " alt="Download on App Store" />
            </button>
          </div>
        </div>

        <footer className="flex justify-between items-end relative pt-10">
          <div className="flex items-center gap-x-2">
            <Image src="/lock.png" width={25} height={11} alt="Encryption" />
            <p className="tracking-[2px] text-[12px] lg:text-[14px]">end-to-end ENCRYPTION</p>
          </div>
          <Image src="/large-lock.png" width={96} height={96} alt="Meet Lock" className="w-[40px] lg:w-[96px] absolute right-0 bottom-0" />
        </footer>

        <div className="absolute bottom-8 flex flex-col items-center">
          <div className="w-4 h-6 border-2 border-black rounded-full flex items-start">
            <div className="w-1 h-2 bg-black rounded-full animate-bounce mb-1"></div>
          </div>
        </div>
      </section>


      {/* EIGHTH SECTION */}
      <section>
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center text-black p-8 gap-4 font-semibold text-lg relative">

          <div className="flex flex-col items-center">
            <Image src="/ZTFR.png" width={560} height={60} alt="ZTFR Logo" />
          </div>

          <p className="text-[30px] pt-16 tracking-wider uppercase font-[400] mt-4">
            Artificial Intelligence for Everyone
          </p>

          <div className="absolute right-8 bottom-16">
            <Image src="/ztrf.png" width={180} height={60} alt="ZIMA AI Logo" />
          </div>

          <div className="absolute bottom-8 flex flex-col items-center">
            <div className="w-4 h-6 border-2 border-black rounded-full flex items-start">
              <div className="w-1 h-2 bg-black rounded-full animate-bounce mb-1"></div>
            </div>
          </div>
        </div>
      </section>

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


