// This file will contain all the actions specific to the event's information and the event's Redux reducer.

import csrfFetch from './csrf';
import { RECEIVE_RSVP } from './rsvps';
import { RECEIVE_USER } from './user';

//  ACTION TYPES
export const RECEIVE_EVENT = 'events/RECEIVE_EVENT';
export const RECEIVE_EVENTS = 'events/RECEIVE_EVENTS';
const REMOVE_EVENT = 'events/REMOVE_EVENT';

// ACTIONS
const receiveEvent = payload => ({
    type: RECEIVE_EVENT,
    // event
    payload
});

const receiveEvents = payload => ({
    type: RECEIVE_EVENTS,
    payload
});

const removeEvent = eventId => ({
    type: REMOVE_EVENT,
    eventId
});

//  EVENT SELECTORS
export const getEvent = eventId => state => {
    // console.log('state: ',state.events[eventId])
    return state?.events ? state.events[eventId] : null;
}

export const getEvents = state => {
    // console.log(state)
    // return state?.events ? Object.values(state.events) : [];
    return state?.events ?  state.events : [];

}

// const storeEvent = eventId => {
//     if (eventId) sessionStorage.setItem("eventId", JSON.stringify(eventId));
//     else sessionStorage.removeItem("eventId");
// }


// THUNK ACTIONS
export const fetchEvents = () => async (dispatch) => {
    // debugger
    const response = await csrfFetch('/api/events');
    // console.log(response)
    if (response.ok) {
        // console.log('hi')
        const events = await response.json();
        dispatch(receiveEvents(events));
        // storeEvents(events)
        return events;
    }
    return response;
};

export const fetchEvent = eventId => async (dispatch) => {
//    debugger
//    console.log(eventId)
    const response = await csrfFetch (`/api/events/${eventId}`);

    if (response.ok) {
        const event = await response.json();
        dispatch(receiveEvent(event));
        return event;
    }
};

export const createEvent = event => async (dispatch) => {
    const response = await csrfFetch('/api/events/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    });

    if (response.ok) {
        const event = await response.json();
        dispatch(receiveEvent(event))
        
        return event;
    }
};

export const updateEvent = event => async (dispatch) => {
    const response = await csrfFetch(`/api/events/${event.id}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    });
        
    if (response.ok) {
        const event = await response.json();
        dispatch(receiveEvent(event));
        return event;
    }
};

export const deleteEvent = eventId => async (dispatch) => {
    const response = await csrfFetch (`/api/events/${eventId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        // console.log('check')
        dispatch(removeEvent(eventId));
    }

    return response;
};

// REDUCER
const eventsReducer = (state = {}, action) => {
    const nextState = { ...state };
    switch (action.type) {
        case RECEIVE_EVENTS:
            return {...nextState, ...action.payload.events };
        case RECEIVE_EVENT:
            return { ...state, [action.payload.event.id]: action.payload.event };
        case RECEIVE_USER:
            return { ...action.payload.events}
        case REMOVE_EVENT:
            const newState = { ...state };
            delete newState[action.eventId];
            return newState;
        default:
            return state;
    }
}

export default eventsReducer;