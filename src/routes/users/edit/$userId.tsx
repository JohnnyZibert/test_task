import { createFileRoute } from "@tanstack/react-router";
import { AddUserPage } from "../../../pages/AddUserPage";

export const Route = createFileRoute("/users/edit/$userId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AddUserPage />;
}
