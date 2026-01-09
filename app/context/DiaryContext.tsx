"use client"
import { createContext, ReactNode, useContext, useState } from "react"

interface DiaryContextType {
  diary: string
  setDiary: (text: string) => void
  emotions: string[]
  toggleEmotion: (emotion: string) => void
  resetDiary: () => void
}

const DiaryContext = createContext<DiaryContextType | null>(null)

export const useDiary = () => {
  const context = useContext(DiaryContext)
  if (!context) throw new Error("useDiary must be used within DiaryProvider")
  return context
}

interface DiaryProviderProps {
  children: ReactNode
}

export const DiaryProvider = ({ children }: DiaryProviderProps) => {
  const [diary, setDiary] = useState<string>("")
  const [emotions, setEmotions] = useState<string[]>([])

  const toggleEmotion = (emotion: string) => {
    setEmotions((prev) =>
      prev.includes(emotion)
        ? prev.filter((e) => e !== emotion)
        : [...prev, emotion]
    )
  }

  const resetDiary = () => {
    setDiary("")
    setEmotions([])
  }

  return (
    <DiaryContext.Provider
      value={{ diary, setDiary, emotions, toggleEmotion, resetDiary }}
    >
      {children}
    </DiaryContext.Provider>
  )
}
