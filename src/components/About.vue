<template>
  <div id="about-div" >
    <div style="height:110px;background-color:#ba9a31"/>
      <v-container class="lighten-5" style="background-color:transparent">
          <div
            data-aos="fade-down"
            data-aos-delay="300"><h1 class="display-3 white--text text-center pa-3" data-aos="slide-down" data-aos-delay="300">{{$t('about.title')}}</h1></div>
        <v-row no-gutters height="200" class="black--text pa-4 fill-height" align="center" justify="center">
            <v-col :key="n" cols="12" sm="6">
              <div
                data-aos="fade-left"
                data-aos-delay="300">
               <v-img :src="slika" eager  class=" black ma-4  rounded-lg" data-aos="slide-right" data-aos-delay="350"/>
              </div>
            </v-col>
            <v-col :key="n" cols="12" sm="6">
              <v-card class="ma-2 rounded-lg white--text text-center" color="#010600" outlined tile  >
                <div
                data-aos="fade-left"
                data-aos-delay="300">
                  <v-card-text class="text-left white--text text-body-1 text-justify" style="word-break: break-word;" data-aos="slide-left" data-aos-delay="400">
                   &nbsp;&nbsp;&nbsp;&nbsp;{{$t('about.content')}}</v-card-text>
                </div>
              </v-card>
            </v-col>
        </v-row>
        <template>
          <div
          data-aos="fade-up"
          data-aos-delay="300">
            <h1 class="display-3 white--text text-center mt-4 mb-4">{{$t('about.subtitle')}}</h1>

            <v-sheet class="mx-0" max-width="100%" justify="center" height="45vh"  color="#010600" >
              <v-slide-group v-model="model" class="pa-4" show-arrows height="40vh" dark >
                  <v-slide-item v-for="n in sImages" :key="n" v-slot="{ toggle }">
                    <v-col>
                      <v-card class="ma-4" height="30vh" width="20vw" @click="toggle" elevation="0" color="#010600">
                            
                            <v-row justify="space-around" height="500px">
                                <v-col cols="auto">
                                  <v-dialog
                                    transition="dialog-top-transition"
                                    max-width="600"
                                    height="1000px"
                                  >
                                    <template v-slot:activator="{ on, attrs }">
                                      <v-img :src="n.img" height="25vh" width="20vw" contain @click="togglePopup = !togglePopup" v-bind="attrs" v-on="on"></v-img>
                                      <p class="ref-style">{{n.name}}</p>
                                    </template>
                                    <template v-slot:default="dialog">
                                      <v-card>
                                        <v-toolbar
                                          color="#010600"
                                          dark
                                        >{{n.name}}</v-toolbar>
                                        <v-card-text>
                                          <v-img :src="n.img" contain height="75vh" v-bind="attrs" v-on="on"></v-img>
                                        </v-card-text>
                                        <v-card-actions class="justify-end">
                                          <v-btn
                                            text
                                            @click="dialog.value = false"
                                          >{{$t('about.button')}}</v-btn>
                                        </v-card-actions>
                                      </v-card>
                                    </template>
                                  </v-dialog>
                                </v-col>
                              </v-row>
                      </v-card>
                    </v-col>
                  </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </div>
        </template>
    </v-container>
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
  overflow-y:hidden;
}

.ref-style{
  margin-top:10px;
  text-align: center;
  font-size: 0.8em;
}
</style>