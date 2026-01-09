import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface AIState {
    response:string
}

const initialState : AIState = {
    response : '',
}

const aiSlice = createSlice({
    name:'ai', 
    initialState, 
    reducers:{
        setAIResponse:(state, action:PayloadAction<string>)=> {
            state.response = action.payload
        }, 
        resetAIReponse:()=> initialState
    }
})

export const {setAIResponse, resetAIReponse} = aiSlice.actions
export default aiSlice.reducer