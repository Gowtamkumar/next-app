import Footer from '../components/footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import SidebarNav from '../components/Sidebar/SidebarNav'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      {
        Component.PageLayOut ? (
          <Component.PageLayOut>
            <SidebarNav />
            <Component {...pageProps} />
          </Component.PageLayOut>
        ) : (
          <>
            <Navbar />
            <Component {...pageProps} />
          </>
        )
      }
      <Footer />
    </>
  )

}

export default MyApp
