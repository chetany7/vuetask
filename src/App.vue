<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-light bg-light">
        <router-link :to="{ name: 'Home' }" class="navbar-brand">Home</router-link>
        <router-link :to="{ name: 'Article' }" class="navbar-brand">Articles</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Article from './components/Article.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    Home,
    Article
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
