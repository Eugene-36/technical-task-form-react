const defaultState = {
  modal: false,
};
const TOGGLE_MODAL = 'TOGGLE';

export const toogleModal = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };

    default:
      return state;
  }
};
export const toggleValueState = (payload) => ({ type: TOGGLE_MODAL, payload });
export const openModal = (payload) => ({ type: TOGGLE_MODAL, payload });
