import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../../assets/Cartopia-logo.svg";

const Hero = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const sloganRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Container Scale/Fade
      // Use fromTo to ensure we explicitly end at opacity 1
      tl.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
      )
        // 2. Logo Slide Up & Fade
        .fromTo(logoRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=1"
        )
        // 3. Slogan Up
        .fromTo(sloganRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        // 4. Heading Up
        .fromTo(headingRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.6"
        )
        // 5. Buttons Stagger
        .fromTo(buttonsRef.current.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
          "-=0.4"
        );
    }, containerRef); // Scope to container

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* Background Gradient for Depth (Subtle Red Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E63946]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

        {/* LOGO & SLOGAN BLOCK */}
        <div className="flex flex-col items-center mb-8">
          <div ref={logoRef} className="mb-2">
            <span className="text-[clamp(4rem,10vw,10rem)] leading-[0.9] font-extrabold tracking-tight text-[#E63946]">Cart</span>
            <span className="text-[clamp(4rem,10vw,10rem)] leading-[0.9] font-extrabold tracking-tight text-black">opia</span>
          </div>

          <p ref={sloganRef} className="text-lg md:text-2xl text-[#555555] font-light tracking-wide">
            All you need, <span className="text-black font-medium">All in one place</span>
          </p>
        </div>

        {/* HEADING */}
        <h1 ref={headingRef} className="text-5xl md:text-7xl font-bold text-black mb-10 tracking-tight">
          Welcome to Cartopia
        </h1>

        {/* CTA BUTTONS */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-5">
          <button className="px-8 py-3.5 bg-[#E63946] text-white rounded-full font-medium text-lg hover:bg-red-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(230,57,70,0.3)]">
            Shop Now
          </button>

          <button className="px-8 py-3.5 border border-gray-300 text-black rounded-full font-medium text-lg hover:bg-black hover:text-white hover:scale-105 active:scale-95 transition-all duration-300">
            Explore
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
