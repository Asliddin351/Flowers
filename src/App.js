import React from 'react'
import Todo from './components/todos'

function App () { 
    return (
        <Todo/>
    )
}

export default App;










































// import React from 'react'
// import { useDispatch, useSelector} from 'react-redux'
// // import {addUserAction, deleteUserAction} from "./store/userReducer";
// // import {fetchUsers} from "./asyncActions/users";


// import { addTodo, deleteTodo, increment, decrement } from './ReduxTookid/toolkidSlice'


// function App() {

//     const dispatch = useDispatch()

//     const count = useSelector(state => state.toolkid.count)
//     const todos = useSelector(state => state.toolkid.todos)

//     // const users = useSelector(state => state.users.users)
    
  

//     // const addUser = (name) => {
//     //     const user = {
//     //         name,
//     //         id: Math.random()
//     //     } 
//     //     dispatch(addUserAction(user))
//     // }
    
//     // const deleteUser = (user) => {
//     //     dispatch(deleteUserAction(user.id))
//     // }

//     return (
//         <div className='app'>

//             <h1>{count}</h1>
//             <button onClick={()=>dispatch(increment())}>+</button>
//             <button onClick={()=>dispatch(decrement())}>-</button>
//             <button onClick={()=>dispatch(addTodo(prompt()))}>Добавить</button> 
//             <button onClick={()=>dispatch(deleteTodo())}>Удалить</button> 

//             {/* <button onClick={()=> dispatch(fetchUsers())}>Получить клиентов из базы</button> */} 


//             {/* {users.length > 0 ? 
//                 <div>
//                     {users.map(user => <div onClick={() => deleteUser(user)}>{user.name}</div> )}
//                 </div> 
//                 : 
//                 <p>Нет пользователя</p>
//             } */}

//             {todos.map((todo, index)=>{
//                 return <li key={index}>{todo}</li>
//             })}
            
//         </div>
//     )
// }

// export default App;
