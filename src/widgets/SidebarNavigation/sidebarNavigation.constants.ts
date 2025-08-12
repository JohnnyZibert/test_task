import {
  FileDoneOutlined,
  ProfileOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export const navMenuItems = [
  {
    name: "Отправления",
    pathName: "/manager/documents",
    icon: FileDoneOutlined,
  },
  {
    name: "Пациенты",
    pathName: "/manager/users",
    icon: TeamOutlined,
  },
  {
    name: "Лог событий",
    pathName: "/manager/logs",
    icon: ProfileOutlined,
  },
  {
    name: "Статистика",
    pathName: "/manager/stats",
    icon: ProfileOutlined,
  },
];
