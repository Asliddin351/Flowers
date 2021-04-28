import { createSlice } from "@reduxjs/toolkit";


const toolkidSlice = createSlice({
    name: 'todo',
    
    initialState: {
        // count: 0,
        todos: [
            {
                id: 1,
                text: 'Помыть машину',
                complited: false
            },
            {
                id: 2,
                text: 'Делать уроки',
                complited: false
            },
            {
                id: 3,
                text: 'Найти работу',
                complited: true
            }

        ],

        value: '',
        
    },
    
    reducers: {
        // increment(state){
        //     state.count += 1
        // }, 

        // decrement(state){
        //     state.count -= 1
        // },
  

        addTodo(state, action) {
            state.todos.push(action.payload)
            state.value = ''
        },

        deleteTodo(state, action) {
            state.todos.filter(todo => {
                if(todo.id === action.payload) {
                    return false
                }else{
                    return state.todos
                }
            })
        },

        setValue(state, action) {
            state.value = action.payload
        },
    }
})

export default toolkidSlice.reducer
export const {setValue,addTodo, deleteTodo} = toolkidSlice.actions