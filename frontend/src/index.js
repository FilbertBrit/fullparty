import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/session';


//development purposes
const store = configureStore();
if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className='app' >
        <App />
      </div>
      </BrowserRouter>
    </Provider>
  );
}

const renderApplication = () => {
  ReactDOM.render(
    // <React.StrictMode>
      <Root  className="root"/>,
    // {/* </React.StrictMode>, */}
    document.getElementById('root')
  );
}

if (sessionStorage.getItem("currentUser") === null || sessionStorage.getItem("X-CSRF-Token") === null) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}
