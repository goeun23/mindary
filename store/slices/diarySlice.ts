import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface DiaryState {
    content:string
}

const initialState:DiaryState = {
    content:''
}

export const diarySlice = createSlice({
    name:"diary", 
    initialState, 
    reducers:{
        setDiary:(state, action:PayloadAction<string>)=> {
            state.content = action.payload
        }, 
        resetDiary: () => initialState
    }
})

export const {setDiary, resetDiary} = diarySlice.actions
export default diarySlice.reducer