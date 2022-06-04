import { createAction } from '@reduxjs/toolkit';

const ADD_PERSONAL_INFO = 'ADD_PERSONAL_INFO';
const DELETE_PERSONAL_INFO = 'DELETE_PERSONAL_INFO';

export const InfoleActionCreators = {
  addPrivatInfo: createAction(ADD_PERSONAL_INFO),
  deletePrivatInfo: createAction(DELETE_PERSONAL_INFO),
};
