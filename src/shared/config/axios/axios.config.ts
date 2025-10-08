import axios from "axios";

const apiUrl = import.meta.env.VITE_PUBLIC_API_URL;
export const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export default axiosInstance;
