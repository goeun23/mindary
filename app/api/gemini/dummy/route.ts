import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";


export async function POST(){
    const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY})

    const response = await ai.models.generateContent({
        model:"gemini-2.0-flash", 
        contents : [
            {
                parts : [
                    {
                        text: `10개의 감정이 담긴 짧은 일기를 JSON 배열로 생성해줘.
                        예시: [{"content":"오늘은 힘든 하루였다.","emotions":["슬픔","지침"]}]  
                        content(일기 내용)와 emotions(감정 키워드 리스트)만 포함해줘.`,
                    }
                ], 
                role:'user'
            }
        ]
    })

    let text = response.candidates?.[0]?.content?.parts?.[0].text ?? '[]'
    text = text.replace(/```json/g, '').replace(/```/g, '').trim()

    try{
        const parsed = JSON.parse(text)
        return NextResponse.json({data : parsed})
    } catch(e){
        console.error('JSON 파싱 에러', e)
        return NextResponse.json({data : []})
    }
}