import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-linx-red text-white mt-20 rounded-t-3xl">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Linx-to Project Controls Ltd
            </h3>
            <p className="opacity-90 mb-4 leading-relaxed">
              Evidence-based project controls, forensic delay analysis, and expert witness services
              for construction and infrastructure projects.
            </p>
            <div className="flex gap-4">
              <a href="mailto:info@linxto.co.uk" className="opacity-80 hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/linx-to-project-controls-ltd/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/who-we-are" className="opacity-80 hover:opacity-100 transition-opacity">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="opacity-80 hover:opacity-100 transition-opacity">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/our-approach" className="opacity-80 hover:opacity-100 transition-opacity">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/what-we-do" className="opacity-80 hover:opacity-100 transition-opacity">
                  Project Controls
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="opacity-80 hover:opacity-100 transition-opacity">
                  Forensic Delay Analysis
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="opacity-80 hover:opacity-100 transition-opacity">
                  Expert Witness
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="opacity-80 hover:opacity-100 transition-opacity">
                  Claims Support
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="opacity-80 hover:opacity-100 transition-opacity">
                  Dispute Avoidance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-30 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="opacity-80 text-sm">
              &copy; {new Date().getFullYear()} Linx-to Project Controls Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
