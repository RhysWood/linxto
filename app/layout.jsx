import "/styles/globals.css";
import Transition from "./transition";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

export const metadate = {
  title: "Linxto | Plan",
  description: "Plan",
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
