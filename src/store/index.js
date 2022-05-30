import { createStore, combineReducers, applyMiddleware } from 'redux';
import { toogleModal } from './toggleReducer';
import { gatherUserInfo } from './dataReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// const middleware = getDefaultMiddleware({
//   immutableCheck: false,
//   serializableCheck: false,
//   thunk: true,
// });

const rootReducer = combineReducers({
  modal: toogleModal,
  user: gatherUserInfo,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
