import styles from "./TableUsers.module.scss";
import { Table } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { useDeleteUser, useGetUsers } from "../../../shared/api/users";
import { openNotification } from "../../CreateUserForm/lib/createUserForm.helpers";
import { useNavigate } from "@tanstack/react-router";
import { Loader } from "../../../shared/ui/Loader/Loader";
import { ActionButton } from "./ActionButton/ActionButton";
import { ColumnsType } from "antd/es/table";
import { User } from "../../../shared/api/users/users.types";
import { useMemo } from "react";

export const TableUsers = () => {
  const { data, isLoading } = useGetUsers();
  const usersData = data?.data ?? [];
  const { mutateAsync: deleteUser } = useDeleteUser();
  const navigate = useNavigate();

  const handleOnClickDeleteRow = async (userId: string) => {
    await deleteUser(userId, {
      onSuccess: () => {
        openNotification(
          <div>
            <DeleteFilled className={styles.deleteIcon} /> Пользователь удалён
          </div>,
        );
      },
    });
  };

  const handleEditUser = (userId: string) => {
    navigate({ to: `/users/edit/$userId`, params: { userId } });
  };

  const columns: ColumnsType<User> = useMemo(() => {
    return [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
        align: "center",
      },
      {
        title: "Имя",
        dataIndex: "name",
        key: "name",
        align: "center",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        align: "center",
      },
      {
        title: "Телефон",
        dataIndex: "phone",
        key: "phone",
        align: "center",
      },
      {
        title: "Роль",
        dataIndex: "role",
        key: "role",
        align: "center",
      },
      {
        title: "",
        dataIndex: "actions",
        render: (_, record: User) => {
          return (
            <ActionButton
              handleOnClickDeleteRow={handleOnClickDeleteRow}
              handleEditUser={handleEditUser}
              id={record.id || ""}
            />
          );
        },
      },
    ];
  }, []);

  if (!usersData) {
    return <Loader />;
  }

  return (
    <div className={styles.tableWrapper}>
      <Table
        className={styles.table}
        columns={columns}
        virtual
        dataSource={usersData as User[]}
        rowKey="id"
        pagination={{
          pageSize: 10, // кол-во строк на странице
          position: ["bottomLeft"], // позиция пагинации
        }}
        loading={isLoading}
        locale={{
          emptyText: "",
        }}
      />
    </div>
  );
};
