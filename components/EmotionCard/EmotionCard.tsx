import { EmotionType } from "@/app/types/emotion";
import { motion } from "framer-motion";

interface EmotionCardProps {
    emotion:EmotionType
}

export const EmotionCard = ({emotion}:EmotionCardProps)=> {
    const cardText:Record<EmotionType, string> = {
        positive:"오늘 정말 멋진 하루였어요.", 
        negative : "괜찮아요. 힘든 날도 있어요.",
        mixed : "기쁨과 슬픔이 공존하는 하루였네요."
    };

    return (
        <motion.div
            initial={{opacity:0, scale:0.8}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5, ease:'easeOut'}}
            className="p-6 rounded-2xl shadow-md text-center bg-white"
            >
                {cardText[emotion]}
            </motion.div>
            
        
    )
}