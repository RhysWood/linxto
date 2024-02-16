import '/styles/globals.css';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

export const metadate = {
    title: "Vessel Packaging",
    description: "The Power of Can"
}

const RootLayout = ({children}) => {
    return (
      <html lang="en">
          <body>
              <div className='main'>
                  <div className='linxbg'/>
              </div>
  
              <main className='app'>
                  <Nav />
                    {children}
                  <Footer />
              </main>
          </body>
      </html>
    )
  }
  
  export default RootLayout