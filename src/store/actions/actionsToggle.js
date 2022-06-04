import { createAction } from '@reduxjs/toolkit';

const TOGGLE_MODAL = 'TOGGLE';
export const toggleValueState = createAction(TOGGLE_MODAL);
export const openModal = createAction(TOGGLE_MODAL);
