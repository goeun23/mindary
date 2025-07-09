import { EmotionType } from "@/app/types/emotion";


export const useAnalazeEmotion = (diaryText:string) : EmotionType | null => {
    if(!diaryText) return null;

    if (diaryText.includes('좋다') || diaryText.includes('행복')) {
        return 'positive';
      } else if (diaryText.includes('슬프다') || diaryText.includes('힘들다')) {
        return 'negative';
      } else {
        return 'mixed';
      }
}
