'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';

interface RootWrapperProps {
  children: React.ReactNode;
}

const CACHE_TIME = 30 * 60 * 1000; // 30분

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: CACHE_TIME,
      gcTime: CACHE_TIME,
    },
  },
});

const RootWrapper = React.memo(function RootWrapper({ children }: RootWrapperProps) {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
});

export default RootWrapper;
