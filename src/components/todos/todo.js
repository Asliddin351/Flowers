import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import TodoList from './todoList'
import styles from './todos.module.css'

import {addTodo, setValue} from '../../ReduxTookid/toolkidSlice'

const Todo = () => {
    const dispatch = useDispatch()

    const todos = useSelector(state => state.toolkid.todos)
    const value = useSelector(state => state.toolkid.value)


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addTodo(value))
        
    }

    const handleChange = (e) => {
        dispatch(setValue(e.target.value))
    }
    
    

    return (
        <div className={styles.todos}>
            <div className={styles.todo__form}>
                <form onSubmit={handleSubmit}>
                    <input 
                        id={styles.todo__form_input} 
                        value={value}
                        onChange={handleChange} 
                        placeholder='todo'
                    />
                    <button type='submit' className={styles.btn}>Добавить</button>
                </form>
             
                
            </div>
           <TodoList todos={todos}/>
        </div>        
    )
}

export default Todo;