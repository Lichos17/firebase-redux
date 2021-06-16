import { types } from "../types/types"

export const setError = ( err ) => ({
  type: types.uiSetError,
  payload: err
});

export const removeError =  ( ) => ({
  type: types.uiRemoveError
});

export const startLoading = () => ({
  type: types.uiStartLoading
})
export const finishLoading = () => ({
  type: types.uiFinishLoading
})

export const openModal = () => ({
  type: types.setOpenModal
})
export const closeModal = () => ({
  type: types.setCloseModal
})

export const editMode = () => ({
  type: types.setEditMote
})

export const removeEditMode = () => ({
  type: types.removeEditMode
})