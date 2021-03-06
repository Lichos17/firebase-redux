import { db } from "../firebase/firebase-config";
import { loadTodos } from "../helpers/loadTodos";
import { types } from "../types/types";



export const startAddTodo = (  ) => {

  return async( dispatch, getState ) => {
    const uid = getState().auth.uid;

    const newTodo = {
      description: 'My New Todo'
    }
    const doc = await db.collection(`${uid}/todos/content`).add( newTodo );

    dispatch( activeTodo( doc.id, newTodo ) );
    dispatch( addNewTodo( doc.id, newTodo ) )
  }
}

export const activeTodo = ( id, todo ) => ({
  type: types.todosActive,
  payload: {
    id,
    ...todo
  }
});

export const addNewTodo = ( id, todo ) => ({
  type: types.todosAddNew,
  payload: {
    id,
    ...todo
  }
})

export const removeActiveTodo = () => ({
  type: types.todosRemoveActive
}
)

export const startLoadingTodos = ( uid ) => {
  return async( dispatch ) => {
    const todos =  await loadTodos( uid );
    dispatch( setTodos( todos ) )
  }
}


export const setTodos = ( todos ) => ({
  type: types.todosLoad,
  payload: todos
});

export const startSaveTodo = ( todo ) => {

  return async( dispatch, getState ) => {

    const { uid } = getState().auth;

    const todoToFirestore = { ...todo };

    delete todoToFirestore.id;

    await db.doc(`${ uid }/todos/content/${ todo.id }`).update( todoToFirestore );

    dispatch( refreshTodos( todo.id, todoToFirestore ) ) ;
  }
}

export const refreshTodos = ( id, todo ) => ({
  type: types.todosUpdated,
  payload: {
    id,
    todo: {
      id,
      ...todo
    }
  }
})

export const startDeleting = ( id ) => {
  return async( dispatch, getState ) => {
    const uid = getState().auth.uid;
    await db.doc( `${ uid }/todos/content/${id}` ).delete();

    dispatch( deleteTodo(id) )

  }
}

export const deleteTodo = ( id ) => ({
  type: types.todosDelete,
  payload: id
});

export const todoLogout = () => ({
  type: types.todosLogoutCleaning
});