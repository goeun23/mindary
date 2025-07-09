import { configureStore } from "@reduxjs/toolkit";
import emotionReducer from './slices/emtionSlice'
import diaryReducer from './slices/diarySlice'
import aiReducer from './slices/aiSlice'
import feedReducer from './slices/feedSlice'

const loadState = () => {
    if (typeof window === 'undefined') {
        // 서버에서는 localStorage 접근 금지
        return undefined
      }
    
    try{
        const serializedState = localStorage.getItem('feed')
        if(serializedState === null){
            return undefined
        }
        return {feed : JSON.parse(serializedState)}
    }catch(e){
        console.warn('로컬스토리지 로드 실패', e)
        return undefined;
    }
}

export const store = configureStore({
    reducer: {
        emotion:emotionReducer, 
        diary:diaryReducer, 
        ai:aiReducer, 
        feed:feedReducer
    }, 
    preloadedState:loadState()
})

store.subscribe(()=> {
    try{
        const state = store.getState()
        const serializedFeed = JSON.stringify(state.feed)
        localStorage.setItem('feed', serializedFeed)
    }
    catch(e){
        console.warn('로컬스토리지 저장 실패', e)
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch