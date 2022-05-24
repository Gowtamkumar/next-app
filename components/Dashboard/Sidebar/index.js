import Link from "next/link";
import dashboardRoutes from "../../../nav";
import { useRouter } from "next/router";
import styles from "../../../styles/sidebar.module.css";

export default function DashBoardSidebar() {
	const router = useRouter();
	return (
		<div className="flex-item-left" >
			<h2 className="text-center my-2" style={{ backgroundColor: "white", padding: "6px" }}>Logo</h2>
			{dashboardRoutes.map((sidebarItem, index) => {
				if (sidebarItem?.children) {
					return (
						<div className="accordion" id="accordionExample" key={index}>
							<div>
								<h2 className="accordion-header" id={`headingOne${sidebarItem.id}`}>
									<span className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${sidebarItem.id}`} aria-expanded="true" aria-controls={`${sidebarItem.id}`}>
										{sidebarItem.title}
									</span>
								</h2>
								<div id={`${sidebarItem.id}`} className="accordion-collapse collapse" aria-labelledby={`headingOne${sidebarItem.id}`} data-bs-parent="#accordionExample">
									<div>
										{sidebarItem?.children.map((item, index) => {
											return (
												<ul key={index} className={`navbar-nav ${styles.sidebarChildren}`} >
													<li className={router.pathname == item.url ? "active" : "nav-item"}>
														<Link href={`${item.url}`}>
															<a className="nav-link">{item.name}</a>
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
						<ul className="navbar-nav" >
							<li className="nav-item"><a className="nav-link fw-bold text-dark">{sidebarItem.heading}</a></li>
						</ul>
					)
				} else {
					return (
						<ul className="navbar-nav">
							<li className={router.pathname == sidebarItem.url ? "active" : "nav-item"}>
								<Link href={`${sidebarItem.url}`}>
									<a className="nav-link">{sidebarItem.name}</a>
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