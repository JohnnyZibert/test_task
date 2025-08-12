import { createFileRoute } from "@tanstack/react-router";
import { LogsEvents } from "../../pages/LogsEvents/LogsEvents";

export const Route = createFileRoute("/manager/logs")({
  component: RouteComponent,
});

function RouteComponent() {
  return <LogsEvents />;
}
