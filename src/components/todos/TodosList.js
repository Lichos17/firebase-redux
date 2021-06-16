import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';

export const TodosList = () => {

  const { todos } = useSelector(state => state.todos);

  return (
    <ul
      className="todos__item"
    >
      {
        todos.map( item => (
          <TodoItem 
            key={item.id}
            {
              ...item
            }
          />
        ))
      }
    </ul>
  )
}
