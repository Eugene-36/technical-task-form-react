import { createReducer } from '@reduxjs/toolkit';
import { openModal } from '../actions/actionsToggle';

const defaultState = {
  modal: false,
};

export default createReducer(defaultState, {
  [openModal.type]: ({ modal }, action) => {
    return { modal: !modal };
  },
});
