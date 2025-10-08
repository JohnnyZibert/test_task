import { UsersApi } from "./users.api";

export const getUsersOpts = () => ({
  queryKey: ["get-users"],
  queryFn: () => UsersApi.getUsers(),
});
export const getUserOpts = (id: string) => ({
  queryKey: ["get-user", id],
  queryFn: () => UsersApi.getUser(id),
  enabled: !!id,
});
