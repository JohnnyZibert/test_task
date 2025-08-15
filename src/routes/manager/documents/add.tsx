import { createFileRoute } from "@tanstack/react-router";
import { AddSubmissionPage } from "../../../pages/AddSubmissionPage/AddSubmissionPage";

export const Route = createFileRoute("/manager/documents/add")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AddSubmissionPage />;
}
