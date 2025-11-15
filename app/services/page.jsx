import React from 'react';
import Link from 'next/link';

const ServicesPage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive project controls and forensic analysis services tailored to your needs
        </p>
      </div>

      {/* Service Sections */}
      <div className="space-y-20">
        {/* Project Controls */}
        <ServiceSection
          title="Project Controls & Planning"
          description="Expert planning and scheduling services to ensure your projects stay on track, on budget, and meet stakeholder expectations."
          services={[
            {
              name: "Schedule Development",
              details: "Creation of comprehensive project schedules using Primavera P6, MS Project, and other industry tools"
            },
            {
              name: "Schedule Analysis & Monitoring",
              details: "Regular critical path analysis, float management, and progress tracking"
            },
            {
              name: "Earned Value Management",
              details: "Cost and schedule integration for performance measurement and forecasting"
            },
            {
              name: "Risk Management",
              details: "Identification, quantification, and mitigation strategies for project risks"
            },
            {
              name: "Claims Avoidance",
              details: "Proactive monitoring and documentation to prevent disputes"
            }
          ]}
          bgColor="bg-gray-50"
        />

        {/* Forensic Delay Analysis */}
        <ServiceSection
          title="Forensic Delay Analysis"
          description="Independent, evidence-based analysis of project delays using recognized methodologies to support claims and dispute resolution."
          services={[
            {
              name: "As-Planned vs. As-Built Analysis",
              details: "Compare original plans with actual performance to identify variances"
            },
            {
              name: "Impacted As-Planned Analysis",
              details: "Model the effect of delay events on the original schedule"
            },
            {
              name: "Time Impact Analysis (TIA)",
              details: "Contemporaneous analysis of delay events as they occur"
            },
            {
              name: "Windows Analysis",
              details: "Periodic snapshot comparison to track delay evolution"
            },
            {
              name: "Collapsed As-Built (But-For) Analysis",
              details: "Remove delay events to determine project completion without delays"
            }
          ]}
          bgColor="bg-red-50"
          accentColor="#C41E3A"
        />

        {/* Expert Witness */}
        <ServiceSection
          title="Expert Witness Services"
          description="Credible, professional testimony and reporting for construction disputes, arbitration, and litigation proceedings."
          services={[
            {
              name: "Expert Reports",
              details: "Comprehensive written opinions on delay, disruption, and quantum matters"
            },
            {
              name: "Court Testimony",
              details: "Clear, credible expert witness testimony in arbitration and litigation"
            },
            {
              name: "Mediation Support",
              details: "Technical expertise to facilitate dispute resolution discussions"
            },
            {
              name: "Rebuttal Analysis",
              details: "Review and critique of opposing expert opinions"
            },
            {
              name: "Damages Assessment",
              details: "Calculation of delay-related costs and prolongation claims"
            }
          ]}
          bgColor="bg-gray-50"
        />

        {/* Additional Services */}
        <ServiceSection
          title="Additional Services"
          description="Supporting services to enhance project delivery and dispute resolution."
          services={[
            {
              name: "Claims Preparation & Review",
              details: "Assistance in preparing or reviewing Extension of Time and cost claims"
            },
            {
              name: "Dispute Advisory",
              details: "Strategic advice on contractual matters and dispute prevention"
            },
            {
              name: "Training & Workshops",
              details: "Project controls and delay analysis training for teams"
            },
            {
              name: "Independent Review",
              details: "Third-party assessment of project controls and schedules"
            }
          ]}
          bgColor="bg-red-50"
        />
      </div>

      {/* CTA */}
      <div className="mt-20 text-white rounded-3xl p-12 text-center" style={{ backgroundColor: '#C41E3A' }}>
        <h2 className="text-3xl font-bold mb-4">
          Ready to Discuss Your Project?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Contact us today to learn how our expertise can support your project or dispute resolution needs.
        </p>
        <Link href="/contact" className="inline-block bg-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:opacity-90" style={{ color: '#C41E3A' }}>
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

const ServiceSection = ({ title, description, services, bgColor, accentColor = '#C41E3A' }) => (
  <div className={`${bgColor} rounded-3xl p-8 md:p-12 border-2`} style={{ borderColor: accentColor }}>
    <h2 className="text-4xl font-bold mb-4" style={{ color: accentColor }}>{title}</h2>
    <p className="text-xl text-gray-700 mb-8 leading-relaxed">{description}</p>
    <div className="grid md:grid-cols-2 gap-6">
      {services.map((service, idx) => (
        <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4" style={{ borderLeftColor: accentColor }}>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
          <p className="text-gray-600">{service.details}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ServicesPage;
