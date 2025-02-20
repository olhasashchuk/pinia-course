import { groupBy } from 'lodash';
import { defineStore } from 'pinia';
import { useAuthUserStore } from './AuthUserStore';

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [],
    }
  },
  actions: {
    checkout() {
      const authUserStore = useAuthUserStore();
      alert(`${authUserStore.userName} just bought ${this.count} items at a total of ${this.cartTotal}`);
    },
    addItems(count, item) {
      count = parseInt(count);
      for(let index = 0; index < count; index++) {
        this.items.push({...item});
      }
    },
    clearItem(itemName) {
      this.items = this.items.filter(item => item.name !== itemName);
    },
    setItemCount(item, count) {
      this.clearItem(item.name);
      this.addItems(count, item);
    }
  },
  getters: {
    count: (state) => state.items.length,
    isEmpty: (state) => state.items.length === 0,
    grouped: state => {
      const grouped= groupBy(state.items, item => item.name);
      const sorted = Object.keys(grouped).sort();
      let inOrder = {};
      sorted.forEach(key => inOrder[key] = grouped[key]);
      return inOrder
    },
    groupCount: (state) => (name) => state.grouped[name].length,
    cartTotal: (state) => {
      return state.items.reduce((total, item) => total + item.price, 0);
  },
  }
})