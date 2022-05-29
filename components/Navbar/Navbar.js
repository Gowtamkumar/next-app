import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <section className="container-fluid bg-success">
        <div className="row mt-2 align-items-center">
          <div className="col-2">
            logo
          </div>
          <div className="col-7">
            <div className="col-auto">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="autoSizingInputGroup"
                  placeholder="Search Product"
                />
                <button className="input-group-text">Search</button>

              </div>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-between">

            <div className="dropdown">
              <button
                className="btn btn-primary position-relative"
                id="dropdownUser1" data-bs-toggle="dropdown">
                Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  10+
                  {/* <span className="visually-hidden">unread messages</span> */}
                </span>
              </button>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                dd
              </ul>

            </div>


            <div className="dropdown">
              <button
                className="list-group-item-profile text-center align-items-center btn"
                id="dropdownUser1" data-bs-toggle="dropdown"
              >
                Account
              </button>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header dropdown-item">
                  <Link href="/dashboard/profile">
                    <a className="p-2 mr-3 d-flex align-items-center nav-link">
                      <div className="mx-3">
                        <h6>Jane doe</h6>
                        <i className="fs-bold">Admin</i>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className="dropdown-item" href='/dashboard/profile'>
                    <a className="nav-link">My Profile</a>
                  </Link>
                </li>

                <li className="dropdown-item">
                  <Link className="dropdown-item " href='/dashboard/profile'>
                    <a className="nav-link">Account Settings</a>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-item">
                  <Link href="/login">
                    <a className="nav-link">LogOut</a>
                  </Link>
                </li>
              </ul>

            </div>

          </div>

        </div>

        {/*         
        <div>
          <Link href="/">
            <a className="nav-link text-dark"><h5>LOgo</h5></a>
          </Link>

        </div>
        <div>
          <div className="col-auto">
            <div className="input-group">
              <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Username" />
              <div className="input-group-text">@</div>
            </div>
          </div>
        </div>

        <div className="align-self-baseline">
          Cart
        </div>
        <div className="align-self-baseline">
          Account
        </div> */}
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
