import { createFileRoute } from "@tanstack/react-router";
import { MoviesSection } from "../components/Home";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <MoviesSection />;
}
