import React from 'react'
import TodoItem from './todoItem';

import styles from './todos.module.css'

const TodoList = ({todos}) => {
   
    return (
        <ul className={styles.todo__list}>
            {todos.map(todo=>{
                return <TodoItem key={todo.id} todo={todo} />
            })}
           
        </ul>
    )
}

export default TodoList;