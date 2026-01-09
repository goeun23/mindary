import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: string[] =[];

export const emtionSlice = createSlice({
    name : "emotion", 
    initialState, 
    reducers:{
        toggleEmotion : (state, action:PayloadAction<string>) => {
            const idx = state.indexOf(action.payload);

            if(idx >= 0){
                state.splice(idx,1)
            }else{
                state.push(action.payload)
            }
        }, 
        resetEmotion: ()=> []
    }
})

export const {toggleEmotion, resetEmotion} = emtionSlice.actions
export default emtionSlice.reducer