// app/diary/write/page.tsx
'use client'

import DiaryInput from '@/components/DiaryInput'
import EmotionSelector from '@/components/EmotionSelector'
import SubmitButton from '@/components/SubmitButton'
import AIResponseCard from '@/components/AIResponseCard'
import Header from '@/components/Header'
import type { RootState } from '@reduxjs/toolkit/query'
import { useSelector } from 'react-redux'

import {Button} from 'flowbite-react'

import FeedList from '@/components/FeedList'
import { EmotionAnalyzer } from '@/components/EmotionAnalayzer/EmotionAnalyzer'
import { DiaryProvider } from '@/app/context/DiaryContext'

export default function DiaryWritePage(): JSX.Element {
    const feedList = useSelector((state:RootState)=> state.feed)
  return (
    <DiaryProvider>
    <main className="flex item-center flex-col align-middle">
        <Header/>
        <section>
          <FeedList/>
        </section>


      <div className="flex justify-between mx-auto max-w-[1400px] px-4">
        

{/*         
        <section className="w-full max-w-[600px] flex flex-col gap-6 py-8">
        
        
          <div className="bg-white p-4 rounded-lg shadow-md">
            <DiaryInput />
            <EmotionSelector />
            <SubmitButton />
          </div>

        
          <AIResponseCard />

          <EmotionAnalyzer/>
        
          <FeedList />

        </section> */}

      </div>
    </main>
    </DiaryProvider>
  )
}