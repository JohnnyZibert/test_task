import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {User} from "./users.types";
import {UsersApi} from "./users.api";
import {ApiResponse} from "../../config/axios";
import { getUserOpts, getUsersOpts } from "./users.helpers";

export const useGetUsers = () =>
  useQuery(getUsersOpts());

export const useGetUser = (id: string) =>
  useQuery<ApiResponse<User>>(getUserOpts(id));

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userData: User) => UsersApi.createUser(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-users"] });
    },
  });
};

export const useEditUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userData: User) => UsersApi.editUser(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-users"] });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId: string) => UsersApi.deleteUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-users"] });
    },
  });
};
