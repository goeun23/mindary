import { useCompletion } from "ai/react"

export function useGenerateFromGemini() {
  return useCompletion({
    api: "/api/gemini",
  })
}
