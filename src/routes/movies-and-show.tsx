import { createFileRoute } from "@tanstack/react-router";
import { MoviesAndShowsSection } from "../components/MoviesAndShows/index";

export const Route = createFileRoute("/movies-and-show")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <MoviesAndShowsSection />
    </div>
  );
}
