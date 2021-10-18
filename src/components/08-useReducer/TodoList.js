import React from 'react'
import { TodoListItem } from './TodoListItem'
import './styles.css'

export const TodoList = ({ state, handleDelete, handleToggle }) => {
  return (
    <>
      <ul>
        {
          state.map((todo, index) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              index={index}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          ))
        }
      </ul>
    </>
  )
}