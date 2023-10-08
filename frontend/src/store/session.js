// This file will contain all the actions specific to the session user's information and the session user's Redux reducer.

import csrfFetch from './csrf';

const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  };
};

const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}
  
const storeCurrentUser = user => {
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
  storeCurrentUser(data.user)
  dispatch(setCurrentUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
    
  const { phoneNumber, username, password } = user;
  const response = await csrfFetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        phoneNumber,
        username,
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

export const restoreSession = () => async (dispatch) => {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response)
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
}

const initialState = { 
    user: JSON.parse(sessionStorage.getItem("currentUser"))
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user: action.payload };
    case REMOVE_CURRENT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;
