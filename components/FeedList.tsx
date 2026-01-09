// components/FeedList.tsx
"use client"
import { useSelector } from "react-redux"
import FeedCard from "./FeedCard"
import type { RootState } from "@reduxjs/toolkit/query"
import { useEffect, useState } from "react"

// Next.js에서 fetch API로 데이터를 가져오려면, 컴포넌트를 비동기 상태로 두고 fetch를 await call로 불러온다.

export default function FeedList() {
  //let feedList = useSelector((state: RootState) => state.feed)
  getDummyDiaryHistory()
  const [feedList, setFeedList] = useState([])

  async function getDummyDiaryHistory() {
    let dummy = await fetch("https://dummyjson.com/posts/search?q=love").then(
      (res) => res.json()
    )
    //feedList = dummy.posts;
    setFeedList(dummy.posts)
  }

  if (!feedList || feedList.length === 0) {
    return (
      <span>
        일기가 없습니다.
        <button
          onClick={getDummyDiaryHistory}
          className="bg-gray-300 rounded-lg p-4"
        >
          dummy 불러오기
        </button>
      </span>
    )
  }

  return (
    <>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            최근 일기{feedList.length}
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
            {feedList.map((item: any) => (
              <FeedCard item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
