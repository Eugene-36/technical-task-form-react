import { ToggleActionCreators } from './actionsToggle';
import { InfoleActionCreators } from './actions';

export const allActionCreators = {
  ...ToggleActionCreators,
  ...InfoleActionCreators,
};
