<template>
<div id="site" >
  <v-banner sticky height="70px" color="#010600" class="hidden-lg-and-up">
    <navbar class="hidden-lg-and-up" v-on:scroll-down="scrollToElement($event)"/>
  </v-banner>
  <div style="background-color:#000a02;" class="home-logo"></div>
  <v-banner sticky color="#010600" class="hidden-md-and-down">
    <navbar v-on:scroll-down="scrollToElement($event)"/>
  </v-banner>
  <v-sheet :min-height="$vuetify.breakpoint.xs ? 300 : '1vh'" :rounded="$vuetify.breakpoint.xsOnly" color="#da996f" />
  <h1 class="mt-8 display-3 text-center">Kancelarijski materijal</h1>
  <Home/>
  <v-sheet :min-height="$vuetify.breakpoint.xs ? 300 : '1vh'" :rounded="$vuetify.breakpoint.xsOnly" color="#da996f" />
  <div style="height:300px;background-color:#010600">
    <About/>
  </div>
  <div style="height:700px;background-color:#010600"></div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

  export default {
    name: 'Site',
    components: {
      Navbar,
      Home,
      About,
    },
    methods:{
      scrollToElement:function(scroll){
        let currentScroll = document.documentElement.scrollTop,
        int = setInterval(frame, 0)
          
          
          function frame(){
              
              if( scroll.scrollValue < currentScroll){
                  clearInterval(int)
              }else{
                currentScroll = currentScroll + 7
                  document.documentElement.scrollTop = currentScroll
                
              }
          }
      }
    },
  }
        Navbar
</script>
<style scoped>

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
