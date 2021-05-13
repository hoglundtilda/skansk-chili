<template>
  <div class="product__wrapper">
    <img src="../assets/products/chunkySalsa_1.png" alt="" />
    <section class="info">
      <h2>{{product.name}}</h2>
      <div>
        <p>{{product.quantity}}</p>
        <p>{{product.cost}}</p>
      </div>
      <button>KÖP</button>
    </section>
  </div>
</template>

<script>
export default {
    props: { product: Object}
}
</script>

<style lang="scss" scoped>
.product__wrapper {
  width: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: $shadow__box;

  .info {
      width: 100%;
      
    h2 {
      font-size: 20px;
      margin: 10px 0;
      text-align: left;
    }

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    button {
      width: 100%;
      border: 1px solid black;
      border-radius: 50px;
      background: none;
      margin-top: 20px;
      padding: 10px 0;
    }
  }
}
</style>
