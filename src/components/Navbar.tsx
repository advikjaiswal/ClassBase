"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 group">
          Class<span className="text-primary group-hover:text-primary-hover transition-colors">Base</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            Pricing
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            FAQs
          </Link>
          <a
            href="https://wa.me/919868260790?text=I%E2%80%99m%20interested%20in%20ClassBase%20demo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
          >
            Book a Free Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-6 flex flex-col space-y-4 animate-in slide-in-from-top-4 duration-200">
           <Link 
             href="#features" 
             className="text-gray-700 font-medium py-2"
             onClick={() => setMobileMenuOpen(false)}
           >
            Features
          </Link>
          <Link 
            href="#pricing" 
            className="text-gray-700 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="#faq" 
            className="text-gray-700 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQs
          </Link>
          <a
            href="https://wa.me/919868260790?text=I%E2%80%99m%20interested%20in%20ClassBase%20demo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-center text-white px-5 py-3 rounded-xl font-medium shadow-md w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Free Demo
          </a>
        </div>
      )}
    </nav>
  );
}
