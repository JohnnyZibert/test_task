import { SubHeader } from "../../../shared/ui/SubHeader/SubHeader";
import { TableUsers } from "../../../features/TableUsers";

export const UsersPage = () => {
  return (
    <div>
      <SubHeader title="Таблица пользователей" />
      <TableUsers />
    </div>
  );
};
