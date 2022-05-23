const dashboardRoutes = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: "ri-dashboard-fill"
  },
  {
    heading: "Peoples"
  },
  {
    title: "Food",
    id: "food-nav",
    icon: "ri-file-chart-fill",
    children: [
      {
        childIcon: "ri-checkbox-blank-circle-line",
        name: "Sidebar 1",
        url: "/dashboard/sidebar1",
        navactive: false
      },
      {
        childIcon: "ri-checkbox-blank-circle-line",
        name: "Sidebar 2",
        url: "/dashboard/sidebar2",
        navactive: false
      },

      {
        childIcon: "ri-checkbox-blank-circle-line",
        name: "Sidebar 3",
        url: "/dashboard/sidebar3",
        navactive: false
      },
      {
        childIcon: "ri-checkbox-blank-circle-line",
        name: "Sidebar 4",
        url: "/dashboard/sidebar4",
        navactive: false
      }
    ]
  },

  {
    heading: "Nice"
  },
  {
    title: "Nice",
    id: "forms-nav",
    icon: "ri-booklet-line",
    children: [
      {
        childIcon: "ri-checkbox-blank-circle-line",
        name: "Nice",
        url: "/"
      },
      {
        childIcon: "ri-checkbox-blank-circle-line",
        name: "Nice",
        url: "/"
      },
    ]
  },
  {
    heading: "Setting"
  },
  {
    name: "All Setting",
    url: "/setting",
    icon: "ri-file-chart-fill"
  }
]


export default dashboardRoutes;
