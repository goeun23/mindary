"use client"

import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FeedProvider } from "@/context/FeedContext"
const queryClient = new QueryClient()

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <FeedProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </FeedProvider>
  )
}
