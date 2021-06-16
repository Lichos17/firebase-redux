import { db } from "../firebase/firebase-config"



export const loadTodos = async( uid ) => {

  const todosSnap =  await db.collection( `${ uid }/todos/content` ).get()
  const todos = [];

  todosSnap.forEach( snapHijo => {
    todos.push({
      id: snapHijo.id,
      ...snapHijo.data()
    })
  } );


  return todos;
}