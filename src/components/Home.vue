<template>
<div id="home-div">
  <div style="height:100px"/>
  <h1 class="mb-8 mt-16 display-3 text-center" data-aos="fade-down" data-aos-delay="150">Dobrodošli</h1>
  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12">
            <v-card  data-aos="slide-right" data-aos-easing="ease-in-sine" data-aos-delay="150">
                <v-card-title class="text-h6 black--text">
                  <v-row class="fill-height flex-column" justify="space-between">

                    <div>
                      <p class="ma-0 pa-12  title text-center">
                        Deltagraf” firma je osovana 1992. godine i uspešno posluje već duži niz godina kako sa državnim firmama, tako i sa privatnim. Kroz sve ove godine smo se držali kvaliteta, što se može videti kod naših kupaca svakoga dana. Ova firma je započeta kao porodična firma, ali kroz godine se polako širila. Naš cilj je proširenje prodaje kvalitetnih artikla po povoljnim cenama u celoj Srbiji, a kasnije i šire.
                      </p>
                      <div class="row">
                        <div class="col-sm">
                          <p class="ma-0 pb-6  subtitle-1 text-center">
                            Uskoro...
                          </p>
                          <p class="ma-0 pb-6  display-4 text-center">
                            30
                          </p>
                          <p class="ma-0 pb-6  subtitle-1 text-center">
                            ...Godina poslovanja
                          </p>
                        </div>
                        <div class="col-sm">
                          <p class="ma-0 pb-6  subtitle-1 text-center">
                            ...Sa preko...
                          </p>
                          <p class="ma-0 pb-6  display-4 text-center">
                            500
                          </p>
                          <p class="ma-0 pb-6  subtitle-1 text-center">
                            ...Firmi, opština, naselja...
                          </p>
                        </div>
                        <div class="col-sm">
                          <p class="ma-0 pb-6  subtitle-1 text-center">
                            Uskoro...
                          </p>
                          <p class="ma-0 pb-6  display-4 text-center">
                            30
                          </p>
                          <p class="ma-0 pb-6  subtitle-1 text-center">
                            ...Godina poslovanja
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
          data-aos="fade-up" data-aos-delay="150 + i * 100"
        >
            <v-card
              color="transparent"
            >
              <v-img
                :src="item.img"
                height="225px"
              >
                <v-card-title class="text-h6 white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                    
                  >
                    <p class="mt-4 subheading text-center black--text">
                      {{ item.title }}
                    </p>
                    <br>
                    <div>
                      <p class="text-title-1 font-weight-bold text-center black--text">
                        {{ item.subtext }}
                      </p>
                    </div>

                   
                  </v-row>
                </v-card-title>
              </v-img>
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

  export default {
    data: () => ({
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
      items: [
        {
          title: 'Kancelarjiski materijal',
          text: `It's New Release Friday`,
          subtext: 'Sve vrste kancelarijskom materijala, školskog pribora i reklamnog promo materijala sa uslugama štampe',
          img: km,
        },
        {
          title: 'Kućna hemija',
          text: 'Greatest Rock Hits',
          subtext: 'U prodaji imamo sve vrste kućne i industrijske hemije, domaće i inostrane proizvodje i papirne galanterije',
          img: hem,
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }),
  }
</script>

<style>
#home-div{
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
