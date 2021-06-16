import { types } from "../types/types";



const initialState = {
  todos: [],
  active: null
}


export const todosReducer = ( state = initialState, action ) => {

  switch ( action.type ) {      
  
    case types.todosActive:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }

    case types.todosAddNew:
      return {
        ...state,
        todos: [ ...state.todos, action.payload]
      }
  
    case types.todosRemoveActive:
    return {
        ...state,
        active: null
      }

    case types.todosLoad:
      return {
        ...state,
        todos: [
          ...action.payload
        ]
      }

    case types.todosUpdated:
      return {
        ...state,
        todos: state.todos.map( 
          todo => todo.id === action.payload.id 
            ? action.payload.todo
            : todo
         )
      }

    case types.todosDelete:
      return {
        ...state,
        active: null,
        todos: state.todos.filter( todo => todo.id !== action.payload )
      }

    case types.todosLogoutCleaning:
      return {
        ...state,
        active: null,
        todos: []
      }

    default:
      return state;
  }

}