import React, { useState, useEffect} from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import RegionMenu from "./RegionMenu"
import { AiOutlineInstagram } from "react-icons/ai"

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLengthTen, setIsLengthTen] = useState(false)
  let regionMenu = RegionMenu();

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("phone",phoneNumber);
    console.log("pass", password);
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
  }

  //for handling demo user login button
  const handleClick = (e) => {

    setPhoneNumber("0123456789");
    setPassword("password");

    if(password === "password") return dispatch(sessionActions.login({ phoneNumber, password }))
    
  }

  return (
    <>
      <div className='layout'>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>

        <h3 id='login-title'>Sign in or sign up</h3>
        <form onSubmit={handleSubmit} className='loginForm'>

          <div id='phone-container'>
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
            </div>
          </div>
          <br />
          <div id='submit-buttons'>
            { isLengthTen ? (
              <>
              <div >
                <div id='password-container'>
                  <h4>PASSWORD</h4>
                  <input
                      id='password-input'
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      name='password'
                      placeholder='XXXXXXXX'
                      
                    />
                </div>
                <br />
                <div id='login-button-div'>
                  <button type="submit" id='login-button'>Login</button> 
                </div>
              </div>
              </>
            ) : (
              <>
              <div id='space-div'>
                <button id='demo-user' onClick={handleClick}>Demo User</button>
              </div>
              </>
            )}
          </div>
        </form>
        <footer className='footer'>
          <div>© 2023 FullParty™ | Terms & Privacy | Careers |</div>
          <div> Questions? DM us 
            <AiOutlineInstagram/>
          </div>
        </footer>

      </div>
    </>
  );
}



export default LoginFormPage;