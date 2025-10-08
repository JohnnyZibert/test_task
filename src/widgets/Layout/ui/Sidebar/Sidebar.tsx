import { Layout, Grid, Button, Drawer } from "antd";
import styles from "./Sidebar.module.scss";
import { SidebarNavigation } from "../../../SidebarNavigation";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const toggleDrawer = () => setOpen((prev) => !prev);
  return (
    <>
      {isMobile && (
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={toggleDrawer}
          className={styles.burgerButton}
        />
      )}
      {!isMobile && (
        <Sider className={styles.sidebar} width={240}>
          <SidebarNavigation />
        </Sider>
      )}
      {isMobile && (
        <Drawer
          placement="left"
          open={open}
          onClose={toggleDrawer}
          bodyStyle={{ padding: 0 }}
          width="70vw"
        >
          <SidebarNavigation />
        </Drawer>
      )}
    </>
  );
};
