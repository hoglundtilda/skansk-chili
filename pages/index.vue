<template>
  <div class="container">
    <button @click="test">TEST</button>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      text: 'HELLO WORLD',
    }
  },

  methods: {
    async test() {
      console.log("here")
      const post = await axios
        .get(`http://136.244.106.113:5000/WeatherForecast`, {
        })
        .then((response) => response.data)
        .catch((error) => {
          console.log(error)
        })

      console.log(post)

      this.text = post
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
