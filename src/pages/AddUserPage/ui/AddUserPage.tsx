import { SubHeader } from "../../../shared/ui/SubHeader/SubHeader";
import { CreateUserForm } from "../../../features/CreateUserForm";
import { useParams } from "@tanstack/react-router";

export const AddUserPage = () => {
  const { userId } = useParams({ strict: false });

  return (
    <div>
      <SubHeader
        title={
          userId ? "Редактировать данные пользователя" : "Создать пользователя"
        }
      />
      <CreateUserForm />
    </div>
  );
};
