"use client"

import DiaryInput from "@/components/DiaryInput"
import EmotionSelector from "@/components/EmotionSelector"
import SubmitButton from "@/components/SubmitButton"
import AIResponseCard from "@/components/AIResponseCard"
import Header from "@/components/Header"
import FeedList from "@/components/FeedList"
import { DiaryProvider } from "@/app/context/DiaryContext"

export default function DiaryWriteView() {
  return (
    <DiaryProvider>
      <main className="flex item-center flex-col align-middle bg-gray-50 min-h-screen pb-20">
        <div className="max-w-[1000px] w-full mx-auto pt-10">
          <Header />
        </div>

        <div className="flex flex-col gap-6 mx-auto max-w-[1000px] w-full px-4 mt-6">
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              오늘의 감정 기록
            </h2>
            <DiaryInput />
            <div className="my-4">
              <EmotionSelector />
            </div>
            <SubmitButton />
          </section>

          <AIResponseCard />

          <section>
            <h3 className="text-lg font-bold mb-4 ml-1">나의 기록들</h3>
            <FeedList />
          </section>
        </div>
      </main>
    </DiaryProvider>
  )
}
