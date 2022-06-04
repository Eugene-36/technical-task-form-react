import { createAction } from '@reduxjs/toolkit';

const TOGGLE_MODAL = 'TOGGLE';

export const ToggleActionCreators = {
  toggleValueState: createAction(TOGGLE_MODAL),
  openModal: createAction(TOGGLE_MODAL),
};
