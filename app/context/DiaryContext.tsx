import { createContext, ReactNode, useState } from "react";


interface DiaryContextType {
    diary : string;
    setDiary:(text:string) => void
}

export const DiaryContext = createContext<DiaryContextType | null>(null);

interface DiaryProviderProps {
    children: ReactNode;
}

export const DiaryProvider = ({children}: DiaryProviderProps)=> {
    const [diary, setDiary] = useState<string>('');

    return (
        <DiaryContext.Provider value={{ diary, setDiary }}>
            {children}
            </DiaryContext.Provider>
    )
}