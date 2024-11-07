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

          {/* ZIMA AI Logo */}
          <div className="flex flex-col items-center">
            <Image src="/zimo-ai.png" width={600} height={60} alt="ZIMA AI Logo" />
          </div>

          {/* Main Text */}
          <p className="text-[30px] pt-16 tracking-wider uppercase font-[400] mt-4">
            Artificial Intelligence for Everyone
          </p>

          {/* Image aligned to the right side of the screen */}
          <div className="absolute right-8 bottom-16">
            <Image src="/zimo-brick-ai.png" width={200} height={60} alt="ZIMA AI Logo" />
          </div>

          {/* Scroll Indicator */}
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
      <section className="container mx-auto relative py-16 flex flex-col gap-4 min-h-screen uppercase  bg-white text-black font-semibold text-lg">

        {/* ZIMA MEET Logo */}
        <div className="flex flex-col">
          <Image src="/zemo-meet.png" width={200} height={60} alt="ZIMA Meet Logo" className="w-[200px] lg:w-[400px] 2xl:w-[524px]" />
        </div>

        {/* Features List */}
        <div className="flex flex-col gap-1 tracking-[2px] text-[10px] 2xl:text-[14px] mt-10 text-gray-600">
          <p>PREMIUM VIDEO MEETINGS</p>
          <p>END-TO-END ENCRYPTION</p>
          <p>LOBBY MODE</p>
          <p>PASSWORD PROTECTED MEETINGS</p>
          <p>CUSTOMISED LINKS</p>
          <p>RECORDINGS</p>
          <p>FREE FOR EVERYONE</p>
        </div>

        {/* Visit Button with Camera Icon */}
        <a href="https://zimomeet.com" target="_blank" rel="noreferrer" className="lg:absolute left-1/2 top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20" data-aos="zoom-in">
          <Image src="/assets/meet/cam.png" width={230} height={60} alt="Visit ZIMO Meet" className="w-[120px] lg:w-[230px] 2xl:w-[430px]" />
          <span className="text-[14px] relative -top-4 tracking-[2px]">visit</span>
        </a>

        {/* Tagline */}
        <article className="flex flex-col tracking-[4px] mt-8">
          <h4 className="text-[18px] lg:text-[20px] 2xl:text-[25px]">discover</h4>
          <h2 className="text-[25px] lg:text-[30px] 2xl:text-[40px] pt-3">one platform</h2>
          <p className="text-silver tracking-[2px] text-[12px] lg:text-[14px] 2xl:text-[16px] pt-3">together, we create and build a better world.</p>
        </article>

        {/* Footer */}
        <footer className="flex justify-between items-end relative pt-10">
          <div className="flex items-center gap-x-2">
            <Image src="/lock.png" width={25} height={11} alt="Encryption" />
            <p className="tracking-[2px] text-[12px] lg:text-[14px]">end-to-end ENCRYPTION</p>
          </div>
          <Image src="/large-lock.png" width={96} height={96} alt="Meet Lock" className="w-[40px] lg:w-[96px] absolute right-0 bottom-0" />
        </footer>

        {/* Background Camera Icon */}
        <div className="absolute w-[60vw] max-w-[1000px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src="/assets/meet/cam.png" width={50} height={0} alt="Background Camera" className="w-full opacity-50 blur-md" />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 flex flex-col items-center">
          <div className="w-4 h-6 border-2 border-black rounded-full flex items-start">
            <div className="w-1 h-2 bg-black rounded-full animate-bounce mb-1"></div>
          </div>
        </div>
      </section>





      {/* EIGHTH SECTION */}
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
          <p>Get the ZIMO app on a phone or tablet</p>
          <p>To install ZIMO, follow the link for your device from your smartphone or tablet.</p>
          <p>ZIMO is available on many devices. The ZIMO app may come pre-installed or you may need to download and install it.</p>
        </div>
      </section>

    </div>
  );
}


