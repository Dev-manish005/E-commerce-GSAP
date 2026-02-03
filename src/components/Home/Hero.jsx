import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../../assets/Cartopia-logo.svg";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center">
      <div ref={heroRef} className="text-center px-4">

        {/* LOGO */}
        <img
          src={logo}
          alt="Cartopia Logo"
          className="mx-auto w-26 mb-7"
        />

        {/* SLOGAN */}
        <p className="text-gray-400 text-lg mb-8">
          All you need, <span className="text-white">All in one place</span>
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Shop Now
          </button>
          <button className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-white hover:text-black transition">
            Explore
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;
