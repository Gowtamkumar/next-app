import DashBoardFooter from "../Footer";
import DashBoardNavbar from "../Navbar";
import DashBoardSidebar from "../Sidebar";
import { useState } from "react"
export default function IndexLayout({ children }) {
  const [toggleSidebar, setToggleSidebar] = useState(true)

  console.log("hello", toggleSidebar);


  return (
    <div className="container-fluid bg-light" >
      <div className="row">
        {
          toggleSidebar && <DashBoardSidebar toggleSidebar={toggleSidebar} />
        }
        <div className="col-md-10 mt-2 " >
          <div>
            <DashBoardNavbar
              setToggleSidebar={setToggleSidebar}
              toggleSidebar={toggleSidebar}
            />
          </div>
          <div className=" mb-5 mt-3 p-3 overflow-auto" style={{ height: "86vh", backgroundColor: "white" }}>
            {children}
          </div>
          <div className="fixed-bottom">
            <DashBoardFooter />
          </div>
        </div>
      </div>
    </div>
  )
}


