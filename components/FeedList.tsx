// components/FeedList.tsx
'use client'
import { useSelector } from 'react-redux'
import FeedCard from './FeedCard'
import type { RootState } from '@reduxjs/toolkit/query'

export default function FeedList() {
  const feedList = useSelector((state: RootState) => state.feed)
  if (!feedList || feedList.length === 0) return null
  return (
    <>
      {feedList.map((item) => (
        <FeedCard key={item.id} item={item} />
      ))}
    </>
  )
}