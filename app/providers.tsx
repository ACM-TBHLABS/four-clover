"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 2,
            gcTime: 300000, // Cache data for 5 minutes (in milliseconds)
            staleTime: 60000, // Keep stale data for 1 minutes (in milliseconds)
            retryDelay: (attemptIndex) =>
              Math.min(1000 * 2 ** attemptIndex, 30000), // Retry after 1 second, then 2, 4, 8, 16, 32, 64 seconds, etc...
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
