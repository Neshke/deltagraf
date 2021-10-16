<template>
<div class="home">
  <v-banner sticky height="70px" color="#010600" class="hidden-lg-and-up">
  <navbar class="hidden-lg-and-up"/>
  </v-banner>
  <div style="background-color:#000a02;" class="home-logo">asdsd</div>
  <v-banner sticky color="#010600" class="hidden-md-and-down">
  <navbar/>
  </v-banner>
  <div style="height:600px; background-color:#000a02;"></div>
  <div style="height:2200px; background-color:#0f2a02;"></div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

  export default {
    name: 'Home',

    components: {
      Navbar,
    },
  }
        Navbar
</script>
<style scoped>
.home-logo{
  background-image: url("../assets/logo-deltagraf.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: -80px;
  height:500px;
}
</style>
