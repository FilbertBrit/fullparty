import csrfFetch from './csrf';

// ACTION TYPES
export const RECEIVE_INVITES = 'invites/RECEIVE_INVITES';
export const RECEIVE_INVITE = 'invites/RECEIVE_INVITE';
const REMOVE_INVITE = 'events/REMOVE_EVENT';

// ACTIONS
const receiveInvites = invites => ({
    type: RECEIVE_INVITES
});
const receiveInvite = invite => ({
    type: RECEIVE_INVITE
});
const removeInvite = inviteId => ({
    type: REMOVE_INVITE,
    inviteId
});

// THUNK ACTIONS
// export const fetchInvites = () => async (dispatch) => {
//     // debugger
//     const response = await csrfFetch('/api/events');
//     if (response.ok) {
//         const events = await response.json();
//         dispatch(receiveEvents(events));
//         // storeEvents(events)
//         return events;
//     }
//     return response;
// };
export const createInvite = invite => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${invite.userId}/invites`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(invite)
    });

    if (response.ok) {
        const invite = await response.json();
        dispatch(receiveInvite(invite))
        return invite;
    }
};
export const deleteEvent = inviteId => async (dispatch) => {
    const response = await csrfFetch (`/api/users/${inviteId}/invites`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removeInvite(inviteId));
    }

    return response;
};

// REDUCER
const invitesReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_INVITES:
            return {...state, ...action.invites}
        case RECEIVE_INVITE:
            return {...state, [action.invite.id]: action.invite}
        case REMOVE_INVITE:
            const newState = { ...state };
            delete newState[action.inviteId];
            return newState;
        default:
            return state;
    }
}

export default invitesReducer;