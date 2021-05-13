<template>
  <nav>
    <div class="logo__div">
      <img src="~assets/logo.png" alt="skånsk chili" />
    </div>
    <ul>
      <NuxtLink to="/">Hem</NuxtLink>
      <NuxtLink to="/om">Om oss</NuxtLink>
      <NuxtLink to="/webbutik">Webbutik</NuxtLink>
      <NuxtLink to="/foretag">Företag</NuxtLink>
      <NuxtLink to="/kontakt">Kontakt</NuxtLink>
      <div class="cart__container" @click="toCart">
        <img src="~assets/icons/cart.svg" alt="varukorg" />
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    toCart() {
      this.$router.push('/varukorg')
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  box-shadow: $shadow__box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    margin: 0 2.5rem;

    a {
      padding: 0.5rem;
      margin: 1rem;
      opacity: 0.8;
      cursor: pointer;
    }

    .cart__container {
      margin-left: 2.5rem;
      cursor: pointer;
    }
  }
}
</style>
