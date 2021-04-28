import React from 'react'
import TodoItem from './todoItem';

import styles from './todos.module.css'

const TodoList = ({todos}) => {
    return (
        <ul className={styles.todo__list}>
            {todos.map((todo, index)=> {
                return <TodoItem key={index} todo={todo} />
            })}
            
        </ul>
    )
}

export default TodoList;