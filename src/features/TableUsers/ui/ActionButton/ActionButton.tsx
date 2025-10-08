import styles from "./ActionButton.module.scss";
import { Button } from "antd";
import { DeleteOutlined, EditFilled } from "@ant-design/icons";

interface Props {
  handleOnClickDeleteRow: (id: string) => void;
  handleEditUser: (id: string) => void;
  id: string;
}

export const ActionButton = ({
  handleOnClickDeleteRow,
  handleEditUser,
  id,
}: Props) => {
  return (
    <div className={styles.buttons}>
      <Button
        onClick={() => handleEditUser(id)}
        shape="circle"
        icon={<EditFilled />}
      />
      <Button
        onClick={() => handleOnClickDeleteRow(id)}
        shape="circle"
        icon={<DeleteOutlined />}
        danger
      />
    </div>
  );
};
