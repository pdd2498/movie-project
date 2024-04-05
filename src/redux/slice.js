import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id : 1, text:"hwllo world"}]
}

export const slice = createSlice({
    name : 'todos',
    initialState,
    reducers:{
        add : (state , action) =>{
            const ans = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(ans)
        },
        remove : (state , action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
    }
})

export const {add , remove}= slice.actions

export default slice.reducer