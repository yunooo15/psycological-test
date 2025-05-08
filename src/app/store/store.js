'use cliet'

import { create } from 'zustand'


//建立 syore hook
const usePsyStore = create((set) => ({

    //states and actions
    bears: 0,
    questionState: 0,
    totalQuestions: 3,
    score: 0,
    updateState:(newState) =>{set((state)=>({stste: newState}))},
    updateQuestionState:(newState) =>{set((state)=>({questionstste: newState}))},
    updateTotalQestions:(newState) =>{set((state)=>({tatalQustion: newState}))},
    updateScore:(newState) =>{set((state)=>({score: newState}))},
}))
export { usePsyStore }