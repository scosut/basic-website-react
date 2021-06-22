import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  errMess: '',
  messages: []
};

export const messagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGES:
      return { ...state, errMess: '', messages: action.payload };

    case actionTypes.MESSAGES_FAILED:
      return { ...state, errMess: action.payload, messages: [] };

    default:
      return state;
  }
};