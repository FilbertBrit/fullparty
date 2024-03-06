import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import session from './session';
import events from './events';
import rsvps from './rsvps'
import comments from './comments'
import users from './user'
import modal from './modal'
import invites from './invites'
import notifications from './notifications'

 const rootReducer = combineReducers({
    session,
    events,
    rsvps,
    comments,
    users, 
    modal,
    notifications,
    invites
});
export const store = createStore(rootReducer);

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
  } else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
  }

  const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

  export default configureStore;