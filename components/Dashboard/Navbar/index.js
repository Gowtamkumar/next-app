
import Link from "next/link";
// import IndexLayout from "../Layout";
// import DashboardSidebar from '../Sidebar/index'

export default function DashBoardNavbar() {
  return (
    <header>
      <nav>
        <div className="container-fluid d-flex justify-content-between p-2" style={{ backgroundColor: "white" }}>
          <div className='d-flex justify-content-between ' style={{ width: "100%" }}>
            <i className="fas fa-sliders-h mt-2 ml-3" style={{ fontSize: "20px" }}></i>
            <div className="dropdown">
              <button href="/" className="list-group-item-profile text-center align-items-center btn" id="dropdownUser1" data-bs-toggle="dropdown">
                <img src="{profile}" alt="Next js Profile" width="30" height="30" className="rounded-circle" />{/* This img is profile image */}
              </button>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header d-flex align-items-center">
                  <img src="{profile}" alt="Next Profile" width="30" height="30" className="rounded-circle" />
                  <div className="p-2 mr-3">
                    <h6>Jane doe</h6>
                    <span>Admin</span>
                  </div>
                </li>
                <li>
                  <button className="dropdown-item d-flex align-items-center" href="/">
                    <i className="ri-user-smile-line pr-2"></i>
                    <span>My Profile</span>
                  </button>
                </li>

                <li>
                  <button className="dropdown-item d-flex align-items-center" href="/">
                    <i className="ri-settings-5-line pr-2"></i><span>Account Settings</span>
                  </button>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-item d-flex align-items-center  ">
                  {/* <i className="fas fa-running"></i> */}
                  <Link className="dropdown-item" href="/">Sign out</Link>
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
