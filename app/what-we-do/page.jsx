import React from 'react';
import Link from 'next/link';

const WhatWeDo = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
          Project Planning
        </h1>
      </section>

      {/* Tender Planning */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#C41E3A' }}>
            Tender Planning
          </h2>
          
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-l-4" style={{ borderLeftColor: '#C41E3A' }}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Strategic planning services during the tender phase to help you win competitive bids 
              and set realistic project baselines. We develop comprehensive schedules that demonstrate 
              your understanding of project complexities and showcase your capability to deliver on time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard
              title="Bid Schedule Development"
              description="Create winning tender programmes that demonstrate technical competence and realistic delivery timelines"
            />
            <ServiceCard
              title="Risk Assessment"
              description="Identify and quantify schedule risks to inform bid pricing and contingency planning"
            />
            <ServiceCard
              title="Resource Planning"
              description="Develop resource-loaded schedules to support accurate cost estimation and demonstrate delivery capability"
            />
            <ServiceCard
              title="Method Statements"
              description="Align planning with construction methodology to create credible and achievable programmes"
            />
          </div>
        </div>
      </section>

      {/* Construction Planning */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#C41E3A' }}>
            Construction Planning
          </h2>
          
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-l-4" style={{ borderLeftColor: '#C41E3A' }}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Comprehensive planning and scheduling services throughout the construction phase. 
              We provide ongoing schedule management, progress monitoring, and proactive management 
              of the critical path to keep your projects on track and stakeholders informed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard
              title="Baseline Schedule Development"
              description="Detailed construction schedules using Primavera P6, MS Project, or ASTA Powerproject"
            />
            <ServiceCard
              title="Progress Monitoring"
              description="Regular schedule updates tracking actual progress against planned activities"
            />
            <ServiceCard
              title="Critical Path Management"
              description="Identify and manage critical activities to ensure timely project completion"
            />
            <ServiceCard
              title="Lookahead Planning"
              description="Short-term detailed planning to coordinate trades and optimize workflow"
            />
            <ServiceCard
              title="Monthly Reporting"
              description="Clear, visual progress reports for clients, stakeholders, and project teams"
            />
            <ServiceCard
              title="Change Management"
              description="Assess schedule impacts of variations and manage programme revisions"
            />
          </div>
        </div>
      </section>

      {/* Project Recovery */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#C41E3A' }}>
            Project Recovery
          </h2>
          
          <div className="bg-gray-100 rounded-2xl p-8 mb-8 shadow-lg border-l-4" style={{ borderLeftColor: '#C41E3A' }}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When projects fall behind schedule or face significant challenges, we provide expert 
              recovery planning services. Our team develops realistic recovery programmes, identifies 
              acceleration opportunities, and implements monitoring systems to get projects back on track.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard
              title="Schedule Health Assessment"
              description="Comprehensive review of current programme identifying issues and opportunities"
            />
            <ServiceCard
              title="Recovery Programme Development"
              description="Create achievable recovery schedules with acceleration strategies and resource optimization"
            />
            <ServiceCard
              title="Critical Path Acceleration"
              description="Identify opportunities to compress the critical path through re-sequencing or resource addition"
            />
            <ServiceCard
              title="Progress Monitoring & Control"
              description="Enhanced monitoring systems to track recovery progress and early warning indicators"
            />
          </div>
        </div>
      </section>

      {/* Dispute Avoidance */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#C41E3A' }}>
            Dispute Avoidance
          </h2>
          
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-l-4" style={{ borderLeftColor: '#C41E3A' }}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Proactive management and documentation practices to prevent disputes before they arise. 
              We help establish clear baselines, maintain contemporaneous records, and implement 
              early warning systems that protect your interests while maintaining collaborative 
              working relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard
              title="Contemporary Record Keeping"
              description="Establish robust documentation practices for schedule changes and delay events"
            />
            <ServiceCard
              title="Early Warning Systems"
              description="Implement proactive notification processes for potential delays and impacts"
            />
            <ServiceCard
              title="Extension of Time Management"
              description="Timely assessment and documentation of delay events to support EOT claims"
            />
            <ServiceCard
              title="Programme Compliance"
              description="Ensure schedules meet contractual requirements and industry standards"
            />
            <ServiceCard
              title="Delay Analysis Support"
              description="Contemporaneous analysis of delay events to support fair resolution"
            />
            <ServiceCard
              title="Claims Advisory"
              description="Strategic advice on schedule-related claims preparation and defense"
            />
          </div>

          {/* Software/Tools Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Industry-Standard Tools</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <ToolBadge name="Primavera P6" />
              <ToolBadge name="Microsoft Project" />
              <ToolBadge name="ASTA Powerproject" />
              <ToolBadge name="PowerBI" />
              <ToolBadge name="Excel Analytics" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white rounded-3xl p-12" style={{ backgroundColor: '#C41E3A' }}>
          <h2 className="text-3xl font-bold mb-4">
            Need Planning Support?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Whether you&apos;re preparing a tender, managing construction, or need recovery planning, 
            we&apos;re here to help.
          </p>
          <Link href="/contact" className="inline-block bg-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:opacity-90" style={{ color: '#C41E3A' }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4" style={{ borderLeftColor: '#C41E3A' }}>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const ToolBadge = ({ name }) => (
  <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-semibold border-2 border-gray-200">
    {name}
  </div>
);

export default WhatWeDo;
