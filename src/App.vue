<template>
  <div id="app">
    <Wrapper/>
  </div>
</template>

<script>
import Wrapper from '@/components/Wrapper.vue';

export default {
  name: 'App',
  components: {
    Wrapper,
  },
};
</script>

<style lang="less">
@font-face {
  font-family: 'Poppins-Regular';
  src: url('./assets/fonts/poppins/Poppins-Regular.eot');
  src: url('./assets/fonts/poppins/Poppins-Regular.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/poppins/Poppins-Regular.svg#Poppins-Regular') format('svg'),
       url('./assets/fonts/poppins/Poppins-Regular.ttf') format('truetype'),
       url('./assets/fonts/poppins/Poppins-Regular.woff') format('woff'),
       url('./assets/fonts/poppins/Poppins-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: 'Poppins-Regular', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
