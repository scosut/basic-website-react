// import everything from action types
import * as actionTypes from './actionTypes';

// set up your initial state so you have a starting point
const INITIAL_STATE = {
  name: '',
  email: '',
  message: ''
};

export const inputReducer = (state = INITIAL_STATE, action) => {
  let obj;

  switch (action.type) {
    case actionTypes.SET_INPUT:
      obj = { ...state };
      obj[action.key] = action.payload;
      return obj;

    case actionTypes.CLEAR_INPUT:
      obj = { ...state };
      Object.keys(obj).forEach(key => {
        obj[key] = '';
      });
      return obj;

    default:
      return state;
  }
};