import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FeedItem {
    id:Number, 
    title:String, 
    tags : Array<string>
    
}

const initialState:FeedItem[] = []

export const feedSlice = createSlice({
    name:"feed", 
    initialState, 
    reducers: {
        
        addFeed:(state, action:PayloadAction<FeedItem>)=> {
            state.unshift(action.payload)
        }, 
        // 피드 모두 삭제
        resetFeed:()=> [], 

        // 더미데이터 가져오기
        getDummyFeed : (state, action:PayloadAction<FeedItem>) => {
            
        }
    }
})

export const {addFeed, resetFeed} = feedSlice.actions
export default feedSlice.reducer
export type {FeedItem}