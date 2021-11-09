<template>
  <div id="about-div" >
    <div data-aos="slide-right" data-aos-delay="300">
    <div style="height:100px"/>
      <v-container class="lighten-5" style="background-color:transparent">
          <h1 class="display-3 white--text text-center pa-3">O nama</h1>
        <v-row no-gutters height="200" class="black--text pa-4 fill-height" align="center" justify="center">
            <v-col :key="n" cols="12" sm="6">
               <v-img :src="slika" eager  class=" black ma-4  rounded-lg"/>
            </v-col>
            <v-col :key="n" cols="12" sm="6">
              <v-card class="ma-2 rounded-lg white--text text-center" color="#010600" outlined tile  >
                <v-card-text class="text-left white--text text-subtitle-2" >
                  Deltagraf je osnovan 1992. godine sa jasnom vizijom osnivača Vladana Nikolića da je samo kvalitetna ponuda i vrhunska usluga garancija uspeha. Svoj rad smo započeli snabdevanjem poslovnih korisnika kancelarijskim materijalom a kasnije smo ponudu proširili i na hemijske proizvode za održavanje higijene . Za sve ove godine smo izgradili, pored renomea koji nosi samo ime naše kompanije, i poslovni proctor u centru Smedereva sa 100m2 kancelarijskog prostora i 300m2 magacinskog prostora.  Naša težnja je da budemo vaši partneri a ne samo dobavljači, kao dokaz tome je i veliki broj kompanija koji godinama sarađuju sa nama. Stalnim ulaganjem u kadrove i proširenje kapaciteta činimo da kvalitet naše ponude i pružene usluge neprestano raste. 
                </v-card-text>
              </v-card>
            </v-col>
        </v-row>
        <template>
          <h1 class="display-3 white--text text-center mt-4 mb-4">Sertifikati</h1>
        <v-sheet class="mx-0" max-width="100%" justify="center" height="45vh"  color="#010600" >
            <v-slide-group v-model="model" class="pa-4" show-arrows height="40vh" dark >
                <v-slide-item v-for="n in sImages" :key="n" v-slot="{ toggle }">
                  <v-col>
                    <v-card class="ma-4" height="30vh" width="26vw" @click="toggle" elevation="0" color="#010600">
                          <v-img :src="n.img" height="100%" contain @click="togglePopup = !togglePopup"></v-img>
                          <p class="ref-style">{{n.name}}</p>
                    </v-card>
                  </v-col>
                </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </template>
    </v-container>
    
    </div>
  </div>

</template>

<script>
import km from "../assets/workers.jpg"
import s1 from "../assets/s1.jpg"
import s2 from "../assets/s2.jpg"
import s3 from "../assets/s3.jpg"
import s4 from "../assets/s4.jpg"
import Popup from './sub-components/Popup.vue'

export default {
  components: { Popup },
  
    data:() =>({
        slika:km,
        togglePopup:false,
        sImages: [
          {
            name:'ISO 22000:2018',
            img:s1
          },
          {
            name:'ISO 9001:2015',
            img:s2
          },
          {
            name:'ISO 45001:2018',
            img:s3
          },
          {
            name:'ISO 14001:2015',
            img:s4
          },
      ],
    }),
}
</script>

<style>
#about-div{
  background-color:#010600;
  overflow-x:hidden;
}
.ref-style{
  margin-top:10px;
  text-align: center;
  font-size: 0.8em;
}
</style>