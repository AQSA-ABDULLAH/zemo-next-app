import Image from 'next/image';

export default function Section8() {
  return (
    <section>
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center text-black p-8 gap-4 font-semibold text-lg relative">

          <div className="flex flex-col items-center">
            <Image src="/images/ZTFR.png" width={560} height={60} alt="ZTFR Logo" />
          </div>

          <p className="text-[30px] pt-16 tracking-wider uppercase font-[400] mt-4">
            Artificial Intelligence for Everyone
          </p>

          <div className="absolute right-8 bottom-16">
            <Image src="/images/ztrf.png" width={180} height={60} alt="ZIMA AI Logo" />
          </div>

          <div className="absolute bottom-8 flex flex-col items-center">
            <div className="w-4 h-6 border-2 border-black rounded-full flex items-start">
              <div className="w-1 h-2 bg-black rounded-full animate-bounce mb-1"></div>
            </div>
          </div>
        </div>
      </section>
  )
}
