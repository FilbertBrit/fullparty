import csrfFetch from './csrf';
import { SET_CURRENT_USER } from './session';

// export const RECEIVE_USER = 'users/RECEIVE_USER';

const receiveUser = user => ({
    type: SET_CURRENT_USER,
    user
});

export const updateUser = user => async (dispatch) => {
    // debugger
    const response = await csrfFetch(`/api/users/${user.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (response.ok) {
        const user = await response.json();
        dispatch(receiveUser(user));
        return user;
    }
};

const initialState = { 
    user: JSON.parse(sessionStorage.getItem("currentUser"))
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CURRENT_USER:
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;