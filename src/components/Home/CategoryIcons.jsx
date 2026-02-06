import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const categories = [
    { id: 1, name: "Mobiles", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=150" },
    { id: 2, name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-05328324f375?auto=format&fit=crop&q=80&w=150" },
    { id: 3, name: "Electronics", image: "https://images.unsplash.com/photo-1498049860654-af1a5c5668ba?auto=format&fit=crop&q=80&w=150" },
    { id: 4, name: "Home", image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=150" },
    { id: 5, name: "Appliances", image: "https://images.unsplash.com/photo-1581093458791-9f302e6830d7?auto=format&fit=crop&q=80&w=150" },
    { id: 6, name: "Travel", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=150" },
    { id: 7, name: "Beauty", image: "https://images.unsplash.com/photo-1522335789203-abd652327ed8?auto=format&fit=crop&q=80&w=150" },
    { id: 8, name: "Toys", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=150" },
];

const CategoryIcons = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".category-item", {
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.05,
                ease: "back.out(1.7)",
                delay: 0.5, // Wait for Hero to start
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="bg-white py-6 border-b border-gray-100 shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-8">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className="category-item flex flex-col items-center cursor-pointer group"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-2 border-2 border-transparent group-hover:border-[#E63946] group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-[#E63946] transition-colors">
                                {cat.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryIcons;
