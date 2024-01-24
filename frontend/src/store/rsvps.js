// This file will contain all the actions specific to the event's information and the event's Redux reducer.

import csrfFetch from './csrf';
import { RECEIVE_EVENT } from './events';
import { RECEIVE_EVENTS } from './events';

    //  ACTION TYPES
export const RECEIVE_RSVP = 'rsvps/RECEIVE_RSVP';

    // ACTIONS
const receiveRsvp = rsvp => ({
    type: RECEIVE_RSVP,
    rsvp
});

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
        case RECEIVE_EVENTS:
            return null;
        case RECEIVE_RSVP:
            const rsvpId = action.rsvp.id;
            return {...state, [rsvpId]: action.rsvp}
        default:
            return state;
    }
}

export default rsvpsReducer;