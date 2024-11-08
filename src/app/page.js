import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* FIRST SECTION */}
      <section>
        <div className="grid grid-rows-[20px_1fr_20px] items-center  min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)] relative bg-white">

          {/* Main Logo Section */}
          <div className="pt-80 mt-40">
            <Image src="/zemo-logo.png" width={320} height={0} alt="ZIMO Group Logo" />
          </div>



          {/* Blurred Background Text - Centered */}
          <div className="flex justify-center text-[250px] font-bold text-gray-400 opacity-10 select-none">
            ZIMO
          </div>


          {/* Scroll Indicator */}
          <div className="flex justify-center bottom-8 flex-col items-center">
            <div className="w-4 h-6 border-2 border-black rounded-full flex items-start">
              <div className="w-1 h-2 bg-black rounded-full animate-bounce mb-1"></div>
            </div>
          </div>
        </div>
      </section>


      {/* SECOND SECTION */}
      <section>
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-8 gap-4 font-semibold text-lg">

          {/* Logo */}
          <Image src="/zimo-logo2.png" width={400} height={120} alt="ZIMO Group Logo" />

          {/* Main Text */}
          <p>WE ARE THE GLOBAL PLATFORM.</p>
          <p>SERVICES IN OVER ONE HUNDRED AND TWENTY COUNTRIES.</p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 flex flex-col items-center">
            <div className="w-4 h-6 border-2 border-white rounded-full flex items-start">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce mb-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* THIRD SECTION */}
      <section>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center text-black p-8 gap-8 font-semibold text-lg relative">

          <p className="text-[30px] font-[400] pb-12 text-center tracking-wider aos-init aos-animate">REVOLUTIONARY</p>

          {/* Logos and Divider */}
          <div className="flex items-center gap-40">
            {/* Left Logo */}
            <div className="flex flex-col items-center">
              <Image src="/zimo-logo3.png" width={350} height={50} alt="ZIMA Logo" />
            </div>

            {/* Vertical Divider */}
            <div className="w-px h-48 bg-gray-400"></div>

            {/* Right Logo with "Pro" badge */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <Image src="/zimo-logo3.png" width={350} height={50} alt="ZIMA Pro Logo" />
                <span className="absolute top-0 left-80 bg-black text-white text-xs px-1 py-0.5">PRO</span>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <p className="text-center text-[30px] pt-16 tracking-wider uppercase font-[400] aos-init aos-animate">
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
      <section id="zdoc" className="section container min-h-screen flex flex-col justify-between py-16">
        <div data-aos="fade-down" className="flex justify-center mt-10">
          <img src="/lock.png" className="opacity-50 w-[20px] mr-2 mb-1 lg:mb-0" alt="Encryption Lock" />
          <p className="lg:text-[14px] text-[9px] tracking-[2px] opacity-50 uppercase text-gray-500 text-center">
            ZIDOC USES ADVANCED ENCRYPTION STANDARD (AES) 256-BIT TO PROTECT THE CONFIDENTIALITY OF THE INFORMATION YOU SUBMIT
          </p>
        </div>

        <div className="flex justify-center my-8" data-aos="fade-down">
          <img src="/zdco.png" alt="ZIDOC Logo" className="w-[200px] lg:w-[300px] h-auto" />
        </div>

        <div data-aos="fade-up" className="pb-16 md:pb-8 text-center">
          <p className="lg:text-[14px] text-[9px] tracking-[2px] opacity-50 uppercase text-gray-500">
            Document-signing software technology that lets you sign documents online.
          </p>

          <div className="mt-8 flex justify-end pr-8">
            <img src="/signature.png" className="w-[200px] lg:w-[320px]" alt="Signature" />
          </div>
        </div>
      </section>



      <section>
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center text-white p-8 gap-4 font-semibold text-lg relative">

          {/* ZT-Transfer Logo */}
          <div className="flex flex-col items-center">
            <Image src="/ztransfer-logo.png" width={320} height={60} alt="ZT-Transfer Logo" />
          </div>

          {/* Main Text */}
          <p className="text-[28px] pt-8 tracking-wider uppercase font-[400]">Fast, Secure, Global Transfers</p>

          {/* Feature List */}
          <div className="mt-8 text-gray-400">
            <ul className="space-y-2 text-base">
              <li>🚀 High-Speed Transfers Worldwide</li>
              <li>🔒 Enhanced Security Protocols</li>
              <li>🌍 Supports Over 100 Currencies</li>
              <li>💱 Low Conversion Fees</li>
              <li>📊 Real-Time Tracking & Updates</li>
            </ul>
          </div>

          {/* Tagline */}
          <p className="text-lg mt-8 font-light text-gray-500">ZT-Transfer: The Fastest Way to Move Your Funds Globally.</p>

          {/* Call to Action */}
          <button className="mt-8 px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300">
            Get Started with ZT-Transfer
          </button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 flex flex-col items-center">
            <div className="w-4 h-6 border-2 border-white rounded-full flex items-start">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce mb-1"></div>
            </div>
          </div>
        </div>
      </section>


      {/* NINTH SECTION */}
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

    </div>
  );
}


