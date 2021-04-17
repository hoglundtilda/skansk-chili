<template>
  <div class="wrapper">
    <h1>Våra chili produkter</h1>
    <section class="products">
      <Product v-for="product in products" :key="product.id" :product="product" />
    </section>

    <button @click="getProducts">testt</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      products: [],
    }
  },

  methods: {
    async getProducts() {
      this.products = await axios
        .get(`https://localhost:5001/api/Products`, {})
        .then((response) => response.data)
        .catch((error) => {
          console.log(error)
        })
      console.log(this.products)
    },
  },
  mounted() {
      this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

 

  .products {
    display: flex;
    margin: 2.5rem 0;
  }
}
</style>
