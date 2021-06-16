import React from 'react'
import { useDispatch } from 'react-redux'
import { activeTodo, startDeleting } from '../../actions/todos';
import { openModal, editMode } from '../../actions/ui';

export const TodoItem = ({ id, description }) => {

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch( editMode() )
    dispatch( activeTodo( id, { description } ) )
    dispatch( openModal() )
  }

  const handleDelete = () => {
    dispatch( startDeleting( id ) )
  }

  return (
    <li
      className="flex-around all-width d-flex"
    >
      <h4
        className={  `todos__overflow todos__title todos__title` }
      >{ description }</h4>
      <ul
        className="d-flex todos__buttons"
      >
        <li><button onClick={ handleEdit } className="btn btn-primary"><i className="fas fa-edit"></i>  Edit</button></li>
        <li><button onClick={ handleDelete } className="btn btn-danger"><i className="fas fa-trash-alt"></i>  Delete</button></li>
      </ul>
    </li>
  )
}
