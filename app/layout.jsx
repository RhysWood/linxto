import "/styles/globals.css";
import Transition from "./transition";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Head from 'next/head';
import ScrollIndicator from '../components/scroll/ScrollIndicator';


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>Linxto | Plan</title>
        <meta name="description" content="Plan" />
      </Head>
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
  );
};

export default RootLayout;
