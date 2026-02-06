import React from 'react';
import Link from 'next/link';
import { FadeInSection, StaggerContainer, StaggerItem, AnimatedArrow } from '../../components/animations/ScrollAnimations';

export const metadata = {
  title: 'Our Approach',
  description: 'Evidence-based forensic delay analysis methodology aligned with the SCL Delay and Disruption Protocol (2nd Edition) and AACE RP 29R-03. As-planned vs as-built, time impact analysis, windows analysis, and more.',
  openGraph: {
    title: 'Our Approach | Linx-to Project Controls',
    description: 'Evidence-based forensic delay analysis grounded in the SCL Protocol and AACE RP 29R-03 frameworks.',
  },
};

const OurApproach = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <FadeInSection>
        <section className="w-full max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
            Our Approach
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based forensic delay analysis grounded in internationally
            recognised standards and proven methodologies.
          </p>
        </section>
      </FadeInSection>

      {/* Evidence Speaks Louder */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl p-10 md:p-12 border-2 border-linx-red">
              <h2 className="text-4xl font-bold mb-6 text-linx-red">
                &quot;Evidence Speaks Louder&quot;
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  At Linx-to, we let the facts tell the story. Every analysis we undertake is grounded
                  in contemporaneous project records, objective data, and recognised industry methodologies.
                </p>
                <p>
                  Our forensic delay analysis follows a structured, evidence-based approach that
                  ensures our findings are robust, defensible, and capable of withstanding scrutiny
                  in adjudication, arbitration, and court proceedings.
                </p>
                <p>
                  We work in accordance with the leading international frameworks for forensic schedule
                  analysis, ensuring consistency, rigour, and credibility in everything we deliver.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* SCL Protocol */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedArrow direction="down" />

          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-linx-red">
              SCL Delay and Disruption Protocol
            </h2>
            <p className="text-sm font-semibold text-gray-500 mb-6 tracking-wide uppercase">
              Society of Construction Law &mdash; 2nd Edition, February 2017
            </p>
          </FadeInSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-8" staggerDelay={0.2}>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-linx-red h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What is the SCL Protocol?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The SCL Delay and Disruption Protocol is the leading UK guidance document
                  on the analysis and management of delay and disruption in construction projects.
                  Published by the Society of Construction Law, it provides a framework of best
                  practice for dealing with delay and disruption matters.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Protocol is widely referenced in construction disputes across the UK and
                  internationally, and is frequently cited by tribunals, adjudicators, and courts
                  as an authoritative source on delay analysis methodology.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-linx-red h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How Linx-to Applies the SCL Protocol</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-linx-red font-bold">&#9656;</span>
                    <span>Selection of the most appropriate delay analysis methodology based on the available records and circumstances of the project</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-linx-red font-bold">&#9656;</span>
                    <span>Identification and categorisation of delay events (employer risk, contractor risk, and concurrent delay)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-linx-red font-bold">&#9656;</span>
                    <span>Analysis of critical path impact and float consumption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-linx-red font-bold">&#9656;</span>
                    <span>Assessment of concurrent delay in accordance with Protocol guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-linx-red font-bold">&#9656;</span>
                    <span>Clear presentation of delay analysis findings with supporting evidence</span>
                  </li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* AACE RP 29R-03 */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedArrow direction="down" />

          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-linx-red">
              AACE International RP 29R-03
            </h2>
            <p className="text-sm font-semibold text-gray-500 mb-6 tracking-wide uppercase">
              Recommended Practice for Forensic Schedule Analysis
            </p>
          </FadeInSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-8" staggerDelay={0.2}>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-linx-red h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What is AACE RP 29R-03?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  AACE International (Association for the Advancement of Cost Engineering) Recommended
                  Practice 29R-03 provides a comprehensive framework for forensic schedule analysis.
                  It is one of the most widely recognised international standards for the identification,
                  quantification, and presentation of schedule delay on construction projects.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Recommended Practice defines and categorises the various methods of forensic
                  schedule analysis, providing practitioners and tribunals with a common language
                  and consistent framework for evaluating delay claims.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-linx-red h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How Linx-to Applies RP 29R-03</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-linx-red font-bold">&#9656;</span>
                    <span>Structured approach to method selection based on data availability, project circumstances, and the questions to be answered</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-linx-red font-bold">&#9656;</span>
                    <span>Consistent terminology and classification of delay analysis methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-linx-red font-bold">&#9656;</span>
                    <span>Transparent documentation of source data, assumptions, and analytical steps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-linx-red font-bold">&#9656;</span>
                    <span>Identification of method strengths, limitations, and appropriate use cases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-linx-red font-bold">&#9656;</span>
                    <span>Defensible results that meet the evidentiary standards of tribunals and courts</span>
                  </li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Methods of Analysis */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedArrow direction="down" />

          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 text-center">
              Methods of Analysis
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
              We select the most appropriate methodology based on the available records,
              contract requirements, and specific circumstances of each project &mdash;
              as recommended by both the SCL Protocol and AACE RP 29R-03.
            </p>
          </FadeInSection>

          <StaggerContainer className="space-y-6">
            <StaggerItem>
              <MethodDetail
                number="01"
                title="As-Planned vs As-Built"
                subtitle="Observational / Comparative"
                description="The foundational method of forensic schedule analysis. We compare the original baseline programme against actual project performance to identify variances and establish the factual delay position."
                details={[
                  "Compare planned dates against actual dates for all activities",
                  "Identify where and when the project deviated from the plan",
                  "Establish a factual chronology of delay events",
                  "Determine the causes and responsibility for identified delays",
                  "Provide a clear, evidence-based picture of project performance"
                ]}
                highlight={true}
              />
            </StaggerItem>
            <StaggerItem>
              <MethodDetail
                number="02"
                title="Impacted As-Planned"
                subtitle="Additive / Prospective"
                description="Model the theoretical effect of delay events on the original programme by inserting identified delays into the as-planned schedule."
                details={[
                  "Insert delay events into the baseline programme",
                  "Observe the impact on the critical path and completion date",
                  "Assess the theoretical delay attributable to each event",
                  "Useful when limited as-built records are available"
                ]}
              />
            </StaggerItem>
            <StaggerItem>
              <MethodDetail
                number="03"
                title="Time Impact Analysis (TIA)"
                subtitle="Additive / Contemporaneous"
                description="A contemporaneous, prospective analysis that models the effect of each delay event at the point in time it occurred."
                details={[
                  "Analyse delays using schedule updates at the time of occurrence",
                  "Assess impact on the then-current critical path",
                  "Account for actual progress and programme changes",
                  "Widely regarded as one of the most robust methodologies",
                  "Particularly suited to projects with regular schedule updates"
                ]}
              />
            </StaggerItem>
            <StaggerItem>
              <MethodDetail
                number="04"
                title="Windows Analysis"
                subtitle="Periodic / Snapshot"
                description="Divide the project into defined time periods and analyse delay causation within each window."
                details={[
                  "Break the project duration into discrete analysis periods",
                  "Analyse critical path and delay within each window",
                  "Track how delays evolved chronologically",
                  "Identify periods of concurrent delay",
                  "Provide a detailed narrative of delay progression"
                ]}
              />
            </StaggerItem>
            <StaggerItem>
              <MethodDetail
                number="05"
                title="Collapsed As-Built (But-For)"
                subtitle="Subtractive / Retrospective"
                description="Start from the as-built programme and systematically remove identified delay events to determine when the project would have completed."
                details={[
                  "Reconstruct the as-built critical path",
                  "Remove identified delay events one at a time or in groups",
                  "Determine the 'but-for' completion date",
                  "Quantify the delay attributable to removed events",
                  "Particularly useful for complex, multi-party delay situations"
                ]}
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Evidence-Based As-Planned v As-Built Highlight */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <div className="bg-linx-red text-white rounded-3xl p-10 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Evidence-Based As-Planned vs As-Built
              </h2>
              <p className="text-xl opacity-95 leading-relaxed text-center max-w-3xl mx-auto mb-8">
                Our as-planned versus as-built analysis goes beyond simple date comparison.
                We build a comprehensive, evidence-based picture of project performance using
                contemporaneous records, programme data, and factual project documentation.
              </p>
              <StaggerContainer className="grid md:grid-cols-3 gap-6">
                <StaggerItem>
                  <div className="bg-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-3">Contemporaneous Records</h3>
                    <p className="opacity-90">
                      Progress reports, site diaries, correspondence, meeting minutes, and
                      programme updates form the evidential foundation.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-3">Critical Path Focus</h3>
                    <p className="opacity-90">
                      We identify the true critical and near-critical paths to determine
                      which delays actually impacted project completion.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-3">Clear Presentation</h3>
                    <p className="opacity-90">
                      Findings presented in clear, visual formats that are accessible to
                      legal teams, tribunals, and non-technical stakeholders.
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Professional Standards</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Our work is informed by and conducted in accordance with the following
              industry standards and contract frameworks.
            </p>
          </FadeInSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StaggerItem>
              <StandardCard
                title="SCL Protocol"
                description="Society of Construction Law Delay and Disruption Protocol, 2nd Edition (February 2017)"
              />
            </StaggerItem>
            <StaggerItem>
              <StandardCard
                title="AACE RP 29R-03"
                description="AACE International Recommended Practice for Forensic Schedule Analysis"
              />
            </StaggerItem>
            <StaggerItem>
              <StandardCard
                title="PMI Standards"
                description="Project Management Institute scheduling and earned value standards"
              />
            </StaggerItem>
            <StaggerItem>
              <StandardCard
                title="NEC Contracts"
                description="New Engineering Contract suite &mdash; programme and compensation event procedures"
              />
            </StaggerItem>
            <StaggerItem>
              <StandardCard
                title="JCT Contracts"
                description="Joint Contracts Tribunal &mdash; extension of time and loss and expense provisions"
              />
            </StaggerItem>
            <StaggerItem>
              <StandardCard
                title="FIDIC Contracts"
                description="International Federation of Consulting Engineers &mdash; claims and determination procedures"
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16">
        <FadeInSection>
          <div className="max-w-4xl mx-auto px-4 text-center bg-gray-50 rounded-3xl p-12 border-2 border-linx-red">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Discuss Your Delay Analysis Needs
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Every project is different. Contact us to discuss which methodology
              is most appropriate for your circumstances.
            </p>
            <Link href="/contact" className="inline-block bg-linx-red text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90">
              Get in Touch
            </Link>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
};

const MethodDetail = ({ number, title, subtitle, description, details, highlight }) => (
  <div className={`rounded-2xl p-8 shadow-lg border-l-4 border-linx-red ${highlight ? 'bg-gradient-to-r from-red-50 to-white' : 'bg-white'}`}>
    <div className="flex items-start gap-4 mb-4">
      <span className="text-4xl font-bold text-linx-red flex-shrink-0">{number}</span>
      <div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{subtitle}</p>
      </div>
    </div>
    <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
    <ul className="space-y-2">
      {details.map((detail, idx) => (
        <li key={idx} className="flex items-start">
          <span className="mr-3 mt-1 text-linx-red">&#9656;</span>
          <span className="text-gray-600">{detail}</span>
        </li>
      ))}
    </ul>
  </div>
);

const StandardCard = ({ title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-linx-red h-full">
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export default OurApproach;
