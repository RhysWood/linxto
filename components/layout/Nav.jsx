'use client'
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full mb-8 pt-6 pb-4 relative z-10 border-b-2 border-linx-red">
      <Link href="/" className='flex gap-2'>
        <Image
          src="/assets/linxto_logo.png"
          alt="Linx-to Project Controls"
          width={180}
          height={180}
          className="object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-6 items-center">
        <Link href="/" className="text-gray-700 hover:text-linx-red font-medium transition-colors">
          Home
        </Link>
        <Link href="/who-we-are" className="text-gray-700 hover:text-linx-red font-medium transition-colors">
          Who We Are
        </Link>
        <Link href="/what-we-do" className="text-gray-700 hover:text-linx-red font-medium transition-colors">
          What We Do
        </Link>
        <Link href="/our-approach" className="text-gray-700 hover:text-linx-red font-medium transition-colors">
          Our Approach
        </Link>
        <Link href="/contact" className="bg-linx-red text-white px-6 py-2 rounded-full font-semibold transition-opacity hover:opacity-90">
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden p-2 text-linx-red"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden mt-2 rounded-lg border-2 border-linx-red">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-linx-red font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/who-we-are"
              className="text-gray-700 hover:text-linx-red font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Who We Are
            </Link>
            <Link
              href="/what-we-do"
              className="text-gray-700 hover:text-linx-red font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              What We Do
            </Link>
            <Link
              href="/our-approach"
              className="text-gray-700 hover:text-linx-red font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Approach
            </Link>
            <Link
              href="/contact"
              className="bg-linx-red text-white px-6 py-3 rounded-full font-semibold text-center transition-opacity hover:opacity-90"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
