import { createStore, combineReducers, applyMiddleware } from 'redux';
import { toogleModal } from './toggleReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const rootReducer = combineReducers({
  modal: toogleModal,
});

export const store = configureStore(
  { reducer: rootReducer },
  middleware,

  composeWithDevTools(applyMiddleware(thunk))
);
