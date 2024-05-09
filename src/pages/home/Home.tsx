import { Menu } from "primereact/menu";
import "./styles/home-styles.css";
import { MenuItem } from "primereact/menuitem";
import ROUTES from "../../consts/routes";
import { Outlet } from "react-router-dom";
import { Menubar } from "primereact/menubar";

const Home = () => {
  let items: MenuItem[] = [
    {
      label: "Notificationes",
      icon: "pi pi-plus",
      url: ROUTES.HOME.NOTIFICATIONS,
    },
    { label: "Usuarios", icon: "pi pi-search", url: ROUTES.HOME.USERS },
  ];

  return (
    <div className="global-home-grid">
      <Menubar className="menubar" />
      <Menu
        className="nav"
        onChange={() => {
          console.log("hasd");
        }}
        model={items}
      />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
