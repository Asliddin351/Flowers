import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from './todos.module.css'

import {changeStatus, deleteTodo, changeTodo, setValue} from '../../ReduxTookid/toolkidSlice'

const TodoItem = ({todo}) => {

    const value = useSelector(state => state.toolkid.value)

    const dispatch = useDispatch()
    const [changeInput, setInput] = useState(false)
    function changeComp() {
        dispatch(changeStatus(todo))
    }
    
    const changeT = () => {
        setInput(!changeInput)
        dispatch(changeTodo(todo))
        dispatch(setValue(''))
    }
   
    return (
        <li className={styles.item} onTouchStart={changeComp}>
            <input type={'checkbox'} checked={todo.complited} value={todo.complited}  onChange={changeComp}/>
            {todo.id}

            {changeInput ? (
                <input 
                    type="text"
                    value={value}
                    onChange={(e)=>dispatch(setValue(e.target.value))} 
                    placeholder='changeTodo'
                />
            ): (
                <p className={todo.complited ? `${styles.todo__item_color}` : `${styles.todo__item}`}>{todo.text}</p>
            )}

            

            {todo.complited ? <span>✔</span> : null}

            <div className={styles.btns}>
                <button className={styles.delete} onClick={()=>dispatch(deleteTodo(todo.id))} >Удалить <span>❌</span></button>
                <button className={styles.change} onClick={changeT} >Изменить <span>👨‍🔧</span></button>
                
            </div>
            
        </li>
        
    )
    }

export default TodoItem;
