import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Users from "./Users";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function Native() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}
