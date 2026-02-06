'use client';
import React, { useState } from 'react';
import { FadeInSection, StaggerContainer, StaggerItem } from '../animations/ScrollAnimations';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.serviceType || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    setError('');
    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message');

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        message: ''
      });
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly at info@linxto.co.uk');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <FadeInSection className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Whether you need project controls support, forensic analysis, or expert witness services,
          we&apos;re here to help. Reach out today to discuss your needs.
        </p>
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <FadeInSection className="bg-white rounded-3xl p-8 shadow-xl border-2 border-linx-red">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

          {submitted ? (
            <div className="bg-red-50 rounded-2xl p-8 text-center border-2 border-linx-red">
              <div className="text-5xl mb-4">&#10003;</div>
              <h3 className="text-2xl font-bold mb-2 text-linx-red">Thank You!</h3>
              <p className="text-gray-700">
                We&apos;ve received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <FormField
                label="Full Name"
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                required
              />
              <FormField
                label="Email Address"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
              />
              <FormField
                label="Phone Number"
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+44 20 1234 5678"
              />
              <FormField
                label="Company / Organisation"
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
              />

              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-linx-red transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option value="Project Controls & Planning">Project Controls &amp; Planning</option>
                  <option value="Forensic Delay Analysis">Forensic Delay Analysis</option>
                  <option value="Expert Witness Services">Expert Witness Services</option>
                  <option value="Claims Support">Claims Support</option>
                  <option value="Training & Workshops">Training &amp; Workshops</option>
                  <option value="Other / General Enquiry">Other / General Enquiry</option>
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
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-linx-red transition-colors resize-none"
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm font-medium">{error}</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full bg-linx-red text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          )}
        </FadeInSection>

        {/* Contact Information */}
        <StaggerContainer className="space-y-8" staggerDelay={0.15}>
          <StaggerItem>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <ContactInfo
                  title="Email"
                  info="info@linxto.co.uk"
                  link="mailto:info@linxto.co.uk"
                />
                <ContactInfo
                  title="Phone"
                  info="+44 (0)7872 823368"
                  link="tel:+447872823368"
                />
                <ContactInfo
                  title="Address"
                  info="Manchester, United Kingdom"
                />
                <ContactInfo
                  title="Business Hours"
                  info="Monday - Friday: 9:00 AM - 5:30 PM GMT"
                />
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-red-50 rounded-3xl p-8 border-2 border-linx-red">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
              <ul className="space-y-3">
                <BenefitItem text="Free initial consultation to understand your needs" />
                <BenefitItem text="Rapid response to urgent matters" />
                <BenefitItem text="Flexible engagement models" />
                <BenefitItem text="Transparent pricing and scope" />
                <BenefitItem text="Analysis aligned with SCL Protocol & AACE RP 29R-03" />
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Areas</h3>
              <p className="text-gray-700 mb-4">
                While based in Manchester, UK, we provide services to clients across:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="mr-2 text-linx-red">&#9656;</span> United Kingdom</li>
                <li className="flex items-start"><span className="mr-2 text-linx-red">&#9656;</span> Europe</li>
                <li className="flex items-start"><span className="mr-2 text-linx-red">&#9656;</span> Middle East</li>
                <li className="flex items-start"><span className="mr-2 text-linx-red">&#9656;</span> International projects</li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </div>
  );
};

const FormField = ({ label, id, name, type, value, onChange, placeholder, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">
      {label} {required && '*'}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-linx-red transition-colors"
      placeholder={placeholder}
    />
  </div>
);

const ContactInfo = ({ title, info, link }) => (
  <div>
    <h3 className="font-semibold mb-1 text-linx-red">{title}</h3>
    {link ? (
      <a href={link} className="text-white hover:opacity-80 transition-opacity">
        {info}
      </a>
    ) : (
      <p className="text-gray-300">{info}</p>
    )}
  </div>
);

const BenefitItem = ({ text }) => (
  <li className="flex items-start gap-3">
    <span className="text-xl text-linx-red">&#10003;</span>
    <span className="text-gray-700">{text}</span>
  </li>
);

export default ContactForm;
