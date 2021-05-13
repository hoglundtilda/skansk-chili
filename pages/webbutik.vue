<template>
  <div class="wrapper">
    <h1>Våra chili produkter</h1>
    <section class="products">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </section>
    <button @click="getProducts">testt</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      products: [],
    }
  },

  methods: {
    ...mapActions(['getProducts']),
  },
  mounted() {
    this.products = this.getProducts()
  },
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
