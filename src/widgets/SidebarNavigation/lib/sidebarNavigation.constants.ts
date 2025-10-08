import { ProfileOutlined, TeamOutlined } from "@ant-design/icons";

export const navMenuItems = [
  {
    name: "Создать пользователя",
    pathName: "/users/user/add",
    icon: TeamOutlined,
  },
  {
    name: "Таблица пользователей",
    pathName: "/users",
    icon: ProfileOutlined,
  },
];

export const ADD_USER = "/users/user/add";
export const EDIT_USER = "/users/edit/";
