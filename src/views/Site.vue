<template>
  <div id="site" >
    <v-banner sticky height="80px" color="#010600" class="hidden-lg-and-up" style="z-index=100;">
      <navbar class="hidden-lg-and-up"/>
      <v-btn
            class="amber--text title text-capitalize ml-8 prodavnica-button"
            height="60px"
            width="150px"
            color="transparent"
            style="">
            Prodavnica
          </v-btn>
          
    </v-banner>
    <div class="home-logo-color" >
      <div class="home-logo " >
        <v-row
        align="center"
        justify="center">
          <v-btn
            class="amber--text title text-capitalize ml-8 hidden-md-and-down"
            height="60px"
            width="150px"
            color="#010e03"
            style="bottom:10px;position:absolute;bottom:20px">
            Prodavnica
          </v-btn>
        </v-row>
      </div>
    </div>
    <v-banner sticky height="100px" color="#010600" class="hidden-md-and-down" style="z-index=2">
      <navbar />
    </v-banner>
    <v-sheet height="10px" color="#da996f"/>
      <Home />
    <v-sheet height="10px" color="#da996f" />
      <Offers />
      <v-sheet height="10px" color="#da996f"/> 
      <About />
      
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
  background-image: url("../assets/logo-deltagraf-mobile-1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size:contain;
  height:600px;
  position: relative;
}
.prodavnica-button {
bottom:10px;
position:fixed;
top:5px;
left:100px;
}

.home-logo-color{
  background: linear-gradient(#020902 15%, #010e03, #020902 90%);
}

.div-image{
  background-color: transparent;
  height:500px;
  width:100%;
}

@media screen and (min-width: 480px) {
.home-logo {
  background-image: url("../assets/logo-deltagraf.png");
  top:10px;
  height:700px;
  }
}
</style>
