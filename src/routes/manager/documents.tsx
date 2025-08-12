import { createFileRoute } from "@tanstack/react-router";
import { SubmissionsPage } from "../../pages/SubmissionsPage/SubmissionsPage";

export const Route = createFileRoute("/manager/documents")({
  component: () => <SubmissionsPage />,
});
