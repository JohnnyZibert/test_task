import { Button, Layout, Typography } from "antd";

import styles from "./Header.module.scss";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "@tanstack/react-router";

const { Header } = Layout;

const { Text } = Typography;

export const HeaderApp = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate({ to: "/login" });
  };
  return (
    <Header className={styles.header}>
      <div className={styles.userInfo}>
        <Text>
          <b>Иванова Екатерина Ивановна</b>
        </Text>
        <Text className={styles.role}>Директор</Text>
      </div>
      <Button onClick={handleLogout} className={styles.logoutBtn}>
        <LogoutOutlined className={styles.logout} />
      </Button>
    </Header>
  );
};
