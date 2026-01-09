import { createClient } from "@/utils/supabase/server"
import DiaryWriteView from "./DiaryWriteView"
import { FeedProvider } from "@/context/FeedContext"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "일기 쓰기 | 마음콩",
  description: "오늘의 감정을 기록하고 AI 상담사의 위로를 받아보세요.",
}

export default async function DiaryWritePage() {
  const supabase = await createClient()
  const { data: initialFeeds } = await supabase
    .from("diaries")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <FeedProvider initialFeeds={initialFeeds || []}>
      <DiaryWriteView />
    </FeedProvider>
  )
}
