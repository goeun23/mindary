import { google } from "@ai-sdk/google"
import { streamText } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  const { prompt } = await req.json()

  const result = streamText({
    model: google("gemini-2.0-flash-exp"),
    prompt,
  })

  return result.toDataStreamResponse()
}
