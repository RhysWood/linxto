import React from 'react';
import Link from 'next/link';

const Main = () => {
  return (
    <section className="w-full flex-center flex-col">
      <div className="w-full max-w-6xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Expert Project Controls &
            <span className="block" style={{ color: '#C41E3A' }}>Forensic Delay Analysis</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Professional services in project planning, scheduling, forensic delay analysis, 
            and expert witness testimony for construction and infrastructure projects.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-white" style={{ backgroundColor: '#C41E3A' }}>
              Get in Touch
            </Link>
            <Link href="/services" className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 transition-all duration-300">
              Our Services
            </Link>
          </div>
        </div>

        {/* Core Pages Navigation */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <CorePageCard 
            title="Who We Are"
            description="Discover our vision, values, and what makes Linx-to your trusted partner in project controls."
            icon="👥"
            href="/who-we-are"
          />
          <CorePageCard 
            title="What We Do"
            description="From tender planning to dispute avoidance, explore our comprehensive project control services."
            icon="🎯"
            href="/what-we-do"
          />
          <CorePageCard 
            title="Where We Do It"
            description="Learn about the industries and sectors we serve across the UK and internationally."
            icon="🌍"
            href="/where-we-do-it"
          />
        </div>

        {/* Key Services Grid */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600 mb-12">Comprehensive services to support your project success</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <ServiceCard 
            title="Project Controls"
            description="Comprehensive planning, scheduling, and cost management services to keep your projects on track."
            icon="📊"
            href="/what-we-do"
          />
          <ServiceCard 
            title="Forensic Delay Analysis"
            description="Expert analysis of project delays using industry-standard methodologies and tools."
            icon="🔍"
            href="/services"
          />
          <ServiceCard 
            title="Expert Witness"
            description="Professional testimony and reporting services for construction disputes and claims."
            icon="⚖️"
            href="/services"
          />
        </div>

        {/* Value Propositions */}
        <div className="text-white rounded-3xl p-12 mb-20" style={{ backgroundColor: '#C41E3A' }}>
          <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Linx-to?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ValuePoint 
              title="Industry Expertise"
              description="Decades of combined experience in construction, infrastructure, and engineering projects across multiple sectors."
            />
            <ValuePoint 
              title="Evidence-Based Analysis"
              description="Rigorous methodologies using industry-standard tools including Primavera P6, MS Project, and specialized forensic software."
            />
            <ValuePoint 
              title="Clear Communication"
              description="Complex technical analysis delivered in clear, accessible reports for legal teams, clients, and stakeholders."
            />
            <ValuePoint 
              title="Court-Tested"
              description="Extensive experience providing expert witness testimony in arbitration, litigation, and dispute resolution."
            />
          </div>
          <div className="text-center mt-8">
            <Link href="/about" className="inline-block bg-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:opacity-90" style={{ color: '#C41E3A' }}>
              Learn More About Us
            </Link>
          </div>
        </div>

        {/* What We Do Highlights */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Services Spectrum</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceHighlight 
              title="Tender Planning"
              description="Strategic bid schedules"
            />
            <ServiceHighlight 
              title="Construction Planning"
              description="Baseline & progress tracking"
            />
            <ServiceHighlight 
              title="Project Recovery"
              description="Get back on schedule"
            />
            <ServiceHighlight 
              title="Dispute Avoidance"
              description="Prevent claims proactively"
            />
          </div>
          <div className="text-center mt-8">
            <Link href="/what-we-do" className="inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300 text-white hover:opacity-90" style={{ backgroundColor: '#C41E3A' }}>
              Explore All Services
            </Link>
          </div>
        </div>

        {/* Industries Served */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 mb-12">Expert support across diverse sectors</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <IndustryBadge name="Infrastructure" />
            <IndustryBadge name="Commercial" />
            <IndustryBadge name="Residential" />
            <IndustryBadge name="Industrial" />
            <IndustryBadge name="Energy" />
            <IndustryBadge name="Transportation" />
            <IndustryBadge name="Healthcare" />
            <IndustryBadge name="Education" />
          </div>
          <Link href="/where-we-do-it" className="inline-block bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-full font-semibold border-2 border-gray-300 transition-all duration-300">
            View All Industries & Sectors
          </Link>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-3xl p-12 text-center border-2" style={{ borderColor: '#C41E3A' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Expert Project Controls Support?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re facing project delays, need scheduling expertise, or require expert witness services, 
            we&apos;re here to help.
          </p>
          <Link href="/contact" className="inline-block text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90" style={{ backgroundColor: '#C41E3A' }}>
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

const CorePageCard = ({ title, description, icon, href }) => (
  <Link href={href} className="block group">
    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 group-hover:border-opacity-100 h-full" style={{ '--hover-border': '#C41E3A' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#C41E3A'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}>
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:opacity-80 transition-opacity" style={{ '--hover-color': '#C41E3A' }} onMouseEnter={(e) => e.target.style.color = '#C41E3A'} onMouseLeave={(e) => e.target.style.color = '#111827'}>{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      <div className="flex items-center font-semibold group-hover:opacity-80 transition-opacity" style={{ color: '#C41E3A' }}>
        Learn More →
      </div>
    </div>
  </Link>
);

const ServiceCard = ({ title, description, icon, href }) => (
  <Link href={href} className="block">
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 h-full">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </Link>
);

const ServiceHighlight = ({ title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-shadow duration-300" style={{ borderLeftColor: '#C41E3A' }}>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const ValuePoint = ({ title, description }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <div className="w-3 h-3 bg-white rounded-full mt-2"></div>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white opacity-90">{description}</p>
    </div>
  </div>
);

const IndustryBadge = ({ name }) => (
  <div className="bg-gray-100 hover:bg-gray-50 px-6 py-4 rounded-full text-gray-700 font-semibold transition-all duration-300 border-2 border-gray-200 hover:text-white hover:border-opacity-100" 
       style={{ '--hover-bg': '#C41E3A' }}
       onMouseEnter={(e) => {
         e.currentTarget.style.backgroundColor = '#C41E3A';
         e.currentTarget.style.borderColor = '#C41E3A';
       }}
       onMouseLeave={(e) => {
         e.currentTarget.style.backgroundColor = '#F3F4F6';
         e.currentTarget.style.borderColor = '#E5E7EB';
       }}>
    {name}
  </div>
);

export { Main };
