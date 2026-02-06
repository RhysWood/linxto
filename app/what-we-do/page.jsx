import React from 'react';
import Link from 'next/link';
import { FadeInSection, StaggerContainer, StaggerItem, AnimatedArrow } from '../../components/animations/ScrollAnimations';

export const metadata = {
  title: 'What We Do',
  description: 'Project controls, forensic delay analysis, expert witness services, and dispute avoidance. As-planned vs as-built analysis aligned with SCL Protocol and AACE RP 29R-03.',
  openGraph: {
    title: 'What We Do | Linx-to Project Controls',
    description: 'Comprehensive project controls and forensic delay analysis services, grounded in evidence and delivered with clarity.',
  },
};

const WhatWeDo = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <FadeInSection>
        <section className="w-full max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
            What We Do
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive project controls and forensic analysis services,
            grounded in evidence and delivered with clarity.
          </p>
        </section>
      </FadeInSection>

      {/* Project Controls & Planning */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-linx-red">Project Controls &amp; Planning</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
              Expert planning and scheduling services to ensure your projects stay on track,
              on budget, and meet stakeholder expectations.
            </p>
          </FadeInSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12">
            <StaggerItem>
              <ServiceCard
                title="Tender Planning"
                description="Strategic bid schedule development that demonstrates technical competence and realistic delivery timelines. Risk assessment and resource-loaded schedules to support accurate cost estimation."
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Construction Planning"
                description="Detailed construction schedules using Primavera P6, MS Project, or ASTA Powerproject. Regular progress monitoring, critical path management, and lookahead planning."
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Project Recovery"
                description="Schedule health assessments, recovery programme development, and critical path acceleration strategies. Enhanced monitoring systems to track recovery progress."
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Earned Value Management"
                description="Cost and schedule integration for performance measurement and forecasting. Clear reporting dashboards for stakeholders and decision-makers."
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Risk Management"
                description="Identification, quantification, and mitigation strategies for project risks. Probabilistic schedule analysis and contingency planning."
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Change Management"
                description="Assessment of schedule impacts from variations, monthly progress reporting, and programme revision management."
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Forensic Delay Analysis */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-linx-red">Forensic Delay Analysis</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-4xl">
              Independent, evidence-based analysis of project delays using recognised methodologies
              to support claims and dispute resolution.
            </p>
            <p className="text-gray-600 mb-8 max-w-4xl">
              Our analysis is conducted in accordance with the
              <strong> Society of Construction Law Delay and Disruption Protocol (2nd Edition, 2017)</strong> and
              <strong> AACE International Recommended Practice 29R-03: Forensic Schedule Analysis</strong>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-3xl p-8 md:p-12 border-2 border-linx-red mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Methods of Analysis</h3>
              <StaggerContainer className="space-y-6">
                <StaggerItem>
                  <MethodCard
                    number="01"
                    title="As-Planned vs As-Built"
                    description="Compare the original baseline programme against actual project performance to identify variances, establish the factual delay position, and determine the causes of delay. This evidence-based approach forms the foundation of forensic schedule analysis."
                  />
                </StaggerItem>
                <StaggerItem>
                  <MethodCard
                    number="02"
                    title="Impacted As-Planned"
                    description="Model the effect of delay events on the original programme by inserting identified delays into the as-planned schedule and observing their impact on the critical path and completion date."
                  />
                </StaggerItem>
                <StaggerItem>
                  <MethodCard
                    number="03"
                    title="Time Impact Analysis (TIA)"
                    description="Contemporaneous, prospective analysis that models the effect of each delay event at the point in time it occurred, using schedule updates to assess the impact on the critical path and project completion."
                  />
                </StaggerItem>
                <StaggerItem>
                  <MethodCard
                    number="04"
                    title="Windows Analysis"
                    description="Divide the project into defined time periods (windows) and analyse delay causation within each period, providing a detailed chronological account of how delays evolved throughout the project."
                  />
                </StaggerItem>
                <StaggerItem>
                  <MethodCard
                    number="05"
                    title="Collapsed As-Built (But-For)"
                    description="Start from the as-built programme and systematically remove identified delay events to determine when the project would have completed but for those delays. A retrospective, subtractive approach."
                  />
                </StaggerItem>
              </StaggerContainer>
            </div>
          </FadeInSection>

          <FadeInSection className="text-center mb-4">
            <Link href="/our-approach" className="inline-block text-linx-red font-semibold text-lg hover:opacity-80 transition-opacity">
              Learn more about our methodology and standards &rarr;
            </Link>
          </FadeInSection>
        </div>
      </section>

      <AnimatedArrow direction="down" />

      {/* Expert Witness Services */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-linx-red">Expert Witness Services</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
              Credible, professional testimony and reporting for construction disputes,
              arbitration, and litigation proceedings.
            </p>
          </FadeInSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12">
            <StaggerItem>
              <ServiceCard
                title="Expert Reports"
                description="Comprehensive written opinions on delay, disruption, and quantum matters. Clear, well-structured reports suitable for adjudication, arbitration, and court proceedings."
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Court Testimony"
                description="Clear, credible expert witness testimony in arbitration and litigation. Experience presenting complex technical matters to non-technical audiences."
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Mediation Support"
                description="Technical expertise to facilitate dispute resolution discussions. Objective analysis that helps parties reach fair settlements."
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Rebuttal Analysis"
                description="Thorough review and critique of opposing expert opinions. Identification of methodological weaknesses and factual inaccuracies."
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Damages Assessment"
                description="Calculation of delay-related costs, prolongation claims, and loss and expense. Evidence-based quantum analysis tied to schedule delay."
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Claims Preparation &amp; Review"
                description="Assistance in preparing or reviewing Extension of Time and cost claims. Strategic advice on contractual matters and dispute prevention."
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Dispute Avoidance */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-linx-red">Dispute Avoidance</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
              Proactive management and documentation practices to prevent disputes before they arise.
            </p>
          </FadeInSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12">
            <StaggerItem>
              <ServiceCard
                title="Contemporaneous Record Keeping"
                description="Establish robust documentation practices for schedule changes and delay events. Build a strong evidential foundation from day one."
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Early Warning Systems"
                description="Implement proactive notification processes for potential delays and impacts. Identify issues before they escalate."
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Extension of Time Management"
                description="Timely assessment and documentation of delay events to support EOT claims. Maintain compliance with contractual notice requirements."
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Programme Compliance"
                description="Ensure schedules meet contractual requirements and industry standards. Regular independent schedule reviews."
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <AnimatedArrow direction="down" />

      {/* Additional Services */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-linx-red">Additional Services</h2>
          </FadeInSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12">
            <StaggerItem>
              <ServiceCard
                title="Training &amp; Workshops"
                description="Project controls and delay analysis training for teams. Tailored sessions covering scheduling best practice, claims awareness, and record-keeping."
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Independent Schedule Review"
                description="Third-party assessment of project schedules and controls. Identify risks, issues, and opportunities for improvement."
              />
            </StaggerItem>
          </StaggerContainer>

          {/* Tools */}
          <FadeInSection className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry-Standard Tools</h3>
            <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.08}>
              <StaggerItem><ToolBadge name="Primavera P6" /></StaggerItem>
              <StaggerItem><ToolBadge name="Microsoft Project" /></StaggerItem>
              <StaggerItem><ToolBadge name="ASTA Powerproject" /></StaggerItem>
              <StaggerItem><ToolBadge name="PowerBI" /></StaggerItem>
              <StaggerItem><ToolBadge name="Excel Analytics" /></StaggerItem>
            </StaggerContainer>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16">
        <FadeInSection>
          <div className="max-w-4xl mx-auto px-4 text-center bg-linx-red text-white rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Whether you&apos;re preparing a tender, managing construction, facing delays,
              or need expert witness support, we&apos;re here to help.
            </p>
            <Link href="/contact" className="inline-block bg-white text-linx-red px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:opacity-90">
              Get in Touch
            </Link>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-linx-red h-full">
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const MethodCard = ({ number, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-linx-red">
    <div className="flex items-start gap-4">
      <span className="text-3xl font-bold text-linx-red flex-shrink-0">{number}</span>
      <div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const ToolBadge = ({ name }) => (
  <div className="px-6 py-3 bg-white rounded-full text-gray-700 font-semibold border-2 border-gray-200">
    {name}
  </div>
);

export default WhatWeDo;
