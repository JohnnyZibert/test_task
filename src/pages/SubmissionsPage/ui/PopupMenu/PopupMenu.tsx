import { Dropdown, Menu, Button } from "antd";
import {
  FileAddOutlined,
  SendOutlined,
  InboxOutlined,
  FileTextOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";
import styles from "./PopupMenu.module.scss";

const menuItems = [
  {
    key: "new",
    label: "Новый документ",
    icon: <FileAddOutlined />,
  },
  {
    key: "sendSelected",
    label: "Отправить выбранные на подпись",
    icon: <SendOutlined />,
  },
  {
    key: "sendAllUnsigned",
    label: "Отправить все неподписанные на подпись",
    icon: <SendOutlined />,
  },
  {
    key: "archiveSelected",
    label: "Отправить выбранные в архив",
    icon: <InboxOutlined />,
  },
  {
    key: "archiveAll",
    label: "Отправить всё в архив",
    icon: <InboxOutlined />,
  },
  {
    key: "reportSelected",
    label: "Отчет о выбранных отправлениях",
    icon: <FileTextOutlined />,
  },
  {
    key: "reportAll",
    label: "Отчет о всех отправлениях",
    icon: <FileTextOutlined />,
  },
  {
    key: "exportSelected",
    label: "Экспорт выбранных отправлений (ZIP)",
    icon: <CloudDownloadOutlined />,
  },
  {
    key: "exportAll",
    label: "Экспорт всех отправлений (ZIP)",
    icon: <CloudDownloadOutlined />,
  },
];

const menu = (
  <Menu
    className={styles.menu}
    items={menuItems.map((item) => ({
      ...item,
      label: (
        <div className={styles.menuItem}>
          {item.icon}
          <span>{item.label}</span>
        </div>
      ),
    }))}
  />
);

export const PopupMenu = () => {
  return (
    <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
      <Button type="primary">Меню</Button>
    </Dropdown>
  );
};
