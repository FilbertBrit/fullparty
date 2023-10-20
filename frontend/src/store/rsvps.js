// This file will contain all the actions specific to the event's information and the event's Redux reducer.

import csrfFetch from './csrf';
import { RECEIVE_EVENT } from './events';

    //  ACTION TYPES
export const RECEIVE_RSVP = 'rsvps/RECEIVE_RSVP';
const RECEIVE_RSVPS = 'rsvps/RECEIVE_RSVPS';

    // ACTIONS
const receiveRsvp = rsvp => ({
    type: RECEIVE_RSVP,
    rsvp
});

const receiveRsvps = rsvps => ({
    type: RECEIVE_RSVPS,
    rsvps
});

//  EVENT SELECTORS
// export const getRsvp = rsvpId => state => {
//     return state?.rsvps ? state.rsvps[rsvpId] : null;
// }

// export const getRsvps = state => {
//     return state?.rsvps ?  state.rsvps : [];
// }


    // THUNK ACTIONS
export const fetchRsvps = (eventId) => async (dispatch) => {
    const response = await csrfFetch(`/api/events/${eventId}/rsvps`);

    if (response.ok) {
        const rsvps = await response.json();
        dispatch(receiveRsvps(rsvps));
    }
    return response;
};

export const createRsvp = rsvp => async (dispatch) => {
    const response = await csrfFetch(`/api/events/${rsvp.eventId}/rsvps`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(rsvp)
    });

    if (response.ok) {
        const rsvp = await response.json();
        dispatch(receiveRsvp(rsvp))
        return rsvp;
    }
};
export const updateRsvp = rsvp => async (dispatch) => {
    const response = await csrfFetch(`/api/events/${rsvp.eventId}/rsvps/${rsvp.id}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(rsvp)
    });
        
    if (response.ok) {
        const rsvp = await response.json();
        dispatch(receiveRsvp(rsvp));
        return rsvp;
    }
};

// REDUCER
const rsvpsReducer = (state = {}, action) => {
    const nextState = { ...state };
    switch (action.type) {
        case RECEIVE_EVENT:
            return {...nextState, ...action.payload.rsvps};
        case RECEIVE_RSVP:
            // debugger
            return {...state, [action.rsvp.id]: action.rsvp};
        // case RECEIVE_RSVPS:
        //     return {...nextState, ...action.rsvps};
        default:
            return state;
    }
}

export default rsvpsReducer;