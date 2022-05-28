
import Link from "next/link";
import Image from "next/image";
import profile from '../../../images/profile.png'
import DashBoardSidebar from "../Sidebar";
import styles from "../../../styles/navbar.module.css";
import { FaSlidersH } from "react-icons/fa";

export default function DashBoardNavbar({ setToggleSidebar, toggleSidebar }) {
  return (
    <header>
      <nav>
        <div className="container-fluid d-flex justify-content-between" style={{ backgroundColor: "white" }}>
          <div className='d-flex justify-content-between align-items-center' style={{ width: "100%" }}>
            <FaSlidersH onClick={() => setToggleSidebar(!toggleSidebar)} style={{ fontSize: "20px", cursor: "pointer" }} className="desktop" />
            {/* <i className="fas fa-sliders-h ml-3 desktop" style={{ fontSize: "20px", cursor: "pointer" }} onClick={() => setToggleSidebar(!toggleSidebar)} /> */}
            {/* ............................ */}
            <FaSlidersH className="mobile" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" style={{ fontSize: "20px", cursor: "pointer" }} />
            {/* <i className="fas fa-sliders-h mobile" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" style={{ fontSize: "20px", cursor: "pointer" }} /> */}
            <div className={`offcanvas ${styles.moboleSidebar}`} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className={styles.moboleSidebar_body}>
                <DashBoardSidebar />
              </div>
            </div>
            {/* ............................ */}

            <div className="dropdown">
              <button href="/" className="list-group-item-profile text-center align-items-center btn" id="dropdownUser1" data-bs-toggle="dropdown">
                <Image src={profile} alt="Next js Profile" width="30" height="30" className="rounded-circle" />{/* This img is profile image */}
              </button>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header dropdown-item">
                  <Link href="/dashboard/profile">
                    <a className="p-2 mr-3 d-flex align-items-center nav-link">
                      <Image src={profile} alt="Next Profile" width="30" height="30" className="rounded-circle" />
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
      </nav>
    </header>
  )
}

// DashBoardNavbar.PageLayOut = IndexLayout
