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
    name: "All Setting",
    url: "/dashboard/setting",
    icon: <AiFillTool />
  }
]


export default dashboardRoutes;
