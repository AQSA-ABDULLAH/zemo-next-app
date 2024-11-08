import Image from 'next/image';

export default function Section7() {
  return (
    <section className="container mx-auto relative py-16 px-12 flex flex-col gap-4 min-h-screen uppercase bg-white text-black font-semibold text-lg">

        <div className="flex flex-col">
          <Image src="/images/zemo-meet.png" width={200} height={60} alt="ZIMA Meet Logo" className="w-[200px] lg:w-[400px] 2xl:w-[524px]" />
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
          <Image src="/images/zemo meet.png" width={230} height={60} alt="Visit ZIMO Meet" className="w-[120px] lg:w-[230px] 2xl:w-[430px]" />
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
              <img src="/images/zimomeetscreen1.svg" className="lg:h-[200px] lg:w-[100.5px] xl:h-[200px] xl:w-[100.5px] 2xl:h-[270px] 2xl:w-[133px]" alt="Screen 1" />
              <img src="/images/zimomeetscreen2.svg" className="lg:h-[200px] lg:w-[100.5px] xl:h-[200px] xl:w-[100.5px] 2xl:h-[270px] 2xl:w-[133px] mt-[64px]" alt="Screen 3" />
              <img src="/images/zimomeetscreen3.svg" className="lg:h-[200px] lg:w-[100.5px] xl:h-[200px] xl:w-[100.5px] 2xl:h-[270px] 2xl:w-[133px] mt-[116px]" alt="Screen 2" />
            </div>
            <div className="flex mt-[-102px] hidden">
              <img src="/iamges/zimomeetscreen4.svg" className="lg:h-[200px] lg:w-[100.5px] xl:h-[200px] xl:w-[100.5px] 2xl:h-[270px] 2xl:w-[133px]" alt="Screen 4" />
              <img src="/iamges/zimomeetscreen5.svg" className="lg:h-[200px] lg:w-[100.5px] xl:h-[200px] xl:w-[100.5px] 2xl:h-[270px] 2xl:w-[133px] mt-[64px]" alt="Screen 5" />
              <img src="/iamges/zimomeetscreen6.svg" className="lg:h-[200px] lg:w-[100.5px] xl:h-[200px] xl:w-[100.5px] 2xl:h-[270px] 2xl:w-[133px] mt-[111px]" alt="Screen 6" />
            </div>
          </div>
          <div className="flex flex-col items-center" style={{ opacity: 1, transform: 'none', willChange: 'transform, opacity' }}>
            <button className="mb-3 h-[45px] w-[150px]">
              <img src="/images/GooglePlay.png" className="h-full w-full" alt="Download on Google Play" />
            </button>
            <button className="w-[165px] h-[60px]">
              <img src="/images/app-store.png" className="h-full w-full " alt="Download on App Store" />
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

  )
}
