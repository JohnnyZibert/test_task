import { SubHeader } from "../../shared/ui/SubHeader/SubHeader";
import { TableUsers } from "../../features/TableUsers/ui/TableUsers";

export const UsersPage = () => {
  return (
    <div>
      <SubHeader title="Таблица пользователей" />
      <TableUsers />
    </div>
  );
};
