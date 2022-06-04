import { createReducer } from '@reduxjs/toolkit';
import { addPrivatInfo, deletePrivatInfo } from '../actions/actions';

const defaultState = {
  data: [],
};

export default createReducer(defaultState, {
  [addPrivatInfo.type]: ({ data }, action) => {
    data.push(action.payload);
  },
  [deletePrivatInfo.type]: ({ data }, action) => {
    const index = data.findIndex((item) => item.id === action.payload);
    data.splice(index, 1);
  },
});
