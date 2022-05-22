import IndexLayout from "../../layout"
import Link from "next/link";

export default function TeamLayout({ children }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <h2 className="text-center p-2 bg-light my-2">Logo</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <Link href="/dashboard/sidebar1">
                <a className="navbar-brand">Sidebar 1</a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/dashboard/sidebar2">
                <a className="navbar-brand">Sidebar 2</a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/dashboard/sidebar3">
                <a className="navbar-brand">Sidebar 3</a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/dashboard/sidebar4">
                <a className="navbar-brand">Sidebar 4</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-10">
          <div className="my-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

TeamLayout.PageLayOut = IndexLayout