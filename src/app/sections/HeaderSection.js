import Image from 'next/image';

export default function HeaderSection() {
    return (
        <section>
            <div className="grid grid-rows-[20px_1fr_20px] items-center  min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)] relative bg-white">

                {/* Main Logo Section */}
                <div className="pt-80 mt-40">
                    <Image src="/zemo-logo.png" width={280} height={0} alt="ZIMO Group Logo" />
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
    )
}
