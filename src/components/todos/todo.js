import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import TodoList from './todoList'
import styles from './todos.module.css'

import {addTodo, setValue} from '../../ReduxTookid/toolkidSlice'

const Todo = () => {
    const dispatch = useDispatch()

    const todos = useSelector(state => state.toolkid.todos)
    const value = useSelector(state => state.toolkid.value)

    
    
   

    const addNewTodo = (e) => {
        e.preventDefault()
    
        const newTodo = {
            id: todos.length + 1,
            text: value,
            complited: false,
        }
       
        dispatch(addTodo(newTodo))
        dispatch(setValue(''))
    }

    
 


    
    

    return (
        <div className={styles.todos}>
                <form onSubmit={addNewTodo} className={styles.todo__form}>
                    <input 
                        type="text"
                        value={value}
                        onChange={(e)=>dispatch(setValue(e.target.value))} 
                        placeholder='todo'
                    />
                    <button type='submit' className={styles.btn}>Добавить</button>
                </form>
            <TodoList todos={todos}/>
        </div>
    )
}

export default Todo;