"use client"

import { useDiary } from "@/app/context/DiaryContext"

const EMOTIONS = ["기쁨", "슬픔", "분노", "불안", "놀람", "사랑"]

export default function EmotionSelector() {
  const { emotions, toggleEmotion } = useDiary()

  return (
    <div className="flex flex-wrap gap-2">
      {EMOTIONS.map((emotion) => (
        <button
          key={emotion}
          onClick={() => toggleEmotion(emotion)}
          className={`px-4 py-2 rounded-full border ${
            emotions.includes(emotion)
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          {emotion}
        </button>
      ))}
    </div>
  )
}
