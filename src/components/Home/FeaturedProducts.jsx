import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        id: 1,
        name: "Noise-Canceling Headphones",
        price: "₹1,499",
        originalPrice: "₹2,799",
        discount: "46% off",
        rating: 4.9,
        reviews: 7,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: 2,
        name: "Smart Fitness Watch Series 7",
        price: "₹6,499",
        originalPrice: "₹12,999",
        discount: "50% off",
        rating: 4.4,
        reviews: 16,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: 3,
        name: "Professional Camera Lens",
        price: "₹367",
        originalPrice: "₹1,999",
        discount: "81% off",
        rating: 4.3,
        reviews: 9,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: 4,
        name: "Designer Running Shoes",
        price: "₹136",
        originalPrice: "₹399",
        discount: "65% off",
        rating: 3.7,
        reviews: 129,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
    },
];

const FeaturedProducts = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading Animation
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );

            // Cards Animation - Staggered Fade Up
            gsap.fromTo(
                cardsRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="featured-products"
            ref={sectionRef}
            className="py-16 px-4 bg-gray-100 scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto">
                <div ref={headingRef} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        Featured Products
                    </h2>
                    <p className="text-gray-500">
                        Top picks for you
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="bg-white p-3 rounded-sm hover:shadow-lg transition-shadow duration-300 relative flex flex-col"
                        >
                            {/* Wishlist Icon */}
                            <div className="absolute top-4 right-4 z-10 text-gray-300 hover:text-red-500 cursor-pointer">
                                <Heart size={20} fill="currentColor" className="text-gray-200 hover:text-red-500 transition-colors" />
                            </div>

                            {/* Image Container */}
                            <div className="w-full h-44 flex justify-center items-center mb-3 relative overflow-hidden group">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col gap-1">
                                <div className="text-gray-500 text-xs font-medium mb-1">Sponsored</div>
                                <h3 className="text-sm font-medium text-gray-900 leading-snug line-clamp-2 hover:text-blue-600 cursor-pointer">
                                    {product.name}
                                </h3>

                                {/* Rating Badge */}
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="flex items-center bg-green-700 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] gap-0.5">
                                        {product.rating} <Star size={8} fill="currentColor" />
                                    </div>
                                    <span className="text-gray-500 text-xs font-medium">({product.reviews})</span>
                                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="Assured" className="h-4 invisible" /> {/* Placeholder for alignment if needed, or remove */}
                                </div>

                                {/* Price Block */}
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-lg font-bold text-black">{product.price}</span>
                                    <span className="text-gray-500 text-sm line-through">{product.originalPrice}</span>
                                    <span className="text-green-700 text-xs font-bold">{product.discount}</span>
                                </div>

                                <div className="text-[10px] font-medium text-green-700">Bank Offer</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="px-8 py-3 bg-blue-600 text-white font-medium text-sm rounded-sm shadow-sm hover:bg-blue-700 transition-colors">
                        VIEW ALL
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
