import { createFileRoute } from "@tanstack/react-router";
import { PatientsPage } from "../../../pages/PacientsPage/PatientsPage";

export const Route = createFileRoute("/manager/users/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PatientsPage />;
}
