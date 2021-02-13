export default {
  addToCart(state, payload) {
    state.cart.push(payload);
  },

  addNumber(state, payload) {
    state.cart[payload].count++
  },

  isChecked(state, payload) {
    state.cart.filter(item => {
      return item.iid == payload
    })[0].isChecked = !state.cart.filter(item => {
      return item.iid == payload
    })[0].isChecked
  },

  checkedAll(state) {
    state.cart.forEach(item => {
      item.isChecked = true
    });
  },

  deCheckedAll(state) {
    state.cart.forEach(item => {
      item.isChecked = false
    });
  }
}