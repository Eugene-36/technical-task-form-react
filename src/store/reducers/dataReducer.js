import { createReducer } from '@reduxjs/toolkit';
import { InfoleActionCreators } from '../actions/actions';

const defaultState = {
  data: [],
};

export default createReducer(defaultState, {
  [InfoleActionCreators.addPrivatInfo.type]: ({ data }, action) => {
    data.push(action.payload);
  },
  [InfoleActionCreators.deletePrivatInfo.type]: ({ data }, action) => {
    const index = data.findIndex((item) => item.id === action.payload);
    data.splice(index, 1);
  },
});
