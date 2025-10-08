import { createFileRoute } from "@tanstack/react-router";
import { UsersPage } from "../../pages/UsersPage/UsersPage";

export const Route = createFileRoute("/users/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <UsersPage />;
}
