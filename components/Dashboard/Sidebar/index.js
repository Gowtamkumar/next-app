import Link from "next/link";
import dashboardRoutes from "../../../nav";

export default function DashBoardSidebar() {
	return (
		<div className="col-md-2">
			<h2 className="text-center p-2 my-2" style={{ backgroundColor: "white" }}>Logo</h2>
			{dashboardRoutes.map((sidebarItem, index) => {
				if (sidebarItem?.children) {
					return (
						<div className="accordion" id="accordionExample" key={index}>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingOne">
									<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${sidebarItem.id}`} aria-expanded="true" aria-controls={`${sidebarItem.id}`}>
										{sidebarItem.title}
									</button>
								</h2>
								<div id={`${sidebarItem.id}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										{
											sidebarItem?.children.map((item) => {
												return (
													<ul>
														<li>
															<Link href={`${item.url}`}>{item.name}</Link>
														</li>
													</ul>
												)
											})
										}
									</div>
								</div>
							</div>
						</div>
					)
				} else if (sidebarItem.heading) {
					return (
						<ul className="bg-primary">
							<li>{sidebarItem.heading}</li>
						</ul>
					)
				} else {
					return (
						<ul>
							<li>
								<Link href={`${sidebarItem.url}`}>{sidebarItem.name}</Link>

							</li>
						</ul>
					)
				}
			})
			}

			{/* <ul className="list-group overflow-auto mt-3">
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
      </ul> */}
		</div>
	)
}

// DashBoardSidebar.PageLayOut = IndexLayout