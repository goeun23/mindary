"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react"
import { createClient } from "@/utils/supabase/client"

type FeedItem = {
  id: string
  content: string
  emotion: string
  ai_response: string
  created_at: string
}

type FeedContextType = {
  feeds: FeedItem[]
  refreshFeeds: () => Promise<void>
}

const FeedContext = createContext<FeedContextType | null>(null)

export function FeedProvider({ children }: { children: ReactNode }) {
  const [feeds, setFeeds] = useState<FeedItem[]>([])
  const supabase = createClient()

  const refreshFeeds = async () => {
    const { data, error } = await supabase
      .from("diaries")
      .select("*")
      .order("created_at", { ascending: false })

    if (!error && data) {
      setFeeds(data)
    }
  }

  useEffect(() => {
    refreshFeeds()
  }, [])

  return (
    <FeedContext.Provider value={{ feeds, refreshFeeds }}>
      {children}
    </FeedContext.Provider>
  )
}

export function useFeed() {
  const context = useContext(FeedContext)
  if (!context) throw new Error("useFeed must be used within a FeedProvider")
  return context
}
