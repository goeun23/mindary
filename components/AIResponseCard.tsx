"use client"

import { useGenerateFromGemini } from "@/hooks/useGemini"

export default function AIResponseCard() {
  const { completion, isLoading } = useGenerateFromGemini()

  if (!completion && !isLoading) return null

  return (
    <div className="mt-6 p-6 bg-white rounded-lg shadow-md border animate-in fade-in duration-300">
      <h2 className="text-lg font-semibold mb-2 text-blue-600 flex items-center gap-2">
        {isLoading && (
          <span className="inline-block w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
        )}
      </h2>
      <p className="text-gray-800 leading-relaxed whitespace-pre-line">
        {completion}
      </p>
    </div>
  )
}
