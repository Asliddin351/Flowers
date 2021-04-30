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
            if(state.value !== ''){
                state.todos.push(action.payload)
            }else{
                return alert('Can you write something in input')
            }
            
        },
        

        changeTodo (state, action) {
            state.todos.find(el => {
                if(el.id === action.payload.id){
                    return el.text = state.value
                }else {
                    return el.text
                }
            })
        },

        changeStatus(state, action) {
            let index = state.todos.findIndex(el => el.id === action.payload.id);
            state.todos[index].complited = !state.todos[index].complited;
            return state;
        },

        deleteTodo(state, action) {
            const newTodo = state.todos.filter(el=>{
                if(el.id === action.payload) {
                    return false
                }else{
                    return el
                }
            })
            
            state.todos = newTodo

        },

        setValue(state, action) {
            state.value = action.payload
            
        },
    }
})

export default toolkidSlice.reducer
export const {setValue,addTodo, deleteTodo, changeStatus, changeTodo} = toolkidSlice.actions