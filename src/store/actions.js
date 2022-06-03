import { createAction, createReducer } from '@reduxjs/toolkit';


const ADD_PERSONAL_INFO = 'ADD_PERSONAL_INFO';
const DELETE_PERSONAL_INFO = 'DELETE_PERSONAL_INFO';

export const addPrivatInfo = createAction(ADD_PERSONAL_INFO);
export const deletePrivatInfo = createAction(DELETE_PERSONAL_INFO);
