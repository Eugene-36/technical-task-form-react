const defaultState = {
  data: [],
};
const ADD_PERSONAL_INFO = 'ADD_PERSONAL_INFO';

export const gatherUserInfo = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PERSONAL_INFO:
      return { ...state, data: [...state.data, action.payload] };

    default:
      return state;
  }
};
export const addPrivatInfo = (payload) => ({
  type: ADD_PERSONAL_INFO,
  payload,
});
