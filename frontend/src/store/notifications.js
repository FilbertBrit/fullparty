import csrfFetch from './csrf';
import { RECEIVE_EVENTS, RECEIVE_EVENT } from './events';


// ACTION TYPES
export const RECEIVE_NOTIFICATIONS = 'invites/RECEIVE_NOTIFICATIONS';
export const RECEIVE_NOTIFICATION = 'invites/RECEIVE_NOTIFICATION';

// ACTIONS
const recieveNotifications = invites => ({
    type: RECEIVE_NOTIFICATIONS
});
const receiveNotification = invite => ({
    type: RECEIVE_NOTIFICATION
});


// THUNK ACTIONS
export const createNotification = notification => async (dispatch) => {
    // console.log(notification)
    // debugger
    const response = await csrfFetch(`/api/notifications`, {
        // const response = await csrfFetch(`/api/users/${notification.sender_id}/notifications`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(notification)
    });

    if (response.ok) {
        const notification = await response.json();
        // dispatch(receiveNotification(notification))
        return notification;
    }
};

// REDUCER
const notificationsReducer = (state = {}, action) => {
    const nextState = { ...state };
    switch (action.type) {
        case RECEIVE_EVENTS:
            return { ...action.payload.notifications};
        case RECEIVE_NOTIFICATION:
            // debugger
            //     return {...state, ...action.notification}
        case RECEIVE_NOTIFICATIONS:
            return {...state, [action.invite.id]: action.invite}
        default:
            return state;
    }
}

export default notificationsReducer;