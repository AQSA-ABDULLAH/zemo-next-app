export default function Section10() {
  return (
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
      <img src="/images/zdoc.png" alt="ZIDOC Logo" className="w-[200px] lg:w-[300px] h-auto" />
    </div>

    {/* Document Signing Description */}
    <div data-aos="fade-up" className="pb-16 md:pb-8 text-center">
      <p className="lg:text-[14px] text-[9px] tracking-[2px] opacity-50 uppercase text-[#737373]">
        Document-signing software technology that lets you sign documents online.
      </p>

      {/* Signature Image */}
      <div className="mt-8 flex justify-end pr-8">
        <img src="/images/signature.png" className="w-[200px] lg:w-[320px]" alt="Signature" />
      </div>
    </div>
  </section>

  )
}
