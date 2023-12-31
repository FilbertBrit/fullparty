import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupFrom.css'
import Navigation from '../Navigation';
import RegionMenu from '../LoginFormPage/RegionMenu';
import { AiOutlineInstagram } from "react-icons/ai"

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLengthTen, setIsLengthTen] = useState(false)
    const [errors, setErrors] = useState([]);
    const [redirectLogin, setRedirectLogin] = useState(false);
    const regionMenu = RegionMenu();
  
    if (sessionUser) return <Redirect to="/events" />;
    if (redirectLogin) return <Redirect to="/login"/>;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(/^\d+$/.test(phoneNumber)){ //
        if (password === confirmPassword) {
          setErrors([]);
          return dispatch(sessionActions.signup({ phoneNumber, name, password }))
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
        else{

          return setErrors(['Confirm Password field must be the same as the Password field']);
        }
      }
      else{
        return setErrors(['Invalid Phone Number']);
      }
    };

    const onChange = (e) => {
      setPhoneNumber(e.target.value)
      e.target.value.toString().length === 10 ? setIsLengthTen(true) : setIsLengthTen(false);
    }
    const handleSignupClick = (e) => {
      e.preventDefault()
      setRedirectLogin(true)
    }
  
    return (
      <div id='layout-outer'>
        <Navigation/>
        <div className="layout">
          
          <div id='signup-title-container'>
            <div id='login-title'>
              <h3 id='sign-in-click' onClick={handleSignupClick}> Sign in </h3>
            </div>
            <div id='login-title'>
              <h3 id='login-title-sign-up'> {" or sign up"} </h3>
            </div>
          </div>

          <ul className='errors-signup'>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>

          <form onSubmit={handleSubmit}>
            <div className="name-container">
              <input
                id='name-input'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder='NAME'
              />
            </div>
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
            <div className="password-container">
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
                  <h4>CONFIRM PASSWORD</h4>
                  <input
                    id='confirm-input'
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    name='password'
                    placeholder='XXXXXXXX'
                  />
                </div>
                <br />
                <div id='login-button-div'>
                  <button type="submit" id='login-button'>Submit</button> 
                </div>
              </div>
              </>
            ) : (
              <></>
            )}
            </div>
          </form>
        </div>
      <div id='footer'>© 2023 FullParty™ | Terms & Privacy | Careers | Questions? DM us <AiOutlineInstagram/></div>
      </div>
    );
  }
  
  export default SignupFormPage;