import React from 'react'
import {useDispatch} from 'react-redux'
import styles from './todos.module.css'

import {deleteTodo} from '../../ReduxTookid/toolkidSlice'

const TodoItem = ({todo}) => {
    const dispatch = useDispatch()
    return (
        <li className={styles.todo__item}>
            {todo}
            <div className={styles.btns}>
                <button className={styles.delete} onClick={dispatch(()=>deleteTodo())} >Удалить</button>
                <button className={styles.change}>Изменить</button>
            </div>
            
        </li>
        
    )
}

export default TodoItem;