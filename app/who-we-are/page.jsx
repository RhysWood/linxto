import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 text-center mb-6">
          Who We Are
        </h1>
      </section>

      {/* Our Name & Logo */}
      <section id="anchorName" className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#C41E3A' }}>
                Our Name &amp; Logo
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-12 shadow-lg flex justify-center">
              <Image
                src="/assets/linxto_logo.png"
                alt="Linx-to Project Controls Logo"
                width={300}
                height={150}
                className="object-contain"
              />
            </div>
          </div>
          <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: '#C41E3A' }}>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The name &quot;Linx-to&quot; represents our core purpose: <strong>creating connections</strong>. 
              We link planning to execution, theory to practice, and stakeholders to solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our logo features three red diamonds—the universal symbol from Gantt charts representing 
              <strong> critical path milestones and final project deadlines</strong>. These diamonds are 
              instantly recognizable to anyone in construction planning as the ultimate goal: 
              <strong>hitting your deadlines</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The bold red color emphasizes the critical nature of these milestones and reflects our 
              commitment to clarity, precision, and helping you achieve your project deadlines through 
              expert planning and control.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div id="anchorVision">
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#C41E3A' }}>
                Our Vision
              </h2>
              <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-10 shadow-lg border-2" style={{ borderColor: '#C41E3A' }}>
                <p className="text-2xl font-semibold text-gray-800 leading-relaxed">
                  To be the trusted partner of choice for project controls and forensic delay 
                  analysis, recognized for technical excellence, professional integrity, and 
                  delivering clarity in complex project environments.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div id="anchorMission">
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#C41E3A' }}>
                Our Mission Statement
              </h2>
              <div className="bg-white rounded-2xl p-10 shadow-lg border-2 border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We provide expert project controls, forensic delay analysis, and expert witness 
                  services that empower our clients to:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1" style={{ color: '#C41E3A' }}>▸</span>
                    <span>Deliver projects on time and within budget</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1" style={{ color: '#C41E3A' }}>▸</span>
                    <span>Make informed decisions based on accurate, evidence-based analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1" style={{ color: '#C41E3A' }}>▸</span>
                    <span>Prevent and resolve disputes fairly and efficiently</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1" style={{ color: '#C41E3A' }}>▸</span>
                    <span>Achieve successful project outcomes through clear communication and rigorous methodology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="anchorValues" className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Top Arrow */}
          <div className="flex justify-center mb-8">
            <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px]" style={{ borderTopColor: '#C41E3A' }}></div>
          </div>

          <h2 className="text-5xl font-bold mb-12 text-center text-gray-900">
            Our Values
          </h2>

          <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl p-12 shadow-xl border-2 mb-12" style={{ borderColor: '#C41E3A' }}>
            <div className="grid md:grid-cols-3 gap-8">
              <ValueCard
                title="Integrity"
                description="We maintain the highest ethical standards, providing honest, objective analysis regardless of external pressures. Our reputation is built on independence and professional integrity."
              />
              <ValueCard
                title="Excellence"
                description="We are committed to technical excellence in everything we do. Continuous professional development, industry-leading methodologies, and attention to detail define our work."
              />
              <ValueCard
                title="Clarity"
                description="We make complex project controls and delay analysis understandable. Clear communication, accessible reporting, and transparent processes are fundamental to our service."
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <ValueCard
                title="Collaboration"
                description="We work as true partners with clients, project teams, and stakeholders. Success comes through collaboration, not confrontation."
              />
              <ValueCard
                title="Accountability"
                description="We take ownership of our deliverables and stand behind our analysis. Our clients can rely on us to deliver on our commitments."
              />
              <ValueCard
                title="Innovation"
                description="We embrace new technologies and methodologies that enhance our services while maintaining proven, industry-recognized standards."
              />
            </div>
          </div>

          {/* Bottom Arrow */}
          <div className="flex justify-center mt-8">
            <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[30px]" style={{ borderBottomColor: '#C41E3A' }}></div>
          </div>
        </div>
      </section>

      {/* Our Mottos */}
      <section id="anchorMottos" className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#C41E3A' }}>
            Our Mottos
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <MottoCard
              motto="Evidence Speaks Louder"
              description="We let the facts tell the story. Our analysis is grounded in contemporaneous project records and recognized methodologies."
            />
            <MottoCard
              motto="Plan the Work, Work the Plan"
              description="Successful projects require both robust planning and disciplined execution. We help you do both."
            />
            <MottoCard
              motto="Prevention is Better than Cure"
              description="Proactive project controls and dispute avoidance save time, money, and relationships."
            />
            <MottoCard
              motto="Clarity Creates Confidence"
              description="When stakeholders understand the schedule, they can make better decisions and work more effectively together."
            />
          </div>
        </div>
      </section>

      {/* Be Part of the Team */}
      <section id="anchorTeam" className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Top Arrow */}
          <div className="flex justify-center mb-8">
            <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px]" style={{ borderTopColor: '#C41E3A' }}></div>
          </div>

          <h2 className="text-5xl font-bold mb-12 text-center text-gray-900">
            Be Part of the Team
          </h2>

          <div className="bg-white rounded-3xl p-12 shadow-xl text-center mb-8 border-2" style={{ borderColor: '#C41E3A' }}>
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-l-4" style={{ borderLeftColor: '#C41E3A' }}>
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
              <a href="tel:+442012345678" className="text-3xl font-bold hover:opacity-80 transition-opacity" style={{ color: '#C41E3A' }}>
                0844 98 000 98
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-l-4" style={{ borderLeftColor: '#C41E3A' }}>
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
              <a href="mailto:info@linxto.co.uk" className="text-2xl font-bold hover:opacity-80 transition-opacity break-all" style={{ color: '#C41E3A' }}>
                info@linxto.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ title, description }) => (
  <div className="text-center">
    <h3 className="text-2xl font-bold mb-4" style={{ color: '#C41E3A' }}>
      {title}
    </h3>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

const MottoCard = ({ motto, description }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: '#C41E3A' }}>
    <h3 className="text-2xl font-bold mb-4 text-gray-900">&quot;{motto}&quot;</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default WhoWeAre;
