
import csrfFetch from './csrf';
import { RECEIVE_EVENT } from './events';

// ACTION TYPES
const RECEIVE_COMMENT = 'comments/RECEIVE_COMMENT';
const RECEIVE_COMMENTS = 'comments/RECEIVE_COMMENTS';
const REMOVE_COMMENT = 'comments/REMOVE_COMMENT';

// ACTIONS
// debugger
const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})
const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})
const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

// COMMENT SELECTORS
// export const getEvent = eventId => state => {
//     // console.log('state: ',state.events[eventId])
//     return state?.events ? state.events[eventId] : null;
// }

// export const getEvents = state => {
//     // console.log(state)
//     // return state?.events ? Object.values(state.events) : [];
//     return state?.events ?  state.events : [];

// }

// const storeEvent = eventId => {
//     if (eventId) sessionStorage.setItem("eventId", JSON.stringify(eventId));
//     else sessionStorage.removeItem("eventId");
// }

// THUNK ACTIONS
export const fetchComments = (eventId) => async (dispatch) => {
    // debugger
    const res = await csrfFetch(`/api/events/${eventId}/comments`);
    // console.log(res);

    if(res.ok){
        const comments = await res.json();
        dispatch(receiveComments(comments));
        return comments
    }
    else{
        return [];
    }

};

export const createComment = comment => async (dispatch) => {
    // debugger
    const response = await csrfFetch(`/api/events/${comment.eventId}/comments`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(receiveComment(comment))
        
        return comment;
    }
};
export const updateComment = comment => async (dispatch) => {
    const response = await csrfFetch(`/api/events/${comment.id}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    });
        
    if (response.ok) {
        const comment = await response.json();
        dispatch(receiveComment(comment));
        return comment;
    }
};
export const deleteComment = commentId => async (dispatch) => {
    const response = await csrfFetch (`/api/events/${commentId}`, {
        method: 'DELETE'
    });

    // if (response.ok) {
    //     // console.log('check')
    //     dispatch(removeEvent(eventId));
    // }

    return response;
};

const commentsReducer = (state = {}, action) => {
    // debugger
    const nextState = { ...state};
    switch (action.type) {
        case RECEIVE_EVENT:
            return {...nextState, ...action.payload.comments};
        case RECEIVE_COMMENT:
            return {...state, [action.comment.id]: action.comment}
        case RECEIVE_COMMENTS:
            return {...nextState, ...action.comments}
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;