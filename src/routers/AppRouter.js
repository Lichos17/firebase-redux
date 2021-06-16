import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import { firebase } from '../firebase/firebase-config';

import { Greetings } from '../components/common/Greetings';
import { Dashboard } from '../components/todos/Dashboard';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingTodos } from '../actions/todos';
import { Loading } from '../components/common/Loading';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged( (user) => {
      if( user?.uid ){
        dispatch( login( user.uid, user.displayName ) );
        setIsLoggedIn( true );

        dispatch( startLoadingTodos( user.uid ) )

      } else{
        setIsLoggedIn( false );
      }
      setChecking( false );
    } )

  }, [ dispatch, setChecking, setIsLoggedIn ])


  if( checking ){
    return (
      <Loading />
    )
  }


  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute 
            isAuthenticated={ isLoggedIn }
            path="/auth" 
            component={ AuthRouter }
          />
          <PrivateRoute 
            isAuthenticated={ isLoggedIn }
            exact
            path="/"
            component={ Greetings }
          />
          <PrivateRoute
            isAuthenticated={ isLoggedIn } 
            exact
            path="/dashboard" 
            component={ Dashboard }
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  )
}
