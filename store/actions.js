import axios from 'axios'

export default {
  async getProducts({ commit }, id) {
    const products = await axios
      .get(`https://localhost:5001/api/Products`, {})
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
    console.log(products)
    commit('GET_ALL_PRODUCTS', products)
  },
}
