import "./globals.css"
import type { Metadata } from "next"
import Providers from "./providers"

export const metadata: Metadata = {
  title: {
    default: "마음콩 - AI 육아/태교 상담 다이어리",
    template: "%s | 마음콩",
  },
  description:
    "Google Gemini 2.0 기반의 AI 상담사가 당신의 매일을 공감하고 위로해드립니다.",
  openGraph: {
    title: "마음콩 - AI 육아/태교 상담 다이어리",
    description: "오늘의 감정을 기록하고 AI의 따뜻한 위로를 받아보세요.",
    url: "https://mamkong.vercel.app",
    siteName: "마음콩",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "마음콩 - AI 육아/태교 상담 다이어리",
    description: "AI 상담사와 함께하는 나만의 감정 치유 일기장",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <div
          id="wrapper"
          className="overflow-hidden w-full flex flex-col overflow-hidden bg-white-50 scroll-smooth"
        >
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
    // <html lang="ko" className="h-full">
    //   <body className="h-full overflow-hidden bg-gray-50 text-gray-800">
    //     <Providers>
    //       <div className="h-full overflow-y-auto scroll-smooth">{children}</div>
    //     </Providers>
    //   </body>
    // </html>
  )
}
