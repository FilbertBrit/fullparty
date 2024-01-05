
import csrfFetch from './csrf';
import { RECEIVE_EVENT } from './events';
import { RECEIVE_EVENTS } from './events';

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
const removeComment = payload => ({
    type: REMOVE_COMMENT,
    payload
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
// export const updateComment = comment => async (dispatch) => {
//     const response = await csrfFetch(`/api/events/${comment.id}`, {
//         method: 'PATCH',
//         headers: {
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(comment)
//     });
        
//     if (response.ok) {
//         const comment = await response.json();
//         dispatch(receiveComment(comment));
//         return comment;
//     }
// };
export const deleteComment = payload => async (dispatch) => {
    // debugger
    // console.log(payload)
    const response = await csrfFetch (`/api/events/${payload.eventId}/comments/${payload.commentId}`, {
        method: 'DELETE'
    });

    console.log(response)
    if (response.ok) {
        console.log('check')
        dispatch(removeComment(payload.commentId));
    }else{
        return response;
    }

    // return response;
};

const commentsReducer = (state = {}, action) => {
    const nextState = { ...state };
    switch (action.type) {
        case RECEIVE_EVENT:
            return {...nextState, ...action.payload.comments};
        case RECEIVE_EVENTS:
            return null;
        case RECEIVE_COMMENT:
            return {...state, [action.comment.id]: action.comment}
        case RECEIVE_COMMENTS:
            return {...nextState, ...action.comments}
        case REMOVE_COMMENT:
            const commentId = action.payload;
            delete nextState[commentId];
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;