<template>
  <div class="add-product__wrapper">
    <h2>Lägg till ny produkt</h2>
    <section class="add-product__section-form">
      <input v-model="product.name" type="text" placeholder="Namn" />
      <div class="input-row">
        <input v-model="product.category" type="text" placeholder="Kategori" />
        <input
          v-model="product.size"
          id="strl"
          type="text"
          placeholder="Storlek"
        />
        <input v-model="product.price" type="text" placeholder="Pris" />
      </div>
      <textarea
        v-model="product.description"
        placeholder="Beskrivning"
      ></textarea>
      <button @click="addProduct">Lägg till</button>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      product: {
        name: '',
        category: '',
        size: '',
        description: '',
        price: '',
      },
    }
  },
  methods: {
    ...mapActions(['postProduct']),
    addProduct() {
      const isEmpty = !Object.values(this.product).some((key) => key !== '')
      if (isEmpty === false) this.postProduct(this.product)
      if (isEmpty === true) this.postProduct()
    },
  },
}
</script>

<style lang="scss" scoped>
input {
  @include input;
}

textarea {
  @include input;
  border-radius: 20px;
  height: 10rem;
}

button {
  @include btn;
}

.add-product__wrapper {
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 3rem;

  .add-product__section-form {
    display: flex;
    flex-direction: column;
    width: 80%;

    .input-row {
      display: flex;
      justify-content: space-between;

      #strl {
        margin: 16px 6px;
      }
    }
  }
}
</style>
