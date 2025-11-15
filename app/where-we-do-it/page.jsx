import React from 'react';
import Link from 'next/link';

const WhereWeDoIt = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
          Where We Do It
        </h1>
      </section>

      {/* Industries Overview */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 mb-8 shadow-lg text-center border-2" style={{ borderColor: '#C41E3A' }}>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Linx-to Project Controls operates across a diverse range of industries, bringing 
              specialized expertise in project planning, scheduling, and forensic delay analysis 
              to construction and infrastructure projects of all types and scales.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our experience spans multiple sectors, allowing us to understand the unique challenges, 
              regulatory requirements, and delivery methodologies specific to each industry we serve.
            </p>
          </div>

          {/* Arrow Divider */}
          <div className="flex justify-center my-8">
            <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px]" style={{ borderTopColor: '#C41E3A' }}></div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#C41E3A' }}>Industries</h2>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <IndustryCard
              icon="🏗️"
              title="Commercial Construction"
              description="Office buildings, retail centers, mixed-use developments, and commercial fit-outs"
            />
            <IndustryCard
              icon="🏘️"
              title="Residential"
              description="High-rise apartments, housing estates, student accommodation, and residential refurbishment"
            />
            <IndustryCard
              icon="🏭"
              title="Industrial"
              description="Manufacturing facilities, warehouses, distribution centers, and logistics hubs"
            />
            <IndustryCard
              icon="⚡"
              title="Energy & Utilities"
              description="Power generation, renewable energy projects, transmission infrastructure, and utility networks"
            />
            <IndustryCard
              icon="🏥"
              title="Healthcare"
              description="Hospitals, medical centers, care facilities, and healthcare infrastructure"
            />
            <IndustryCard
              icon="🎓"
              title="Education"
              description="Schools, universities, research facilities, and educational campus developments"
            />
          </div>
        </div>
      </section>

      {/* Arrow Divider */}
      <div className="flex justify-center my-8">
        <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px]" style={{ borderTopColor: '#C41E3A' }}></div>
      </div>

      {/* Sectors */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-8 text-gray-900">Sectors</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectorCard title="Infrastructure" items={[
              "Roads & Highways",
              "Rail & Metro",
              "Bridges & Tunnels",
              "Ports & Marine",
              "Airports"
            ]} />

            <SectorCard title="Building Services" items={[
              "MEP Systems",
              "HVAC Installation",
              "Electrical Systems",
              "Plumbing & Drainage",
              "Fire Protection"
            ]} />

            <SectorCard title="Civil Engineering" items={[
              "Earthworks",
              "Foundations",
              "Structural Works",
              "Drainage Systems",
              "Site Development"
            ]} />

            <SectorCard title="Fit-Out & Interiors" items={[
              "Office Fit-Out",
              "Retail Interiors",
              "Hotel & Hospitality",
              "Restaurant & Leisure",
              "Refurbishment"
            ]} />

            <SectorCard title="Heritage & Conservation" items={[
              "Listed Buildings",
              "Historic Restoration",
              "Conservation Works",
              "Adaptive Reuse",
              "Heritage Projects"
            ]} />

            <SectorCard title="Public Sector" items={[
              "Government Buildings",
              "Municipal Projects",
              "Defence & Security",
              "Emergency Services",
              "Community Facilities"
            ]} />
          </div>

          {/* Geographic Coverage */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Geographic Coverage</h3>
            <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-3xl p-12 border-2" style={{ borderColor: '#C41E3A' }}>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div>
                  <h4 className="text-2xl font-bold mb-2" style={{ color: '#C41E3A' }}>UK</h4>
                  <p className="text-gray-700">England, Scotland, Wales, Northern Ireland</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2" style={{ color: '#C41E3A' }}>Europe</h4>
                  <p className="text-gray-700">EU member states and international projects</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2" style={{ color: '#C41E3A' }}>Middle East</h4>
                  <p className="text-gray-700">GCC countries and regional infrastructure</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2" style={{ color: '#C41E3A' }}>International</h4>
                  <p className="text-gray-700">Global projects and dispute resolution</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg">
                While based in the UK, we provide expert services to clients worldwide, 
                with particular experience in complex international projects and multi-jurisdictional disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Arrow Divider */}
      <div className="flex justify-center my-8">
        <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px]" style={{ borderTopColor: '#C41E3A' }}></div>
      </div>

      {/* CTA Section */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white rounded-3xl p-12" style={{ backgroundColor: '#C41E3A' }}>
          <h2 className="text-3xl font-bold mb-4">
            Your Industry. Our Expertise.
          </h2>
          <p className="text-xl opacity-90 mb-8">
            No matter which sector you operate in, we bring specialized knowledge and 
            proven methodologies to support your project success.
          </p>
          <Link href="/contact" className="inline-block bg-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:opacity-90" style={{ color: '#C41E3A' }}>
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

const IndustryCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4" style={{ borderLeftColor: '#C41E3A' }}>
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const SectorCard = ({ title, items }) => (
  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100 hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-bold mb-4" style={{ color: '#C41E3A' }}>{title}</h3>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start">
          <span className="mr-2" style={{ color: '#C41E3A' }}>▸</span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default WhereWeDoIt;
