import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useAppStateManager from "./hooks/useAppStateManager";
import useOnlineManager from "./hooks/useOnlineManager";
import Users from "./Users";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function Native() {
  useOnlineManager();
  useAppStateManager();

  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}
