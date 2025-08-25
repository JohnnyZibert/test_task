import { createFileRoute } from "@tanstack/react-router";
import { ViewDocumentPage } from "../../pages/ViewDocumentPage/ViewDocumentPage";

export const Route = createFileRoute("/manager/document/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ViewDocumentPage />;
}
