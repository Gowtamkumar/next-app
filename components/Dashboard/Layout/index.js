import DashBoardFooter from "../Footer";
import DashBoardNavbar from "../Navbar";
import DashBoardSidebar from "../Sidebar";
import { useState } from "react"
export default function IndexLayout({ children }) {
  const [toggleSidebar, setToggleSidebar] = useState(true)


  return (
    <div className="container-fluid bg-light" >
      <div className="layoutContainer">
        <div className="desktop mt-2">
          {toggleSidebar && <DashBoardSidebar />}
        </div>
        <div className="flex-item-right mt-2">

          <DashBoardNavbar
            setToggleSidebar={setToggleSidebar}
            toggleSidebar={toggleSidebar}
          />

          <div className="mb-1 mt-2 p-3 overflow-auto" style={{ height: "86vh", backgroundColor: "white" }}>
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


