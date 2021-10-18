import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { useEffect } from 'react/cjs/react.development'
import { TodoList } from './TodoList'
import './styles.css'
import { TodoAdd } from './TodoAdd'

// const initialState = [
//   {
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
//   }
// ]

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {

  // reducer -> funcion donde tendremos nuestro reducer
  // initialState -> estado inicial
  // init -> funcion para inicializar el state
  // useReducer(reducer, initialState, init)
  // dispatch -> es una funcion que le mandamos una accion y ya va a saber a que reducer hay que mandarle la accion
  const [state, dispatch] = useReducer(todoReducer ,[], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  },[state])

  const handleDelete = (todoId) => {

    let action = {
      type: 'delete',
      payload: todoId
    }

    dispatch( action )

  }

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }

  const handleToggle = ( todoId ) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

  return (
    <>
      <h1>TodoApp ({state.length})</h1>
      <hr />

      <div style={{display:'flex', alignItems:'center', justifyContent:'space-around', width: '100%'}}>
        <div style={{width: '50%'}}>
          <TodoList
            state={state}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div style={{width: '50%'}}>
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </>
  )
}

export default TodoApp