<template>
  <nav>
    <div class="logo__div">
      <img src="~assets/logo.png" alt="skånsk chili" />
    </div>
    <ul>
      <NuxtLink to="/">Hem</NuxtLink>
      <NuxtLink to="/om">Om oss</NuxtLink>
      <NuxtLink to="/webbutik">Webbutik</NuxtLink>
      <NuxtLink to="/kontakt">Kontakt</NuxtLink>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
  display: flex;

  a {
    
    text-decoration: none;

 
    
  }


  
}
</style>
