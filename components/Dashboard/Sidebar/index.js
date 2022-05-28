import Link from "next/link";
import dashboardRoutes from "../../../nav";
import { useRouter } from "next/router";
import styles from "../../../styles/sidebar.module.css";


export default function DashBoardSidebar() {
	const router = useRouter();
	return (
		<div className="flex-item-left">
			<h2 className="text-center" style={{ backgroundColor: "white", padding: "3px" }}>Logo</h2>
			{dashboardRoutes.map((sidebarItem, index) => {
				if (sidebarItem?.children) {
					return (
						<div className="accordion" id="accordionExample" key={index}>
							<div>
								<h2 className="accordion-header" id={`headingOne${sidebarItem.id}`}>
									<button
										className="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target={`#${sidebarItem.id}`}
										aria-expanded="true"
										aria-controls={`${sidebarItem.id}`}
									>
										{sidebarItem.title}
									</button>
								</h2>
								<div id={`${sidebarItem.id}`} className="accordion-collapse collapse" aria-labelledby={`headingOne${sidebarItem.id}`} data-bs-parent="#accordionExample">
									<div>
										{sidebarItem?.children.map((item, index) => {
											return (
												<ul key={index} className={`navbar-nav ${styles.sidebarChildren}`} >
													<li className={router.pathname == item.url ? "active" : "nav-item"}>
														<Link href={`${item.url}`}>
															<a className="nav-link " style={{ padding: "12px", marginLeft: "10px" }}>
																{item.childIcon}<span className="p-2">{item.name}</span>
															</a>
														</Link>
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
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link fw-bold text-dark " style={{ marginLeft: "20px" }}>{sidebarItem.heading}</a>
							</li>
						</ul>
					)
				} else {
					return (
						<ul className="navbar-nav">
							<li className={router.pathname == sidebarItem.url ? "active" : "nav-item"}>
								<Link href={`${sidebarItem.url}`}>
									<a className="nav-link" style={{ padding: "10px", marginLeft: "10px" }}>
										<span className="fs-5">{sidebarItem.icon}</span>
										<span className="p-2">{sidebarItem.name}</span>
									</a>
								</Link>
							</li>
						</ul>
					)
				}
			})
			}
		</div>
	)
}