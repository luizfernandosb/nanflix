import { createFileRoute } from "@tanstack/react-router";
import { SubscriptionSection } from "../components/Subscription";

export const Route = createFileRoute("/subscription")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SubscriptionSection />;
}
