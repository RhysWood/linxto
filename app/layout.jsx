import "/styles/globals.css";
import Transition from "./transition";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Head from 'next/head';
import ScrollIndicator from '../components/scroll/ScrollIndicator';

export const Metadata = {
  title: "Linxto | Plan",
  description: "Plan",
};

const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Linxto | Plan</title>
        <meta name="description" content="Plan" />
      </Head>
    <html lang="en">
      <body>
        <div className="main">
          <div className="linxbg" />
        </div>

        <main className="app">
        <Nav />
          <ScrollIndicator /> 
          <Transition>{children}</Transition>
          <Footer />
        </main>
      </body>
    </html>
  </>
  );
};

export default RootLayout;
