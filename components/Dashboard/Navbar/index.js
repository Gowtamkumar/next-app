
import Link from "next/link";
import Image from "next/image";
import profile from '../../../images/profile.png'

export default function DashBoardNavbar() {
  return (
    <header>
      <nav>
        <div className="container-fluid d-flex justify-content-between p-2" style={{ backgroundColor: "white" }}>
          <div className='d-flex justify-content-between ' style={{ width: "100%" }}>
            <i className="fas fa-sliders-h mt-2 ml-3" style={{ fontSize: "20px" }}></i>
            <div className="dropdown">
              <button href="/" className="list-group-item-profile text-center align-items-center btn" id="dropdownUser1" data-bs-toggle="dropdown">
                <Image src={profile} alt="Next js Profile" width="30" height="30" className="rounded-circle" />{/* This img is profile image */}
              </button>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header d-flex align-items-center">

                  <Image src={profile} alt="Next Profile" width="30" height="30" className="rounded-circle" />
                  <div className="p-2 mr-3">
                    <h6>Jane doe</h6>
                    <span>Admin</span>
                  </div>
                </li>
                <li>
                  <Link className="dropdown-item d-flex align-items-center" href='/dashboard/profile'>

                    <a>My Profile</a>

                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item d-flex align-items-center" href='/dashboard/profile'>
                    {/* <i className="ri-settings-5-line pr-2"></i> */}
                    <a>
                      Account Settings
                    </a>
                  </Link>
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
