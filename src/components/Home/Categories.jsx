import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
    { id: 1, name: "Smart Home", image: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png" },
    { id: 2, name: "Gadget", image: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png" },
    { id: 3, name: "Beauty", image: "https://cdn-icons-png.flaticon.com/512/2964/2964514.png" },
    { id: 4, name: "Toys", image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png" },
    { id: 5, name: "Baby Care", image: "https://cdn-icons-png.flaticon.com/512/2964/2964540.png" },
    { id: 6, name: "Sports", image: "https://cdn-icons-png.flaticon.com/512/857/857418.png" },
    { id: 7, name: "Fashion", image: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
    { id: 8, name: "Flash Deals", image: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" },
];

const Categories = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".category-item", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-sm uppercase tracking-[0.2em] text-gray-400 font-bold mb-12">
                    Our Collections
                </h2>

                <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
                    {categories.map((category) => (
                        <div key={category.id} className="category-item flex flex-col items-center cursor-pointer group">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 transition-all duration-500">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain z-10 group-hover:scale-110 transition-all duration-300"
                                />
                            </div>
                            <p className="mt-4 text-[10px] sm:text-xs font-bold text-gray-400 group-hover:text-black transition-colors duration-300 uppercase tracking-widest">
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;