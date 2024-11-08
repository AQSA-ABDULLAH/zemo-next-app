import Image from 'next/image';

export default function Section2() {
    return (
        <section>
            <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-8 gap-4 font-semibold text-lg">

                <div className='flex flex-row gap-20'>
                    {/* Logo */}
                    <Image src="/images/zimo-logo2.png" width={200} height={120} alt="ZIMO Group Logo" />

                    {/* Main Text */}
                    <div className='text-[24px] font-[400]'>
                        <p className='mb-2'>WE ARE THE GLOBAL PLATFORM.</p>
                        <p>SERVICES IN OVER ONE HUNDRED AND TWENTY COUNTRIES.</p>
                    </div>
                </div>
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 flex flex-col items-center">
                    <div className="w-4 h-6 border-2 border-white rounded-full flex items-start">
                        <div className="w-1 h-2 bg-white rounded-full animate-bounce mb-1"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
