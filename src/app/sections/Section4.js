import Image from 'next/image';

export default function Section4() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative">
        <Image src="/images/background.png" width={2000} height={150} alt="ZIMA Pro Logo" />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 flex flex-col items-center">
          <div className="w-4 h-6 border-2 border-white rounded-full flex items-start">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce mb-1"></div>
          </div>
        </div>
      </section>
  )
}
