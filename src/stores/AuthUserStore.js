import { defineStore } from 'pinia';
export const useAuthUserStore = defineStore("AuthUserStore", {
  state: () => {
    return {
      userName: 'olhasashchuk',
    }
  },
  // actions: {
  //   login(user) {
  //     this.user = user;
  //     this.isLoggedIn = true;
  //   },
  //   logout() {
  //     this.user = null;
  //     this.isLoggedIn = false;
  //   }
  // },
  // getters: {
  //   isAdmin: (state) => state.user && state.user.role === "admin",
  //   isUser: (state) => state.user && state.user.role === "user",
  // }
})