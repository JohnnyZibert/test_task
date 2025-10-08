import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <></>,
  beforeLoad: () => {
    throw redirect({
      to: "/users/user/add",
    });
  },
});
