import { makeAutoObservable } from 'mobx';

class Toggle {
  statment = false;
  constructor() {
    makeAutoObservable(this);
  }
  changeToggleValue(value) {
    this.statment = value;
  }
}

export default new Toggle();
