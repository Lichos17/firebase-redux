import React from 'react'
import { useDispatch } from 'react-redux'
import { startAddTodo } from '../../actions/todos';
import { openModal, removeEditMode } from '../../actions/ui';
import { TodosList } from './TodosList'


export const TodoContainer = () => {

  const dispatch = useDispatch();

  const handleOpenForm = () => {
    dispatch( removeEditMode() )
    dispatch( openModal() )
    dispatch( startAddTodo( ) );

  }

  return (
    <div
      className="container center todos__card"
    >
      <h1
        className="m-1"
      >Todos</h1>
      <button 
        onClick={ handleOpenForm }
        className="btn btn-large btn-purple m-1"
      >+</button>
      <TodosList />
    </div>
  )
}
