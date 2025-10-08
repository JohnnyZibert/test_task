import { createFileRoute } from "@tanstack/react-router";
import { AddUserPage } from "../../../../pages/AddUserPage";

export const Route = createFileRoute("/users/user/add/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AddUserPage />;
}
