import { Menu } from "antd";
import { navMenuItems } from "./sidebarNavigation.constants";
import { Link } from "@tanstack/react-router";
import styles from "./SidebarNavigation.module.scss";

export const SidebarNavigation = () => {
  return (
    <Menu mode="inline">
      {navMenuItems.map((menuItem) => (
        <Menu.Item key={menuItem.pathName} icon={<menuItem.icon />}>
          <Link to={menuItem.pathName} className={styles.menuItem}>
            {menuItem.name}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
