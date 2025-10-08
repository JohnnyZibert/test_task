import { USERS_ENDPOINTS } from "./users.constants";
import { getUsersResponse, User } from "./users.types";
import { makeRequest } from "../../config/axios/makeRequest";

export class UsersApi {
  static async createUser(data: User) {
    return makeRequest<User>({
      url: USERS_ENDPOINTS.createUser,
      method: "post",
      data,
    });
  }

  static async getUsers() {
    return makeRequest<getUsersResponse>({
      url: USERS_ENDPOINTS.getUsers,
      method: "get",
    });
  }

  static async getUser(id: string) {
    return makeRequest<User>({
      url: USERS_ENDPOINTS.getUser(id),
      method: "get",
    });
  }

  static async editUser(userData: User) {
    return makeRequest<User>({
      url: USERS_ENDPOINTS.editUser(userData.id || ""),
      method: "put",
      data: userData,
    });
  }

  static async deleteUser(id: string) {
    return makeRequest({
      url: USERS_ENDPOINTS.deleteUser(id),
      method: "delete",
    });
  }
}
