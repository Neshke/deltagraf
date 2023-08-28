<template>
<div id="home-div">
  <div style="height:110px; background-color:#ba9a31"/>
  <h1 class="mb-8 mt-16 display-3 text-center" data-aos="fade-down" data-aos-delay="150">{{ $t('home.title')}}</h1>
  
  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12">
            <v-card  data-aos="slide-right" data-aos-easing="ease-in-sine" data-aos-delay="150" color="#010600">
                <v-card-title class=" white--text" >
                  <v-row class="fill-height flex-column" justify="space-between">

                    <div>
                        <p class="ma-0 pt-13 pl-13 pr-13  font-weight-light text-center text-justify " style="word-break: break-word;">
                          {{$t('home.content1')}}
                        </p>
                        <p class="ma-0 pt-2 pl-13 pr-13 pa-10 font-weight-light title text-justify " style="word-break: break-word;">
                          {{$t('home.content2')}}
                        </p>
                      <div class="row">
                        <div class="col-sm">
                          <p class="ma-0 pb-6  subtitle-1 text-center">
                            {{$t('home.content5')}}
                          </p>
                          <p class="ma-0 pb-6  display-4 text-center text-color">
                            500
                          </p>
                          <p class="ma-0 pb-6  subtitle-1 text-center">
                            {{$t('home.content6')}}
                          </p>
                        </div>
                      </div>
                      <!--<v-btn  class="green darken-4 white--text display-1 text-capitalize text-center" height="80px" >Prodavnica</v-btn>-->
                    </div>
                  </v-row>
                </v-card-title>
            </v-card>
        </v-col>
    </v-row>  
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <template v-for="(item, i) in items">
        <v-col
          :key="i"
          cols="12"
          md="6"
          data-aos="fade-up" data-aos-delay="150"
        >
            <v-card
              color="#010600"
              height="35vh"
              class="pa-4"
            >
                <v-card-title class="text-h6 white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                    
                  >
                    <p class="mt-4 text-center text-color">
                      {{ $t(`home.${item.title}`) }}
                    </p>
                    <br>
                    <div>
                      <p class="text-subtitle-1 font-weight-normal text-center white--text" style="word-break: break-word;">
                        {{ $t(`home.${item.subtext}`) }}
                      </p>
                    </div>

                   
                  </v-row>
                </v-card-title>
            </v-card>
        </v-col>
      </template>
    </v-row>
    
  </v-container>
  </div>
</template>

<script>
import km from "../assets/km.jpg"
import hem from "../assets/hem.jpg"
import i18n from '../i18n'


  export default {
    data: () => ({
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
      items: [
        {
          title: 'content7',
          subtext: 'content8',
          img: km,
        },
        {
          title: 'content9',
          subtext: 'content10',
          img: hem,
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }),
  }
</script>

<style scoped>
#home-div{
}
.text-color{
  color:#ba9a31;
}
.text-color{
  color:#ba9a31;
}
.v-row{
  transition: opacity .4s ease-in-out;
}
.v-card {
  opacity: 1;
}
.v-card:not(.on-hover) {
  opacity: 1;
 }
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
.w3-animate-left{position:relative;animation:animateleft 0.4s}
</style>
