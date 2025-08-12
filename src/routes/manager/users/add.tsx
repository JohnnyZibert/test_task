import { createFileRoute } from "@tanstack/react-router";
import { AddNewPatientPage } from "../../../pages/AddNewPacientPage/AddNewPatientPage";

export const Route = createFileRoute("/manager/users/add")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AddNewPatientPage />;
}
