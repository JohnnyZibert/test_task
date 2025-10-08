import { Menu } from "antd";
import { navMenuItems } from "../lib/sidebarNavigation.constants";
import { Link, useLocation } from "@tanstack/react-router";
import styles from "./SidebarNavigation.module.scss";
import cn from "classnames";
import { getActiveMenuPath } from "../lib/sidebarNavigation.helpers";

export const SidebarNavigation = () => {
  const { pathname } = useLocation();

  const activeMenuPath = getActiveMenuPath(pathname);

  return (
    <Menu mode="inline" selectedKeys={[activeMenuPath]} >
      {navMenuItems.map((menuItem) => {
        return (
          <Menu.Item
            key={menuItem.pathName}
            className={cn({
              [styles.active]: activeMenuPath === menuItem.pathName,
            })}
            icon={<menuItem.icon />}
          >
            <Link
              to={menuItem.pathName}
              className={cn(styles.menuItem, {
                [styles.activeLink]: activeMenuPath === menuItem.pathName,
              })}
            >
              {menuItem.name}
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};
