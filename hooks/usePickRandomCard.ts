import { EmotionType } from "@/app/types/emotion";


export const usePickRandomCard = () : EmotionType => {
    const cards:EmotionType[] = ['positive', 'negative', 'mixed'];
    const randomIndex = Math.floor(Math.random()  * cards.length);

    return cards[randomIndex]
}