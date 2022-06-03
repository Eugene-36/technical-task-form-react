import { createReducer } from '@reduxjs/toolkit';
import { addPrivatInfo, deletePrivatInfo } from './actions';

const defaultState = {
  data: [],
};
const ADD_PERSONAL_INFO = 'ADD_PERSONAL_INFO';
const DELETE_PERSONAL_INFO = 'DELETE_PERSONAL_INFO';

export default createReducer(defaultState, {
  [addPrivatInfo.type]: ({ data }, action) => {
    data.push(action.payload);
  },
  [deletePrivatInfo.type]: ({ data }, action) => {
    const index = data.findIndex((item) => item.id === action.payload);
    data.splice(index, 1);
  },
});
//======================================Redux
// export const gatherUserInfo = (state = defaultState, action) => {
//   switch (action.type) {
//     case ADD_PERSONAL_INFO:
//       return { ...state, data: [...state.data, action.payload] };

//     case DELETE_PERSONAL_INFO:
//       return {
//         ...state,
//         data: state.data.filter(
//           (personalData) => personalData.id !== action.payload
//         ),
//       };

//     default:
//       return state;
//   }
// };

// export const addPrivatInfo = createAction(ADD_PERSONAL_INFO);
// export const addPrivatInfo = (payload) => ({
//   type: ADD_PERSONAL_INFO,
//   payload,
// });
// export const deletePrivatInfo = createAction(DELETE_PERSONAL_INFO);

// export const deletePrivatInfo = (payload) => ({
//   type: DELETE_PERSONAL_INFO,
//   payload,
// });
