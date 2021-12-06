<template>
  <div id="site" >
    <PageLoader/>
      <v-banner sticky height="101px" color="#010600" class="hidden-lg-and-up " style="z-index=100;" hide-details>
      <Navbar class="hidden-lg-and-up"/>
    </v-banner>
    <div class="home-logo-color" >
      <div class="home-logo ">
        <v-row
        align="center"
        justify="center">
        </v-row>
      </div>
    </div>
    <v-banner sticky height="100px" color="#010600" class="hidden-md-and-down nav-banner" >
      <Navbar />
    </v-banner>
    <template >
    
    </template>
     
      <Home />
      <Offers />
      <About />
    <v-sheet height="10px" color="#ba9a31"/> 
      <References />
      <v-sheet height="10px" color="#ba9a31"/> 
      <Contact />
      <Footer />
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
import Footer from '../components/Footer.vue'


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
      Footer,
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
  color:#ba9a31;
}
.home-logo{
  background-image: url("../assets/logo-deltagraf-mobile.jpg");
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
  background: linear-gradient(#000201 15%, #000201, #000201 90%);
  height:92vh;
}

.div-image{
  background-color: transparent;
  height:500px;
  width:100%;
}

@media screen and (min-width: 480px) {
.home-logo {
  background-image: url("../assets/logo-deltagraf.jpg");
  height:90vh;
  background-size:contain;
  animation: fadeInAnimation ease 5s;
  }
.home-logo-color{
  background: linear-gradient(to left,#011206 15%, #000201, #000201 90%);
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
