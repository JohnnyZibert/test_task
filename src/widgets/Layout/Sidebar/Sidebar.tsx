import { Layout } from "antd";
import styles from "./Sidebar.module.scss";
import logo from "../../../shared/assets/logo.png";
import { SidebarNavigation } from "../../SidebarNavigation/SidebarNavigation";

const { Sider } = Layout;

export const Sidebar = () => {
  return (
    <Sider className={styles.sidebar}>
      <img src={logo} className={styles.logo} alt={"логотип"} />
      <SidebarNavigation />
    </Sider>
  );
};
