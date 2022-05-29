import { BsFillDice4Fill } from "react-icons/bs";
import { AiFillAppstore, AiFillTool } from "react-icons/ai";


const dashboardRoutes = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: <AiFillAppstore />
  },
  {
    heading: "Peoples"
  },
  {
    title: "Food",
    id: "food-nav",
    icon: <BsFillDice4Fill />,
    children: [
      {
        childIcon: <BsFillDice4Fill />,
        name: "Sidebar 1",
        url: "/dashboard/sidebar1",
        navactive: false
      },
      {
        childIcon: <BsFillDice4Fill />,
        name: "Sidebar 2",
        url: "/dashboard/sidebar2",
        navactive: false
      },

      {
        childIcon: <BsFillDice4Fill />,
        name: "Sidebar 3",
        url: "/dashboard/sidebar3",
        navactive: false
      },
      {
        childIcon: <BsFillDice4Fill />,
        name: "Sidebar 4",
        url: "/dashboard/sidebar4",
        navactive: false
      }
    ]
  },

  {
    heading: "Setting"
  },
  {
    title: "All Setting",
    id: "setting-sidebar",
    icon: <BsFillDice4Fill />,
    children: [
      {
        childIcon: <BsFillDice4Fill />,
        name: "Header",
        url: "/dashboard/header",
      },
      {
        childIcon: <BsFillDice4Fill />,
        name: "Footer",
        url: "/dashboard/footer"
      },

      {
        childIcon: <BsFillDice4Fill />,
        name: "Sidebar 3",
        url: "/dashboard/sidebar3",
      },
      {
        childIcon: <BsFillDice4Fill />,
        name: "Sidebar 4",
        url: "/dashboard/sidebar4"
      }
    ]
  }
]


export default dashboardRoutes;
