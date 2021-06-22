// imports from node_modules
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// imports from user created files
import { navbarReducer } from './navbarReducer';
import { inputReducer } from './inputReducer';
import { errorsReducer } from './errorsReducer';
import { messageReducer } from './messageReducer';
import { messagesReducer } from './messagesReducer';
import { alertReducer } from './alertReducer';

export const ConfigureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers({
      navbar: navbarReducer,
      input: inputReducer,
      errors: errorsReducer,
      message: messageReducer,
      messages: messagesReducer,
      alert: alertReducer
    }),
    composeEnhancers(applyMiddleware(thunk, logger))
  );

  return store;
}