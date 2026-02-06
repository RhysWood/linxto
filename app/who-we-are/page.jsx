import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FadeInSection, StaggerContainer, StaggerItem, AnimatedArrow } from '../../components/animations/ScrollAnimations';

export const metadata = {
  title: 'Who We Are',
  description: 'Linx-to Project Controls is a Manchester-based consultancy specialising in project planning, forensic delay analysis, and expert witness services. Learn about our team, values, and expertise.',
  openGraph: {
    title: 'Who We Are | Linx-to Project Controls',
    description: 'Manchester-based specialists in project controls and forensic delay analysis, serving clients across the UK and internationally.',
  },
};

const WhoWeAre = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <FadeInSection>
        <section className="w-full max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 text-center mb-4">
            Who We Are
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Manchester-based specialists in project controls and forensic delay analysis,
            serving clients across the UK and internationally.
          </p>
        </section>
      </FadeInSection>

      {/* Company Overview */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-linx-red">
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Linx-to Project Controls Ltd is a Manchester-based consultancy providing expert services in
                  project planning, scheduling, forensic delay analysis, and expert witness testimony for
                  the construction and infrastructure sectors.
                </p>
                <p>
                  We work with contractors, owners, legal teams, and project stakeholders throughout the
                  United Kingdom and internationally to deliver objective, evidence-based analysis that
                  supports successful project delivery and dispute resolution.
                </p>
                <p>
                  Our approach combines deep technical expertise with clear communication, ensuring complex
                  project controls and delay analysis issues are understood by all parties, from
                  technical teams to legal professionals and decision-makers.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <StaggerContainer className="grid md:grid-cols-2 gap-12" staggerDelay={0.2}>
            <StaggerItem>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-linx-red">Our Vision</h2>
                <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-10 shadow-lg border-2 border-linx-red h-full">
                  <p className="text-2xl font-semibold text-gray-800 leading-relaxed">
                    To be the trusted partner of choice for project controls and forensic delay
                    analysis, recognised for technical excellence, professional integrity, and
                    delivering clarity in complex project environments.
                  </p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-linx-red">Our Mission</h2>
                <div className="bg-white rounded-2xl p-10 shadow-lg border-2 border-gray-200 h-full">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    We provide expert project controls, forensic delay analysis, and expert witness
                    services that empower our clients to:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1 text-linx-red">&#9656;</span>
                      <span>Deliver projects on time and within budget</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1 text-linx-red">&#9656;</span>
                      <span>Make informed decisions based on accurate, evidence-based analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1 text-linx-red">&#9656;</span>
                      <span>Prevent and resolve disputes fairly and efficiently</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1 text-linx-red">&#9656;</span>
                      <span>Achieve successful outcomes through rigorous methodology</span>
                    </li>
                  </ul>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <div className="bg-linx-red text-white rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
              <p className="text-xl opacity-90 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
                Our team comprises experienced planning engineers, schedulers, and delay analysis experts
                with extensive backgrounds in construction project management and dispute resolution.
              </p>
              <StaggerContainer className="grid md:grid-cols-2 gap-6">
                <StaggerItem>
                  <TeamStrength
                    title="Qualified Professionals"
                    description="Degree-qualified engineers and planners with professional certifications and memberships"
                  />
                </StaggerItem>
                <StaggerItem>
                  <TeamStrength
                    title="Industry Veterans"
                    description="Decades of combined experience across major UK and international construction projects"
                  />
                </StaggerItem>
                <StaggerItem>
                  <TeamStrength
                    title="Expert Witnesses"
                    description="Proven track record providing testimony in arbitration, adjudication, and litigation"
                  />
                </StaggerItem>
                <StaggerItem>
                  <TeamStrength
                    title="Forensic Specialists"
                    description="Advanced expertise in delay analysis methodologies and claims preparation"
                  />
                </StaggerItem>
              </StaggerContainer>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Expertise */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Our Expertise</h2>
          </FadeInSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <ExpertiseCard
                title="Technical Capabilities"
                items={[
                  "Primavera P6",
                  "Microsoft Project",
                  "ASTA Powerproject",
                  "Delay analysis software",
                  "Earned Value Management",
                  "Risk analysis tools",
                  "PowerBI & Excel analytics"
                ]}
              />
            </StaggerItem>
            <StaggerItem>
              <ExpertiseCard
                title="Professional Standards"
                items={[
                  "SCL Delay & Disruption Protocol (2nd Ed.)",
                  "AACE RP 29R-03 Forensic Schedule Analysis",
                  "PMI standards",
                  "NEC contracts",
                  "JCT contracts",
                  "FIDIC contracts",
                  "UK case law"
                ]}
              />
            </StaggerItem>
            <StaggerItem>
              <ExpertiseCard
                title="Industry Experience"
                items={[
                  "Commercial construction",
                  "Infrastructure & transport",
                  "Industrial facilities",
                  "Energy & utilities",
                  "Healthcare & education",
                  "Public sector works",
                  "Residential developments"
                ]}
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedArrow direction="down" />

          <FadeInSection>
            <h2 className="text-5xl font-bold mb-12 text-center text-gray-900">Our Values</h2>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl p-12 shadow-xl border-2 border-linx-red mb-12">
              <StaggerContainer className="grid md:grid-cols-3 gap-8">
                <StaggerItem>
                  <ValueCard
                    title="Integrity"
                    description="We maintain the highest ethical standards, providing honest, objective analysis regardless of external pressures. Our reputation is built on independence and professional integrity."
                  />
                </StaggerItem>
                <StaggerItem>
                  <ValueCard
                    title="Excellence"
                    description="We are committed to technical excellence in everything we do. Continuous professional development, industry-leading methodologies, and attention to detail define our work."
                  />
                </StaggerItem>
                <StaggerItem>
                  <ValueCard
                    title="Clarity"
                    description="We make complex project controls and delay analysis understandable. Clear communication, accessible reporting, and transparent processes are fundamental to our service."
                  />
                </StaggerItem>
              </StaggerContainer>
              <StaggerContainer className="grid md:grid-cols-3 gap-8 mt-8">
                <StaggerItem>
                  <ValueCard
                    title="Collaboration"
                    description="We work as true partners with clients, project teams, and stakeholders. Success comes through collaboration, not confrontation."
                  />
                </StaggerItem>
                <StaggerItem>
                  <ValueCard
                    title="Accountability"
                    description="We take ownership of our deliverables and stand behind our analysis. Our clients can rely on us to deliver on our commitments."
                  />
                </StaggerItem>
                <StaggerItem>
                  <ValueCard
                    title="Innovation"
                    description="We embrace new technologies and methodologies that enhance our services while maintaining proven, industry-recognised standards."
                  />
                </StaggerItem>
              </StaggerContainer>
            </div>
          </FadeInSection>

          <AnimatedArrow direction="up" />
        </div>
      </section>

      {/* Mottos */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-8 text-linx-red">Our Mottos</h2>
          </FadeInSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <MottoCard
                motto="Evidence Speaks Louder"
                description="We let the facts tell the story. Our analysis is grounded in contemporaneous project records and recognised methodologies including the SCL Protocol and AACE RP 29R-03."
              />
            </StaggerItem>
            <StaggerItem>
              <MottoCard
                motto="Plan the Work, Work the Plan"
                description="Successful projects require both robust planning and disciplined execution. We help you do both."
              />
            </StaggerItem>
            <StaggerItem>
              <MottoCard
                motto="Prevention is Better than Cure"
                description="Proactive project controls and dispute avoidance save time, money, and relationships."
              />
            </StaggerItem>
            <StaggerItem>
              <MottoCard
                motto="Clarity Creates Confidence"
                description="When stakeholders understand the schedule, they can make better decisions and work more effectively together."
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Name & Logo */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <StaggerContainer className="grid md:grid-cols-2 gap-12 items-center" staggerDelay={0.15}>
            <StaggerItem>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-linx-red">
                  Our Name &amp; Logo
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The name &quot;Linx-to&quot; represents our core purpose: <strong>creating connections</strong>.
                  We link planning to execution, theory to practice, and stakeholders to solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our logo features three red diamonds&mdash;the universal symbol from Gantt charts representing
                  <strong> critical path milestones and final project deadlines</strong>. The bold red colour
                  emphasises the critical nature of these milestones and reflects our commitment to
                  helping you hit your deadlines.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-12 shadow-lg flex justify-center">
                <Image
                  src="/assets/linxto_logo.png"
                  alt="Linx-to Project Controls Logo"
                  width={300}
                  height={150}
                  className="object-contain"
                />
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Geographic Coverage */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Geographic Coverage</h2>
            <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-3xl p-12 border-2 border-linx-red">
              <StaggerContainer className="grid md:grid-cols-4 gap-6 mb-8" staggerDelay={0.1}>
                <StaggerItem>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold mb-2 text-linx-red">UK</h4>
                    <p className="text-gray-700">England, Scotland, Wales, Northern Ireland</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold mb-2 text-linx-red">Europe</h4>
                    <p className="text-gray-700">EU member states and international projects</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold mb-2 text-linx-red">Middle East</h4>
                    <p className="text-gray-700">GCC countries and regional infrastructure</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold mb-2 text-linx-red">International</h4>
                    <p className="text-gray-700">Global projects and dispute resolution</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
              <p className="text-gray-600 text-lg text-center">
                While based in Manchester, UK, we provide expert services to clients worldwide,
                with particular experience in complex international projects and multi-jurisdictional disputes.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Be Part of the Team */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedArrow direction="down" />

          <FadeInSection>
            <h2 className="text-5xl font-bold mb-12 text-center text-gray-900">Be Part of the Team</h2>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-white rounded-3xl p-12 shadow-xl text-center mb-8 border-2 border-linx-red">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We&apos;re always interested in hearing from talented planning engineers, schedulers,
                and project controls professionals who share our values and commitment to excellence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you&apos;re an experienced expert or early in your career, if you&apos;re passionate
                about project controls and want to work on challenging, high-profile projects,
                we&apos;d love to hear from you.
              </p>
            </div>
          </FadeInSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={0.15}>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-l-4 border-linx-red">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
                <a href="tel:+447872823368" className="text-3xl font-bold text-linx-red hover:opacity-80 transition-opacity">
                  Click Here
                </a>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-l-4 border-linx-red">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
                <a href="mailto:info@linxto.co.uk" className="text-2xl font-bold text-linx-red hover:opacity-80 transition-opacity break-all">
                  info@linxto.co.uk
                </a>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ title, description }) => (
  <div className="text-center">
    <h3 className="text-2xl font-bold mb-4 text-linx-red">{title}</h3>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

const MottoCard = ({ motto, description }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-linx-red h-full">
    <h3 className="text-2xl font-bold mb-4 text-gray-900">&quot;{motto}&quot;</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const ExpertiseCard = ({ title, items }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-linx-red h-full">
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start">
          <span className="mr-2 text-linx-red">&#10003;</span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const TeamStrength = ({ title, description }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <div className="w-3 h-3 bg-white rounded-full mt-2"></div>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="opacity-90">{description}</p>
    </div>
  </div>
);

export default WhoWeAre;
