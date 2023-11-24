import csrfFetch from './csrf';

export const RECEIVE_USER = 'users/RECEIVE_USER';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const updateUser = rsvp => async (dispatch) => {
    const response = await csrfFetch()
}