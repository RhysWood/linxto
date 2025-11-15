import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          About Linx-to Project Controls
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Manchester-based specialists in project controls and forensic analysis, 
          serving clients across the UK and internationally
        </p>
      </div>

      {/* Company Overview */}
      <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-3xl p-12 mb-16 border-2" style={{ borderColor: '#C41E3A' }}>
        <h2 className="text-3xl font-bold mb-6" style={{ color: '#C41E3A' }}>Who We Are</h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            Linx-to Project Controls Ltd is a Manchester-based consultancy providing expert services in 
            project planning, scheduling, forensic delay analysis, and expert witness testimony for 
            the construction and infrastructure sectors.
          </p>
          <p>
            Operating from the heart of the UK&apos;s construction industry, we work with contractors, 
            owners, legal teams, and project stakeholders throughout the United Kingdom and 
            internationally to deliver objective, evidence-based analysis that supports successful 
            project delivery and dispute resolution.
          </p>
          <p>
            Our approach combines deep technical expertise with clear communication, ensuring complex 
            project controls and delay analysis issues are understood by all parties, from 
            technical teams to legal professionals and decision-makers.
          </p>
        </div>
      </div>

      {/* Location Highlight */}
      <div className="mb-16 bg-white rounded-3xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: '#C41E3A' }}>
        <div className="flex items-start gap-6">
          <div className="text-5xl">📍</div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Based in Manchester, UK</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our Manchester base provides excellent connectivity throughout the UK and internationally, 
              allowing us to serve clients across England, Scotland, Wales, and Northern Ireland, 
              as well as projects in Europe, the Middle East, and beyond.
            </p>
            <p className="text-gray-600">
              With strong transport links and a central location, we can quickly mobilize to sites 
              and attend meetings wherever our expertise is needed.
            </p>
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
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
          <ExpertiseCard
            title="Industry Experience"
            items={[
              "Commercial construction",
              "Infrastructure projects",
              "Industrial facilities",
              "Energy sector",
              "Transportation networks",
              "Public sector works",
              "Residential developments"
            ]}
          />
          <ExpertiseCard
            title="Professional Standards"
            items={[
              "SCL Delay Protocol",
              "AACE guidelines",
              "PMI standards",
              "NEC contracts",
              "JCT contracts",
              "FIDIC contracts",
              "UK case law"
            ]}
          />
        </div>
      </div>

      {/* Our Team */}
      <div className="text-white rounded-3xl p-12 mb-16" style={{ backgroundColor: '#C41E3A' }}>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl opacity-90 leading-relaxed mb-6 text-center">
            Our team comprises experienced planning engineers, schedulers, and delay analysis experts 
            with extensive backgrounds in construction project management and dispute resolution.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <TeamStrength 
              icon="🎓"
              title="Qualified Professionals"
              description="Degree-qualified engineers and planners with professional certifications and memberships"
            />
            <TeamStrength 
              icon="💼"
              title="Industry Veterans"
              description="Decades of combined experience across major UK and international construction projects"
            />
            <TeamStrength 
              icon="⚖️"
              title="Expert Witnesses"
              description="Proven track record providing testimony in arbitration, adjudication, and litigation"
            />
            <TeamStrength 
              icon="🔍"
              title="Forensic Specialists"
              description="Advanced expertise in delay analysis methodologies and claims preparation"
            />
          </div>
        </div>
      </div>

      {/* Approach */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Approach</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ApproachCard
            number="01"
            title="Evidence-Based"
            description="All analysis grounded in contemporaneous project records, industry standards, and recognized methodologies. We let the facts speak for themselves."
          />
          <ApproachCard
            number="02"
            title="Independent & Objective"
            description="Impartial analysis focused on facts and evidence, maintaining professional integrity regardless of client preferences or external pressures."
          />
          <ApproachCard
            number="03"
            title="Clear Communication"
            description="Complex technical matters explained in accessible language for diverse audiences, from site teams to boardrooms and courtrooms."
          />
          <ApproachCard
            number="04"
            title="Client-Focused"
            description="Responsive service tailored to client needs, timelines, and budget considerations. We work as partners, not just consultants."
          />
        </div>
      </div>

      {/* Values */}
      <div className="bg-red-50 rounded-3xl p-12 mb-16 border-2" style={{ borderColor: '#C41E3A' }}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard
            title="Integrity"
            description="Honest, ethical practice in all engagements. Our reputation is built on independence and professional conduct."
          />
          <ValueCard
            title="Excellence"
            description="Commitment to the highest standards of technical analysis, reporting, and continuous professional development."
          />
          <ValueCard
            title="Clarity"
            description="Making complex issues understandable through clear reports, transparent processes, and accessible communication."
          />
        </div>
      </div>

      {/* Service Commitment */}
      <div className="bg-white rounded-3xl p-12 shadow-xl mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Commitment to You</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <CommitmentItem 
            title="Timely Delivery"
            description="We understand project and legal deadlines. Our deliverables are completed on time, every time."
          />
          <CommitmentItem 
            title="Transparent Pricing"
            description="Clear fee structures with no hidden costs. You'll know exactly what to expect from the outset."
          />
          <CommitmentItem 
            title="Confidentiality"
            description="Strict confidentiality protocols protect your sensitive project and commercial information."
          />
          <CommitmentItem 
            title="Continuous Support"
            description="We're available throughout your project or dispute, not just for one-off reports."
          />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center text-white rounded-3xl p-12" style={{ backgroundColor: '#C41E3A' }}>
        <h2 className="text-3xl font-bold mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Whether you need project controls support or expert witness services, 
          our Manchester-based team is ready to help you succeed.
        </p>
        <Link href="/contact" className="inline-block bg-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:opacity-90" style={{ color: '#C41E3A' }}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

const ExpertiseCard = ({ title, items }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#C41E3A' }}>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start">
          <span className="mr-2" style={{ color: '#C41E3A' }}>✓</span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const TeamStrength = ({ icon, title, description }) => (
  <div className="flex gap-4">
    <div className="text-4xl">{icon}</div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="opacity-90">{description}</p>
    </div>
  </div>
);

const ApproachCard = ({ number, title, description }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4" style={{ borderLeftColor: '#C41E3A' }}>
    <div className="text-5xl font-bold mb-4" style={{ color: '#C41E3A' }}>{number}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const ValueCard = ({ title, description }) => (
  <div className="text-center">
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const CommitmentItem = ({ title, description }) => (
  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
    <div className="flex-shrink-0 mt-1">
      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#C41E3A' }}></div>
    </div>
    <div>
      <h4 className="text-lg font-bold text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default AboutPage;
