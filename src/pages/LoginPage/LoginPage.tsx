import { LoginForm } from "../../features/LoginForm/LoginForm";
import { useLocation } from "@tanstack/react-router";

export const LoginPage = () => {
  const { pathname } = useLocation();
  const isLogin = pathname.includes("login");

  if (!isLogin) return null;

  return <LoginForm />;
};
