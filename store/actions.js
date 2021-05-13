import axios from 'axios'

export default {
  async getProducts({ commit }, id) {
    const products = await axios
      .get(`https://136.244.106.113:5001/api/Products`, {})
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
    console.log(products)
    commit('GET_ALL_PRODUCTS', products)
  },


  async postProduct({ commit },) {
    console.log("here")
    const data = {name: "test chilli", quantity: 3, cost: 135, category: "Salsa"}
    const products = await axios
      .post(`https://136.244.106.113:5001/api/Products`, {data})
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
    console.log(products)
    commit('GET_ALL_PRODUCTS', products)
  },
}
