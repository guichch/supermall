export default {
  addToCart(state, payload) {
    state.cart.push(payload);
  },

  addNumber(state, payload) {
    state.cart[payload].count++
  }
}