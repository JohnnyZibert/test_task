export interface getUsersResponse {
  data: User[];
};

export interface User {
  id?: string;
  name: string;
  email: string;
  phone: number;
  role: number;
}
