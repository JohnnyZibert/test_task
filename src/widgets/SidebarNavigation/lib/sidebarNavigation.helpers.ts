import { ADD_USER, EDIT_USER } from "./sidebarNavigation.constants";

export const getActiveMenuPath = (pathname: string) => {
  if (pathname.includes(EDIT_USER)) {
    return ADD_USER;
  }
  return pathname;
};
