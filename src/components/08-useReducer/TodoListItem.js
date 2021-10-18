import React from 'react'
import './styles.css'

export const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
  return (
    <>
      <li key={todo.id} className='list'>
        <p className={todo?.done && 'complete'} onClick={() => handleToggle(todo.id)}> { index + 1 }. { todo.desc } </p>
        <button onClick={() => handleDelete(todo.id)}>
          Borrar
        </button>
      </li>
    </>
  )
}