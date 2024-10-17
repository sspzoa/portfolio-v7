'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';
import type React from 'react';

interface JotaiQueryWrapperProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export default function RootWrapper({ children }: JotaiQueryWrapperProps) {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}
