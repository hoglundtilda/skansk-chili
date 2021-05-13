import axios from 'axios'

export default {
  async getProducts({ commit }, id) {
    const products = await axios
      .get(`/api/Products`, {})
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
    console.log(products)
    commit('GET_ALL_PRODUCTS', products)
  },

  async postProduct({ commit }, product) {
    let data
    if (product) {
      data = product
    }

    if (!product) {
      data = {
        name: 'test chilli',
        quantity: 3,
        cost: 135,
        category: 'Salsa',
      }
    }

    const products = await axios
      .post(`/api/Products`, { data })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
    console.log(products)
    commit('GET_ALL_PRODUCTS', products)
  },
}
