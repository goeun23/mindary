import { EmotionType } from "@/app/types/emotion";
import { EmotionCard } from "./EmotionCard";

interface EmotionCardListProps {
    emotions : EmotionType[];
}

export const EmotionCardList = ({emotions}: EmotionCardListProps)=> {
    <div className="flex gap-4 flex-wrap">
        {emotions.map((emotion, idx)=> (
            <EmotionCard key={idx} emotion={emotion}/>
        ))}
    </div>
}