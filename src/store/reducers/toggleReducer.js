import { createReducer } from '@reduxjs/toolkit';
import { ToggleActionCreators } from '../actions/actionsToggle';

const defaultState = {
  modal: false,
};

export default createReducer(defaultState, {
  [ToggleActionCreators.openModal.type]: ({ modal }, action) => {
    return { modal: !modal };
  },
});
