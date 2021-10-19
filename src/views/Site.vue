<template>
<div id="site" >
  <v-banner sticky height="70px" color="#010600" class="hidden-lg-and-up" style="z-index=2">
    <navbar class="hidden-lg-and-up"/>
  </v-banner>
  <div style="background-color:#000a02;" class="home-logo"></div>
  <v-banner sticky color="#010600" class="hidden-md-and-down" style="z-index=2">
    <navbar v-on:scroll-down="scrollToElement($event)"/>
  </v-banner>
  <v-sheet height="50px" :rounded="$vuetify.breakpoint.xsOnly" color="#da996f"  style="padding-top:97px" id="home-div"/>
  <h1 class="mt-8 display-3 text-center">Kancelarijski materijal</h1>
  <Home />
  <v-sheet height="50px" :rounded="$vuetify.breakpoint.xsOnly" color="#da996f" id="offers-div" style="padding-top:97px" />
  
  <div style="background-color:#010600;height:1500px;">
    <Offers />
    <v-sheet  class="mt-2 " color="#da996f" id="about-div" style="padding-top:97px;" />  
    <About />
  </div>
    
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Home from '../components/Home.vue'
import Offers from '../components/Offers.vue'
import About from '../components/About.vue'

  export default {
    name: 'Site',
    components: {
      Navbar,
      Home,
      Offers,
      About,
      
    },
  }
        Navbar
</script>
<style scoped>
#site{
}
.home-logo{
  background-image: url("../assets/logo-deltagraf.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  height:800px;
}
.div-image{
  background-color: transparent;
  height:500px;
  width:100%;
}
</style>
