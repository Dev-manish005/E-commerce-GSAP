import React, { useState } from 'react';
import { User, Heart, Package, X, Menu } from 'lucide-react'; // Install: npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'My Profile', icon: <User size={20}/> },
    { name: 'Wishlist', icon: <Heart size={20}/> },
    { name: 'My Orders', icon: <Package size={20}/> },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-40 flex justify-between items-center px-6 md:px-10 py-6 backdrop-blur-md border-b border-white/10 text-white">
        <div className="text-2xl font-bold tracking-tighter">
          CART<span className="text-blue-500">OPIA</span>
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsOpen(true)}
            className="hover:text-blue-500 transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* --- SLIDER / SIDEBAR --- */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#111] z-50 transform transition-transform duration-300 ease-in-out border-l border-white/10 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <button onClick={() => setIsOpen(false)} className="mb-8 hover:rotate-90 transition-transform">
            <X size={30} />
          </button>

          <div className="flex flex-col gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 cursor-pointer group transition">
                <span className="group-hover:text-blue-500">{item.icon}</span>
                <span className="text-lg font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;