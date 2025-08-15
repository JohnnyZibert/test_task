import { Menu } from "antd";
import { navMenuItems } from "./sidebarNavigation.constants";
import { Link, useLocation } from "@tanstack/react-router";
import styles from "./SidebarNavigation.module.scss";
import cn from "classnames";

export const SidebarNavigation = () => {
  const { pathname } = useLocation();
  return (
    <Menu mode="inline">
      {navMenuItems.map((menuItem) => (
        <Menu.Item
          key={menuItem.pathName}
          className={cn({
            [styles.active]: pathname.includes(menuItem.pathName),
          })}
          icon={<menuItem.icon />}
        >
          <Link
            to={menuItem.pathName}
            className={cn(styles.menuItem, {
              [styles.activeLink]: pathname.includes(menuItem.pathName),
            })}
          >
            {menuItem.name}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
