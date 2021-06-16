import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';


export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.ui);

  const [ formValues, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if( isFormValid( )){
      dispatch(startRegisterWithEmailPasswordName( email, password, name ) )
    }
  };

  const isFormValid = () => {
    if( name.trim().length === 0 ){
      dispatch(setError('Name is required'));
      return false;
    } else if( !validator.isEmail(email) ){
      dispatch(setError('Email is not valid'));
      return false;
    } else if( password !== password2 || password.length <= 5 ){
      dispatch(setError('Password should be at least 6 characters and match each other'));
      return false;
    }

    dispatch( removeError() );
    return true;
  };

  return (
    <div
      className='login__screen'
    >
      <div
        className="container center auth__card all-width"
      >
        <form
          className="auth__form d-flex"
          onSubmit={ handleRegister }
        >
          {
            msgError && (
                <div
                className="error"
              >{msgError}</div>
            )
          }
          <h3
            className="m-2"
          >Register</h3>

          <label htmlFor='name' className="modal__label">Name</label>
          <input 
            id="name"
            name='name'
            className="modal__input all-width"
            value={name}
            onChange={handleInputChange}
          />
          <label htmlFor='email' className="modal__label">Email</label>
          <input 
            id="email"
            name='email'
            className="modal__input all-width"
            value={email}
            onChange={handleInputChange}
          />
          <label htmlFor='password' className="modal__label">Password</label>
          <input 
            type="password"
            id='password'
            name='password'
            className="modal__input all-width"
            value={password}
            onChange={handleInputChange}
          />
          <label htmlFor='password2' className="modal__label">Confirm Password</label>
          <input 
            type="password"
            id='password2'
            name='password2'
            className="modal__input all-width"
            value={password2}
            onChange={handleInputChange}
          />
          <Link to="/auth/login" style={{textDecoration:"underline"}}>Already Registered?</Link>
          <button
            className="btn btn-primary all-width m-2"
          >Register</button>
        </form>
      </div>
    </div>
  )
}
