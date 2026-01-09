'use client'

import { useMutation } from "@tanstack/react-query"

export function useGenerateDummyFeeds(){
    return useMutation({
        mutationFn:async () => {
            const res = await fetch('/api/gemini/dummy', {
                method:"POST"
            })

            const data = await res.json()
            
            return data.data
        }
    })
}