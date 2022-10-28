<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div id='app'>
    <nav>
      <HomeLink/>
      <a href='/about'>A propos</a>
      <a href='/contact'>Contact</a>
    </nav>
    <p>
      Bienvenue sur notre page d'<HomeLink/>
    </p>
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeLink from './components/HomeLink.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    HomeLink,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a{
  margin:5px;
}
</style>
