import csrfFetch from './csrf';
import { UPDATE_CURRENT_USER } from './session';
import { RECEIVE_EVENTS } from './events';

export const RECEIVE_USER = 'users/RECEIVE_USER';
export const RECEIVE_USERS = 'users/RECEIVE_USERS';

const recieveUpdateUser = user => ({
    type: UPDATE_CURRENT_USER,
    payload: user
});
const receiveUser = user => ({
    type: RECEIVE_USER,
    payload: user
})

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    payload: users
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
        dispatch(recieveUpdateUser(user));
        return user;
    }
};

export const fetchUser = userId => async (dispatch) => {
    console.log(userId)
    const response = await csrfFetch(`/api/users/${userId}`);

    if(response.ok){
        const user = await response.json();
        dispatch(receiveUser(user))
        console.log(user)
        return user;
    }
    return response;
}

export const fetchUsers = () => async (dispatch) => {
    const response = await csrfFetch('/api/users');
    debugger
    if(response.ok){
        const users = await response.json();
        dispatch(receiveUsers(users));
        // return users;
    }
    return response;
}

// const initialState = { 
//     user: JSON.parse(sessionStorage.getItem("currentUser"))
// };

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_EVENTS:
            return { ...action.payload.users};
        case RECEIVE_USER:
            return { ...action.payload.users}
        case RECEIVE_USERS:
            return { ...state, ...action.payload.users};
        case UPDATE_CURRENT_USER:
            return { ...state, ...action.payload };
        default:
            return state;
    }
  };
  
  export default userReducer;