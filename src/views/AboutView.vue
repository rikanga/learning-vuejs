<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <AboutLink></AboutLink>
  </div>
</template>

<script>
  import AboutLink from '../components/AboutLink.vue';

  export default {
    name:'AboutView',
    components: {
      AboutLink
    }
  }
</script>