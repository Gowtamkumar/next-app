import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <section className="container-fluid bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link href="/">
              <a className="nav-link text-dark"><h5>Home</h5></a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse text-dark" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className={router.pathname == '/' ? "active" : "nav-item"}>
                  <Link href="/">
                    <a className="nav-link text-dark">Home</a>
                  </Link>
                </li>
                <li className={router.pathname == '/about' ? "active" : "nav-item"}>
                  <Link href="/about">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li className={router.pathname == '/service' ? "active" : "nav-item"}>
                  <Link href="/service">
                    <a className="nav-link">Service</a>
                  </Link>
                </li>

                <li className={router.pathname == '/dashboard' ? "active" : "nav-item"}>
                  <Link href="/dashboard">
                    <a className="nav-link">Dashboard</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //       <Link href="/">
    //         <a className="navbar-brand">Navbar</a>
    //       </Link>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse me-auto" id="navbarNav">
    //         <ul className="navbar-nav">
    //           <li className={router.pathname == '/' ? "active" : "nav-item"}>
    //             <Link href="/">
    //               <a className="nav-link">Home</a>
    //             </Link>
    //           </li>
    //           <li className={router.pathname == '/about' ? "active" : "nav-item"}>
    //             <Link href="/about" >
    //               <a className="nav-link">About</a>
    //             </Link>
    //           </li>
    //           <li className={router.pathname == '/service' ? "active" : "nav-item"} >
    //             <Link href="/service" >
    //               <a className="nav-link">Service</a>
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link href="/dashboard" >
    //               <a className="nav-link">Dashboard </a>
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav> 
  )
}
