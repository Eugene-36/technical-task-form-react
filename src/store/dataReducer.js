const defaultState = {
  data: [],
};
const ADD_PERSONAL_INFO = 'ADD_PERSONAL_INFO';
const DELETE_PERSONAL_INFO = 'DELETE_PERSONAL_INFO';

export const gatherUserInfo = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PERSONAL_INFO:
      return { ...state, data: [...state.data, action.payload] };

    case DELETE_PERSONAL_INFO:
      return {
        ...state,
        data: state.data.filter(
          (personalData) => personalData.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
export const addPrivatInfo = (payload) => ({
  type: ADD_PERSONAL_INFO,
  payload,
});

export const deletePrivatInfo = (payload) => ({
  type: DELETE_PERSONAL_INFO,
  payload,
});