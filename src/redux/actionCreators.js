import * as actionTypes from './actionTypes';
import ReactDOM from 'react-dom';

// MESSAGES
export const fetchMessages = () => dispatch => {
  return fetch('http://www.local-basic-website-api.com/api/messages')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      }
    },
      error => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then(response => response.json())
    .then(response => dispatch(addMessages(response.data)))
    .catch(error => dispatch(messagesFailed(error.message)));
};

export const postMessage = (name, email, message, refs) => dispatch => {
  const newMessage = {
    name: name,
    email: email,
    message: message
  };

  return fetch('http://www.local-basic-website-api.com/api/messages/create', {
    method: 'POST',
    body: JSON.stringify(newMessage)
  })
    .then(response => response.json())
    .then(response => {
      if (response.success) {
        dispatch(clearErrors());
        dispatch(clearInput());
        dispatch(addAlert(response.message, 'success'));
      }
      else {
        dispatch(addErrors(response.errors));
        setFocus(response.errors, refs);
      }
    })
    .catch(error => {
      console.log('add message: ', error.message);
    });
};

export const messagesFailed = errMess => ({
  type: actionTypes.MESSAGES_FAILED,
  payload: errMess
});

export const messageFailed = errMess => ({
  type: actionTypes.MESSAGE_FAILED,
  payload: errMess
});

export const addMessages = messages => ({
  type: actionTypes.ADD_MESSAGES,
  payload: messages
});

export const addMessage = message => ({
  type: actionTypes.ADD_MESSAGE,
  payload: message
});

//ALERT
export const addAlert = (alert, status) => ({
  type: actionTypes.ADD_ALERT,
  payload: { message: alert, status: status }
});

export const clearAlert = () => ({
  type: actionTypes.CLEAR_ALERT
});

// TOGGLERS
export const toggleNavigation = () => {
  return {
    type: actionTypes.TOGGLE_NAVIGATION
  };
};

// INPUT
export const setInput = e => ({
  type: actionTypes.SET_INPUT,
  payload: e.target.value,
  key: e.target.name
});

export const clearInput = () => ({
  type: actionTypes.CLEAR_INPUT
});

// FORMS
export const addErrors = errors => ({
  type: actionTypes.ADD_ERRORS,
  payload: errors
});

export const clearErrors = () => ({
  type: actionTypes.CLEAR_ERRORS
});

export const setFocus = (errs, refs) => {
  const keys = Object.keys(errs);
  const el = keys.length > 0 ? refs[keys[0]] : null;

  if (el) {
    ReactDOM.findDOMNode(el).scrollIntoView();
    ReactDOM.findDOMNode(el).focus();
  }
};