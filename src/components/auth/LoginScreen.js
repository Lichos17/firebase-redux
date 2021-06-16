import React from 'react';
import GoogleButton from 'react-google-button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';


export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { msgError, loading } = useSelector(state => state.ui);
  const [ formValues, handleInputChange ] = useForm({
    email: 'lichonsky@gmail.com',
    password: '12345' 
  });

  const { email, password } = formValues;

  const handleLogin = ( e ) => {
    e.preventDefault();
    if( isFormValid() ) {
      dispatch( startLoginEmailPassword( email,  password ) );
    }
  };

  const isFormValid = () => {
    if( !validator.isEmail(email) ){
      dispatch(setError('Email is not valid'));
      return false;
    } else if( password.length <= 5 ){
      dispatch(setError('Password should be at least 6 characters'));
      return false;
    }

    dispatch( removeError() );
    return true;
  };

  const handleGoogleLogin = ( ) => {
    dispatch(startGoogleLogin());
  }

  return (
    <div
      className='login__screen'
    >
      <div
        className="container center auth__card all-width"
      >
        <form
          className="auth__form d-flex"
          onSubmit={ handleLogin }
        >
          {
            msgError && (
                <div
                className="error m-1"
              >{msgError}</div>
            )
          }
          <h1
            className="m-2"
          >TodoApp</h1>
          <label htmlFor='user' className="modal__label">Email</label>
          <input 
            type='text'
            id="email"
            name='email'
            className="modal__input all-width"
            value={ email }
            onChange={ handleInputChange }
          />
          <label htmlFor='password' className="modal__label">Password</label>
          <input 
            type='password'
            id='password'
            name='password'
            className="modal__input all-width"
            value={ password }
            onChange={ handleInputChange }
          />
          <Link to="/auth/register" style={{textDecoration:"underline"}}>Not register yet?</Link>
          <button
            disabled={ loading }
            className="btn btn-primary all-width m-2"
          >Sign In</button>
          <GoogleButton
            onClick={handleGoogleLogin}
          />
        </form>
      </div>
    </div>
  )
}
