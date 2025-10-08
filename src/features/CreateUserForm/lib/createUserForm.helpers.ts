import { notification } from "antd";
import { ReactNode } from "react";

export const openNotification = (message: string | ReactNode[] | ReactNode) => {
  notification.open({
    message,
    placement: "topRight",
  });
};
