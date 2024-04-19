import csrfFetch from './csrf';

// ACTION TYPES
export const RECEIVE_NOTIFICATIONS = 'invites/RECEIVE_NOTIFICATIONS';
export const RECEIVE_NOTIFICATION = 'invites/RECEIVE_NOTIFICATION';


// ACTIONS
const recieveNotifications = notifications => ({
    type: RECEIVE_NOTIFICATIONS,
    notifications
});
const receiveNotification = notification => ({
    type: RECEIVE_NOTIFICATION,
    notification
});


// THUNK ACTIONS
export const fetchNotifications = () => async (dispatch) => {
    // debugger
    const response  = await csrfFetch('/api/notifications');
    if(response.ok){
        const notifications = await response.json();
        dispatch(recieveNotifications(notifications));
        return notifications;
    }
    return response;
}
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
        case RECEIVE_NOTIFICATIONS:
            return {...state, ...action.notifications}
        default:
            return state;
    }
}

export default notificationsReducer;