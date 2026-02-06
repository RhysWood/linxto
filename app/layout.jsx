import "/styles/globals.css";
import Transition from "./transition";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://linxto.co.uk'),
  title: {
    default: 'Linx-to Project Controls | Expert Forensic Delay Analysis',
    template: '%s | Linx-to Project Controls',
  },
  description: 'Evidence-based project controls, forensic delay analysis, and expert witness services for construction and infrastructure projects. Aligned with SCL Protocol and AACE RP 29R-03.',
  keywords: ['project controls', 'forensic delay analysis', 'expert witness', 'construction', 'SCL Protocol', 'AACE RP 29R-03', 'delay analysis', 'as-planned vs as-built', 'Manchester', 'UK'],
  authors: [{ name: 'Linx-to Project Controls Ltd' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Linx-to Project Controls',
    title: 'Linx-to Project Controls | Expert Forensic Delay Analysis',
    description: 'Evidence-based project controls, forensic delay analysis, and expert witness services for construction and infrastructure projects.',
    images: [
      {
        url: '/assets/linxto_logo.png',
        width: 600,
        height: 300,
        alt: 'Linx-to Project Controls',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linx-to Project Controls | Expert Forensic Delay Analysis',
    description: 'Evidence-based project controls, forensic delay analysis, and expert witness services for construction and infrastructure projects.',
    images: ['/assets/linxto_logo.png'],
  },
  icons: {
    icon: '/assets/linxto_favicon.png',
    apple: '/assets/linxto_favicon.png',
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="linxbg" />
        </div>

        <main className="app">
          <Nav />
          <Transition>{children}</Transition>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
