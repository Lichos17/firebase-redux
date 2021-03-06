import React from 'react'
import { AppRouter } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const TodoApp = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
}
