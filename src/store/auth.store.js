import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class AuthStore {

  isAuth = false;

  userData = {
    id: "",
    name: "",
    email: "",
    access_token: "",
    refresh_token: "",
    user_type: "",
  };

  userId = []

  has_permission = []

  newData = []

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "auth",
      storage: window.localStorage,
      properties: ["isAuth", "userData", "userId", "has_permission", "newData"]
    });
  }

  createUsersId(data) {
    this.userId.push(data)
  }


  updateUserData(data) {
    this.userData = data
  }

  hasPermission(id) {
    this.has_permission.push(id)
  }

  hasNewData(data) {
    this.newData = data
  }

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }

};


export const authStore = new AuthStore();

