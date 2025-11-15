'use client'
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full mb-8 pt-6 pb-4 relative z-10 border-b-2" style={{ borderColor: '#C41E3A' }}>
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
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/" className="text-gray-700 hover:opacity-80 font-medium transition-opacity" style={{ '--hover-color': '#C41E3A' }} onMouseEnter={(e) => e.target.style.color = '#C41E3A'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:opacity-80 font-medium transition-opacity" onMouseEnter={(e) => e.target.style.color = '#C41E3A'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
          About
        </Link>
        <Link href="/services" className="text-gray-700 hover:opacity-80 font-medium transition-opacity" onMouseEnter={(e) => e.target.style.color = '#C41E3A'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
          Services
        </Link>
        <Link href="/contact" className="text-white px-6 py-2 rounded-full font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: '#C41E3A' }}>
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2"
        aria-label="Toggle menu"
        style={{ color: '#C41E3A' }}
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
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden mt-2 rounded-lg border-2" style={{ borderColor: '#C41E3A' }}>
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              href="/" 
              className="text-gray-700 hover:opacity-80 font-medium transition-opacity py-2"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#374151' }}
              onMouseEnter={(e) => e.target.style.color = '#C41E3A'}
              onMouseLeave={(e) => e.target.style.color = '#374151'}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:opacity-80 font-medium transition-opacity py-2"
              onClick={() => setMobileMenuOpen(false)}
              onMouseEnter={(e) => e.target.style.color = '#C41E3A'}
              onMouseLeave={(e) => e.target.style.color = '#374151'}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:opacity-80 font-medium transition-opacity py-2"
              onClick={() => setMobileMenuOpen(false)}
              onMouseEnter={(e) => e.target.style.color = '#C41E3A'}
              onMouseLeave={(e) => e.target.style.color = '#374151'}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="text-white px-6 py-3 rounded-full font-semibold text-center transition-opacity hover:opacity-90"
              onClick={() => setMobileMenuOpen(false)}
              style={{ backgroundColor: '#C41E3A' }}
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
