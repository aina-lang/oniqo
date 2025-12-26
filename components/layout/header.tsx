"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/marques", label: "Nos marques" },
    { href: "/solutions", label: "Solutions" },
    { href: "/investisseurs", label: "Investisseurs" },
    { href: "#", label: "Carrières" },
    { href: "#", label: "Actualités" },
  ];

  return (
    <header 
      className={`fixed bg-white top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-8 mx-auto py-5 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#1f2837] tracking-tighter">
          Oniqo
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-[#1f2837] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button className="bg-[#1f2837] h-10 hover:bg-slate-800 text-white rounded-full px-6 text-sm py-4 transition-all hover:scale-105">
              Contact
            </Button>
          </Link>
        </nav>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-6 w-6 text-[#1f2837]" />
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-8">
          <div className="flex items-center justify-between ">
            <span className="text-2xl font-bold text-[#1f2837] tracking-tighter">Oniqo</span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6 text-[#1f2837]" />
            </Button>
          </div>
          <div className="h-px bg-slate-200 my-6"></div>
          <nav className="flex flex-col gap-6 mb-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-lg font-medium text-slate-600 hover:text-[#1f2837] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full bg-[#1f2837] h-12 hover:bg-slate-800 text-white rounded-2xl text-lg font-semibold transition-all">
              Contact
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

