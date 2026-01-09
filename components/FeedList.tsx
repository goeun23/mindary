// components/FeedList.tsx
"use client"
import { useFeed } from "@/context/FeedContext"
import FeedCard from "./FeedCard"

export default function FeedList() {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const { feeds } = useFeed()

  if (!feeds || feeds.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        작성된 일기가 없습니다.
      </div>
    )
  }

  return (
    <>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            최근 일기{feeds.length}
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            모두 보기
          </a>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {feeds.map((item: any) => (
              <FeedCard item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
