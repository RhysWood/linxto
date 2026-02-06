import ContactForm from '../../components/contact/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Linx-to Project Controls for project planning, forensic delay analysis, expert witness services, and dispute resolution support. Based in Manchester, serving clients across the UK and internationally.',
  openGraph: {
    title: 'Contact Us | Linx-to Project Controls',
    description: 'Get in touch for project controls, forensic delay analysis, and expert witness services.',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
