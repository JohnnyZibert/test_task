export const USERS_ENDPOINTS = {
  getUsers: "/items",
  createUser: "/items",
  editUser: (id: string) => `/items/${id}`,
  getUser: (id: string) => `/items/${id}`,
  deleteUser: (id: string) => `/items/${id}`,
};
