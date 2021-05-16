import axios from 'axios'

export default {
  async getProducts({ commit }, id) {
    const products = await axios
      .get(`/api/products`, {})
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
        description: 'string',
        cost: 135,
        size: 225,
        category: 1,
      }
    }

    const products = await axios
      .post(`/api/products`, { data })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
    console.log(products)
    commit('GET_ALL_PRODUCTS', products)
  },
}
