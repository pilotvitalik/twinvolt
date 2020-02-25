<template>
  <div class='wrapper'>
    <Header/>
    <Navbar/>
    <Common/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header/Header.vue';
import Navbar from './Navbar/Navbar.vue';
import Common from './Common/Common.vue';
import Footer from './Footer/Footer.vue';

export default{
  components: {
    Header,
    Navbar,
    Common,
    Footer,
  },
};
</script>

<style lang='less' module>
</style>