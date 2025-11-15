'use client';
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.serviceType || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Whether you need project controls support, forensic analysis, or expert witness services, 
          we&apos;re here to help. Reach out today to discuss your needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border-2" style={{ borderColor: '#C41E3A' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          
          {submitted ? (
            <div className="bg-red-50 rounded-2xl p-8 text-center border-2" style={{ borderColor: '#C41E3A' }}>
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#C41E3A' }}>Thank You!</h3>
              <p className="text-gray-700">
                We&apos;ve received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-colors"
                  style={{ focusBorderColor: '#C41E3A' }}
                  onFocus={(e) => e.target.style.borderColor = '#C41E3A'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-colors"
                  onFocus={(e) => e.target.style.borderColor = '#C41E3A'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-colors"
                  onFocus={(e) => e.target.style.borderColor = '#C41E3A'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  placeholder="+44 20 1234 5678"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-colors"
                  onFocus={(e) => e.target.style.borderColor = '#C41E3A'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  placeholder="Company Name"
                />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-colors"
                  onFocus={(e) => e.target.style.borderColor = '#C41E3A'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                >
                  <option value="">Select a service...</option>
                  <option value="project-controls">Project Controls & Planning</option>
                  <option value="forensic-analysis">Forensic Delay Analysis</option>
                  <option value="expert-witness">Expert Witness Services</option>
                  <option value="claims-support">Claims Support</option>
                  <option value="training">Training & Workshops</option>
                  <option value="other">Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-colors resize-none"
                  onFocus={(e) => e.target.style.borderColor = '#C41E3A'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90"
                style={{ backgroundColor: '#C41E3A' }}
              >
                Send Message
              </button>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <ContactInfo
                icon="📧"
                title="Email"
                info="info@linxto.co.uk"
                link="mailto:info@linxto.co.uk"
              />
              
              <ContactInfo
                icon="📱"
                title="Phone"
                info="+44 (0)7872 823368"
                link="tel:+447872823368"
              />
              
              <ContactInfo
                icon="📍"
                title="Address"
                info="Manchester, United Kingdom"
              />
              
              <ContactInfo
                icon="🕐"
                title="Business Hours"
                info="Monday - Friday: 9:00 AM - 5:30 PM GMT"
              />
            </div>
          </div>

          {/* Why Contact Us */}
          <div className="bg-red-50 rounded-3xl p-8 border-2" style={{ borderColor: '#C41E3A' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
            <ul className="space-y-3">
              <BenefitItem text="Free initial consultation to understand your needs" />
              <BenefitItem text="Rapid response to urgent matters" />
              <BenefitItem text="Flexible engagement models" />
              <BenefitItem text="Transparent pricing and scope" />
              <BenefitItem text="Experienced, professional team" />
            </ul>
          </div>

          {/* Service Areas */}
          <div className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Areas</h3>
            <p className="text-gray-700 mb-4">
              While based in the UK, we provide services to clients across:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• United Kingdom</li>
              <li>• Europe</li>
              <li>• Middle East</li>
              <li>• International projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, title, info, link }) => (
  <div className="flex items-start gap-4">
    <div className="text-3xl">{icon}</div>
    <div>
      <h3 className="font-semibold mb-1" style={{ color: '#C41E3A' }}>{title}</h3>
      {link ? (
        <a href={link} className="text-white hover:opacity-80 transition-opacity">
          {info}
        </a>
      ) : (
        <p className="text-gray-300">{info}</p>
      )}
    </div>
  </div>
);

const BenefitItem = ({ text }) => (
  <li className="flex items-start gap-3">
    <span className="text-xl" style={{ color: '#C41E3A' }}>✓</span>
    <span className="text-gray-700">{text}</span>
  </li>
);

export default ContactPage;
