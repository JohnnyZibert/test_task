import { Button, Layout, Typography } from "antd";

import styles from "./Header.module.scss";
import { images } from "../../../shared/assets";
import { LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;

const { Text } = Typography;

export const HeaderApp = () => {
  return (
    <Header className={styles.header}>
      <div className={styles.userInfo}>
        <Text>
          <b>Иванова Екатерина Ивановна</b>
        </Text>
        <Text className={styles.role}>Директор</Text>
      </div>
      {/*<img*/}
      {/*  src={images.logo}*/}
      {/*  className={styles.avatar}*/}
      {/*  alt="фото пользователя"*/}
      {/*/>*/}
      <Button className={styles.logoutBtn}>
        <LogoutOutlined className={styles.logout} />
      </Button>
    </Header>
  );
};
