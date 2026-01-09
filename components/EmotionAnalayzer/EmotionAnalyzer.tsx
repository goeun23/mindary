import { DiaryContext } from "@/app/context/DiaryContext"
import { useAnalazeEmotion } from "@/hooks/useAnalyzeEmotion";
import { usePickRandomCard } from "@/hooks/usePickRandomCard";
import { useContext } from "react"
import { EmotionCard } from "../EmotionCard/EmotionCard";
import { EmotionType } from "@/app/types/emotion";


export const EmotionAnalyzer = () => {
  const diaryContext = useContext(DiaryContext)

  if (!diaryContext) {
    throw new Error('EmotionAnalyzer must be used within a DiaryProvider');
  }

  const {diary} = diaryContext;
  const analzedEmotion:EmotionType | null = useAnalazeEmotion(diary);
  const randomEmotion:EmotionType = usePickRandomCard();

  const displayEmotion:EmotionType = analzedEmotion ?? randomEmotion;

  return (
    <div className="flex justify-center items-center mt-8">
      <EmotionCard emotion={displayEmotion}></EmotionCard>
    </div>
  )
}