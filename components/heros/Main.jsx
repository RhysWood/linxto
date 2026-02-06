import React from 'react';
import Link from 'next/link';
import { FadeInSection, StaggerContainer, StaggerItem, AnimatedArrow } from '../animations/ScrollAnimations';

const Main = () => {
  return (
    <section className="w-full flex-center flex-col">
      <div className="w-full max-w-6xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <FadeInSection className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Expert Project Controls &
            <span className="block text-linx-red">Forensic Delay Analysis</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Evidence-based project planning, scheduling, forensic delay analysis,
            and expert witness services for construction and infrastructure projects.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-white bg-linx-red hover:opacity-90">
              Get in Touch
            </Link>
            <Link href="/our-approach" className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 transition-all duration-300">
              Our Approach
            </Link>
          </div>
        </FadeInSection>

        {/* Core Pages Navigation */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-20">
          <StaggerItem>
            <CorePageCard
              title="Who We Are"
              description="Discover our vision, values, and what makes Linx-to your trusted partner in project controls."
              href="/who-we-are"
            />
          </StaggerItem>
          <StaggerItem>
            <CorePageCard
              title="What We Do"
              description="From tender planning to dispute resolution, explore our comprehensive project control services."
              href="/what-we-do"
            />
          </StaggerItem>
          <StaggerItem>
            <CorePageCard
              title="Our Approach"
              description="Evidence-based methodology grounded in the SCL Protocol and AACE RP 29R-03 frameworks."
              href="/our-approach"
            />
          </StaggerItem>
        </StaggerContainer>

        {/* Methodology Preview */}
        <FadeInSection className="bg-gray-50 rounded-3xl p-10 md:p-12 mb-20 border-2 border-linx-red">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Grounded in Industry-Leading Standards
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Our forensic delay analysis is conducted in accordance with internationally recognised
            frameworks, ensuring robust, defensible, and evidence-based results.
          </p>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-8" staggerDelay={0.15}>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-linx-red h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-3">SCL Delay and Disruption Protocol</h3>
                <p className="text-gray-600 leading-relaxed">
                  Society of Construction Law Protocol, 2nd Edition (2017) &mdash; the leading
                  UK guidance on the analysis of delay and disruption in construction projects.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-linx-red h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-3">AACE RP 29R-03</h3>
                <p className="text-gray-600 leading-relaxed">
                  Recommended Practice for Forensic Schedule Analysis &mdash; the international
                  standard for identifying, quantifying, and presenting schedule delay.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
          <div className="text-center">
            <Link href="/our-approach" className="inline-block text-linx-red font-semibold text-lg hover:opacity-80 transition-opacity">
              Learn more about our methodology &rarr;
            </Link>
          </div>
        </FadeInSection>

        {/* Why Choose Linx-to */}
        <FadeInSection className="bg-linx-red text-white rounded-3xl p-12 mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Linx-to?</h2>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <ValuePoint
                title="Evidence-Based Analysis"
                description="Rigorous methodologies aligned with SCL Protocol and AACE RP 29R-03, using Primavera P6, MS Project, and specialised forensic software."
              />
            </StaggerItem>
            <StaggerItem>
              <ValuePoint
                title="Industry Expertise"
                description="Extensive experience across commercial, infrastructure, industrial, energy, healthcare, and education sectors."
              />
            </StaggerItem>
            <StaggerItem>
              <ValuePoint
                title="Clear Communication"
                description="Complex technical analysis delivered in clear, accessible reports for legal teams, clients, and stakeholders."
              />
            </StaggerItem>
            <StaggerItem>
              <ValuePoint
                title="Court-Tested"
                description="Proven track record providing expert witness testimony in arbitration, adjudication, and litigation proceedings."
              />
            </StaggerItem>
          </StaggerContainer>
          <div className="text-center mt-8">
            <Link href="/who-we-are" className="inline-block bg-white text-linx-red px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:opacity-90">
              Learn More About Us
            </Link>
          </div>
        </FadeInSection>

        {/* Industries */}
        <FadeInSection className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 mb-10">Expert support across diverse sectors</p>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" staggerDelay={0.06}>
            <StaggerItem><IndustryBadge name="Infrastructure" /></StaggerItem>
            <StaggerItem><IndustryBadge name="Commercial" /></StaggerItem>
            <StaggerItem><IndustryBadge name="Residential" /></StaggerItem>
            <StaggerItem><IndustryBadge name="Industrial" /></StaggerItem>
            <StaggerItem><IndustryBadge name="Energy" /></StaggerItem>
            <StaggerItem><IndustryBadge name="Transportation" /></StaggerItem>
            <StaggerItem><IndustryBadge name="Healthcare" /></StaggerItem>
            <StaggerItem><IndustryBadge name="Education" /></StaggerItem>
          </StaggerContainer>
        </FadeInSection>

        {/* CTA Section */}
        <FadeInSection className="bg-gray-50 rounded-3xl p-12 text-center border-2 border-linx-red">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Expert Project Controls Support?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re facing project delays, need scheduling expertise, or require expert witness services,
            we&apos;re here to help.
          </p>
          <Link href="/contact" className="inline-block bg-linx-red text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90">
            Schedule a Consultation
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
};

const CorePageCard = ({ title, description, href }) => (
  <Link href={href} className="block group h-full">
    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 group-hover:border-linx-red h-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-linx-red transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      <div className="flex items-center font-semibold text-linx-red group-hover:opacity-80 transition-opacity">
        Learn More &rarr;
      </div>
    </div>
  </Link>
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
  <div className="bg-gray-100 px-6 py-4 rounded-full text-gray-700 font-semibold border-2 border-gray-200">
    {name}
  </div>
);

export { Main };
