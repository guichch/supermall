export default {
  addToCart({ commit, state }, product) {
    for (let goods of state.cart) {
      if (goods.iid === product.iid) {
        const index = state.cart.indexOf(goods)
        commit('addNumber', index)
        return
      }
    }
    product.count = 1;
    commit('addToCart', product)
  }

}