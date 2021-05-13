<template>
  <div class="add-product__wrapper">
    <h2>Lägg till ny produkt</h2>
    <section class="add-product__section-form">
      <input type="text" placeholder="Namn" />
      <div class="input-row">
        <input type="text" placeholder="Kategori" />
        <input type="text" placeholder="Storlek" />
        <input type="text" placeholder="Pris" />
      </div>
      <textarea placeholder="Beskrivning"></textarea>
    </section>
    <button @click="addProduct">ADD PRODUCT</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['postProduct']),
    addProduct() {
      this.postProduct()
    },
  },
}
</script>

<style lang="scss" scoped></style>
