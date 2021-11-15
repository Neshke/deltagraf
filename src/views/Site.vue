<template>
  <div id="site" >
    <PageLoader/>
      <v-banner sticky height="101px" color="#010600" class="hidden-lg-and-up " style="z-index=100;" hide-details>
      <Navbar class="hidden-lg-and-up"/>
      <v-btn
            class="title text-capitalize ml-8 prodavnica-button text-color"
            height="80px"
            width="150px"
            color="transparent"
            style="">
            Prodavnica
          </v-btn> 
    </v-banner>
    <div class="home-logo-color" >
      <div class="home-logo ">
        <v-row
        align="center"
        justify="center">
          <v-btn
            class="text-color title text-capitalize ml-8 hidden-md-and-down"
            height="60px"
            width="150px"
            color="#010e03"
            style="bottom:10px;position:absolute;bottom:20px">
            Prodavnica
          </v-btn>
        </v-row>
      </div>
    </div>
    <v-banner sticky height="100px" color="#010600" class="hidden-md-and-down nav-banner" >
      <Navbar />
    </v-banner>
    <template >
    
    </template>
    <v-sheet height="10px" color="#da996f"/>
      <Home />
      <Offers />
      <About />
    <v-sheet height="10px" color="#da996f"/> 
      <References />
      <v-sheet height="10px" color="#da996f"/> 
      <Contact />
      <div class="nav-arrow text-right" >
          <v-btn fab class="mr-2 white--text" style="right:5vw"  color="#012903" v-if="scrollpx >= 300" @click="scrollToTop"><v-icon>arrow_upward</v-icon></v-btn>
    </div>
  </div>
  
</template>

<script>
import Navbar from '../components/sub-components/Navbar.vue'
import Home from '../components/Home.vue'
import Offers from '../components/Offers.vue'
import About from '../components/About.vue'
import PageLoader from '../components/sub-components/PageLoader.vue'
import References from '../components/References.vue'
import Contact from '../components/Contact.vue'


  export default {
    name: 'Site',
    components: {
      Navbar,
      Home,
      Offers,
      About,
      PageLoader,
      References,
      Contact,
      
    },
    data:()=>{
      return{
      showArrow: false,
      scrollpx: 0
      }
    },
    methods: {
      handleScroll() {
        this.scrollpx = window.scrollY;
      },
      scrollToTop(){
        const div = document.querySelector('#site')
        div.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>
<style scoped>
#site{
}
.text-color{
  color:#da996f;
}
.home-logo{
  background-image: url("../assets/logo-deltagraf-mobile-1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  height:80%;
  position: relative;
  top:0px;
  animation: fadeInAnimation ease 5s;
}
.prodavnica-button {
bottom:10px;
position:fixed;
top:5px;
left:100px;
}
.nav-arrow{
  position: fixed;
  right:10px;
  bottom: 20px;
  z-index: 100;
}
.nav-banner{
  z-index: 1;
}
.home-logo-color{
  background: linear-gradient(#020902 15%, #010e03, #020902 90%);
  height:92vh;
}

.div-image{
  background-color: transparent;
  height:500px;
  width:100%;
}

@media screen and (min-width: 480px) {
.home-logo {
  background-image: url("../assets/logo-deltagraf.png");
  height:90vh;
  background-size:contain;
  animation: fadeInAnimation ease 5s;
  }
.home-logo-color{
  background: linear-gradient(#020902 15%, #010e03, #020902 90%);
  height:90vh;
  }
}
@keyframes fadeInAnimation {
            0% {
                opacity: 0;
            }
            0%{
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
</style>
