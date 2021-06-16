import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeTodo, removeActiveTodo, startSaveTodo } from '../../actions/todos';
import { closeModal } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const ContentForm = () => {

  const dispatch = useDispatch();

  const { active } = useSelector(state => state.todos);
  const { modal } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm( { 
    description: active ? active.description : ''
   });
   
  const { description } = formValues;

  const id = active?.id;


   useEffect(() => {
     
    if( id ){
      dispatch( activeTodo( id, { ...formValues } ) )
    }

   }, [formValues, id, dispatch]);

   const handleSubmit = (e) => {
    e.preventDefault();
    dispatch( closeModal() );
    dispatch( startSaveTodo( active ) );
    dispatch( removeActiveTodo() );
   }


  return (
    <form
      className="modal__form d-flex all-width"
      onSubmit={ handleSubmit }
    >
      {( modal.editMode )
        ? ( <h4>Edit Todo</h4> )
        : ( <h4>Add Todo</h4> )
      }
      <input 
        autoComplete="off"
        name='description'
        value={description}
        onChange={handleInputChange}
        className="modal__input all-width min-width"
      />

      {( modal.editMode )
        ? 
        ( 
          <button
            className="btn btn-primary"
          >
            Edit
          </button> 
        )
        :
        ( 
          <button
            className="btn btn-primary"
          >
            Add
          </button> 
        )
      }

    </form>
  )
}
