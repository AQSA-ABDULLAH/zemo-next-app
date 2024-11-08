export default function Section12() {
  return (
    <section id="section15" className="section min-h-screen relative overflow-hidden bg-white">
    <div className="w-full min-h-screen flex justify-center items-center text-center">

      {/* Text and Logo */}
      <div data-aos="zoom-in-up" className="aos-init aos-animate">
        <h2 className="text-[25px] font-normal uppercase tracking-wider">Bringing the world closer together.</h2>
        <img className="block mx-auto mt-6" src="/images/zimo-logo-2.png" alt="Zimo Logo" />
      </div>

      {/* Hero Image Wrapper */}
      <div className="hero-img-wrapper">
        <img src="/images/zimoback.png" data-aos="zoom-in-down" alt="Zimo Black Logo" className="aos-init aos-animate" />
      </div>
    </div>

    {/* Scroll Down Icon */}
    <a className="navigate-down cursor-pointer text-black invert" href="#nextSection">
      <div className="scroll__animation" style={{ opacity: 1, willChange: 'auto' }}>
        <div className="mouse"></div>
      </div>
    </a>
  </section>
  )
}
