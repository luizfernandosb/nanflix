import { createRootRoute,    Outlet } from "@tanstack/react-router";
import { Navbar } from "../components/MenuBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={client}>
        <Navbar />
        <Outlet />
      </QueryClientProvider>
    </>
  ),
});
