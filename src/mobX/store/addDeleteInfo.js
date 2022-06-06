import { makeAutoObservable } from 'mobx';

class AddDeleteInfo {
  data = [];
  constructor() {
    makeAutoObservable(this);
  }

  addPersonalInfo(info) {
    this.data.push(info);
  }
  removePersonalInfo(id) {
    this.data = this.data.filter((item) => item.id !== id);
  }
}

export default new AddDeleteInfo();
