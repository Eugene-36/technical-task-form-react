import toogleModal from './reducers/toggleReducer';
import gatherUserInfo from './reducers/dataReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    modal: toogleModal,
    user: gatherUserInfo,
  },
});
