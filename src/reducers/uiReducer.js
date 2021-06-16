import { types } from "../types/types";

const initialState = {
  loading: false,
  msgError: null,
  modal: {
    open: false,
    editMode: true
  }
}

export const uiReducer = ( state = initialState, action) => {

  switch ( action.type ) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload
      }

    case types.uiRemoveError:
      return {
        ...state,
        msgError: null
      }
  
    case types.uiStartLoading:
      return {
        ...state,
        loading: true
      }
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false
      }

    case types.setOpenModal:
      return {
        ...state,
        modal: {
          ...state.modal,
          open: true
        }
      }
    case types.setCloseModal:
      return {
        ...state,
        modal: {
          ...state.modal,
          open: false
        }
      }

    case types.setEditMote:
      return {
        ...state,
        modal: {
          ...state.modal,
          editMode: true
        }
      }


      case types.removeEditMode:
        return {
          ...state,
          modal: {
            ...state.modal,
            editMode: false
          }
        }

    default:
      return state;
  }
  
}