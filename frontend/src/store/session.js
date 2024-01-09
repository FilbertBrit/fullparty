// This file will contain all the actions specific to the session user's information and the session user's Redux reducer.

import csrfFetch from './csrf';
import { RECEIVE_EVENTS } from './events';

export const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';
export const UPDATE_CURRENT_USER = 'session/updateCurrentUser';

const setCurrentUser = (user) => {
//  console.log(user)
  return {
    type: SET_CURRENT_USER,
    user
  };
};

const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  };
};

const updateCurrentUser = (user) => {
  return {
    type: UPDATE_CURRENT_USER,
    payload: user
  }
}

const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}
  
const storeCurrentUser = user => {
  debugger
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
}

//thunk actions
export const login = (user) => async (dispatch) => {
  const { phoneNumber, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      phoneNumber,
      password
    })
  });
  const data = await response.json();
  // console.log(data)
  storeCurrentUser(data)
  dispatch(setCurrentUser(data));

  return response;
};

export const signup = (user) => async (dispatch) => {
    
  const { phoneNumber, name, password } = user;
  const response = await csrfFetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        phoneNumber,
        name,
        password
      })
  });
  const data = await response.json();
  storeCurrentUser(data.user)
  dispatch(setCurrentUser(data.user));
  return response;
}

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE'
  });
  storeCurrentUser(null);
  dispatch(removeCurrentUser());
  return response;
}

// export const restoreSession = () => async (dispatch) => {
//     const response = await csrfFetch("/api/session");
//     storeCSRFToken(response)
//     const data = await response.json();
//     storeCurrentUser(data.user);
//     dispatch(setCurrentUser(data.user));
//     return response;
// }

export const restoreSession = () => async (dispatch) => {
  // debugger
  const response = await csrfFetch('/api/session')
  storeCSRFToken(response)
  const data = await response.json()
  storeCurrentUser(data.user)
  dispatch(setCurrentUser(data))
  return response;
}

const initialState = { 
    user: JSON.parse(sessionStorage.getItem("currentUser"))
};

const sessionReducer = (state = initialState, action) => {
  // const nextState = { ...state };
  // console.log(action.payload)
  switch (action.type) {
    case RECEIVE_EVENTS:
      return { ...state, user: {...state.user, ...action.payload.user}};
    case REMOVE_CURRENT_USER:
      return { ...state, user: null };
    case SET_CURRENT_USER:
      return { ...state, user: action.user};
    case UPDATE_CURRENT_USER:
      return {...state, user: action.payload.user}
    default:
      return state;
  }
};

export default sessionReducer;
