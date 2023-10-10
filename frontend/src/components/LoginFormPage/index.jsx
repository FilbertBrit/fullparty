import React, { useState} from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import RegionMenu from "./RegionMenu"

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLengthTen, setIsLengthTen] = useState(false)

  if (sessionUser) return <Redirect to="/" />;

  let regionMenu = RegionMenu();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ phoneNumber, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  const onChange = (e) => {

    setPhoneNumber(e.target.value)
    e.target.value.toString().length === 10 ? setIsLengthTen(true) : setIsLengthTen(false);
    // console.log(e.target.value, isLengthTen)

  }

  const handleClick = () => {
    console.log('hello')
  }

  return (
    <>
      <div className='layout'>

        <h3 id='login-title'>Sign in or sign up</h3>
        <form onSubmit={handleSubmit} className='loginForm'>

          <span>
            <div id='phone-div'>
              <span id='region-menu'>
                {regionMenu}
              </span>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => onChange(e)}
                name='phoneNumber'
                placeholder='XXXXXXXXXX'
                required
              />
              <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
              </ul>
            </div>
          </span>
          <br />
          <div id='submit-buttons'>
            { isLengthTen ? (
              <>
              <div id='password-container'>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    name='password'
                    placeholder='Password'
                  />
                <br />
                <div id='login-button-div'>
                  <button type="submit" id='login-button'>Login</button> 
                </div>
              </div>
              </>
            ) : (
              <></>
            )}
            
            {/* // <button id='login-button'>Login</button>  */}
          </div>
        </form>

      </div>
    </>
  );
}



export default LoginFormPage;