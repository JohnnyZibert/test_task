import { Layout } from "antd";
import styles from "./Sidebar.module.scss";
import { SidebarNavigation } from "../../SidebarNavigation/SidebarNavigation";
import { images } from "../../../shared/assets";

const { Sider } = Layout;

export const Sidebar = () => {
  return (
    <Sider className={styles.sidebar}>
      <img src={images.logo} className={styles.logo} alt={"логотип"} />
      <SidebarNavigation />
    </Sider>
  );
};
