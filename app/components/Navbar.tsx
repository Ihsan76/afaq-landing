"use client";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "لماذا آفاق؟", href: "#features" },
  { label: "الكورسات", href: "#courses" },
  { label: "من نحن", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0f1e]/90 backdrop-blur-md border-b border-white/10">
      <div className="container-center">
        <div className="flex items-center justify-between py-3">

          {/* الشعار — ينقل لأعلى الصفحة */}
          <a href="#" className="flex items-center gap-2">
            <Image src="/logo.png" alt="آفاق" width={40} height={40} className="object-contain" />
            <span className="text-base md:text-lg font-bold text-white whitespace-nowrap">
              أكاديمية آفاق
            </span>
          </a>


        

        {/* روابط التنقل — شاشة كبيرة */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* زر التسجيل + زر الموبايل */}
        <div className="flex items-center gap-3">
          <a
            href="#register"
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap"
          >
            سجّل الآن
          </a>

          {/* زر القائمة للموبايل */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

      </div>

      {/* قائمة الموبايل */}
      {
        menuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        )
      }
    </div >
    </nav >
  );
}