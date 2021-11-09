<template>
<div id="home-div">
  <div style="height:100px"/>
  <h1 class="mb-8 mt-16 display-3 text-center" data-aos="fade-down" data-aos-delay="150">Dobrodošli</h1>
  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12">
            <v-card  data-aos="slide-right" data-aos-easing="ease-in-sine" data-aos-delay="150" color="#010600">
                <v-card-title class="text-h6 white--text" >
                  <v-row class="fill-height flex-column" justify="space-between">

                    <div>
                        <p class="ma-0 pt-13 pl-13 pr-13  title text-center">
                          Dobrodošli na Deltagraf d.o.o. veb portal. Kod nas možete pronaći sve od kancelariskog materijala i sredstava za higijenu koji su potrebni vašoj kompaniji. Možete poručivati robu telefonom, e-mailom ili doći lično u naše prostorije, mi ćemo vam uvek izaći u susret. U ponudi imamo preko 5.000 artikala i sigurni smo da imamo sve što vam je potrebno.
                        </p>
                        <p class="ma-0 pb-13 pt-2  title text-center">
                         Nemate vremena ili niste blizu, pozovite nas mi ćemo naći način da roba dođe do vas.
                        </p>
                      <div class="row">
                        <div class="col-sm">
                          <p class="ma-0 pb-6  subtitle-1 text-center">
                            Uskoro...
                          </p>
                          <p class="ma-0 pb-6  display-4 text-center amber--text">
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
                          <p class="ma-0 pb-6  display-4 text-center amber--text">
                            500
                          </p>
                          <p class="ma-0 pb-6  subtitle-1 text-center">
                            ...Zadovoljnih klijenata...
                          </p>
                        </div>
                        <div class="col-sm">
                          <p class="ma-0 pb-6  subtitle-1 text-center">
                            Uskoro...
                          </p>
                          <p class="ma-0 pb-6  display-4 text-center amber--text">
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
              color="#010600"
              height="35vh"
              class="pa-4"
            >
                <v-card-title class="text-h7 white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                    
                  >
                    <p class="mt-4 subheading text-center amber--text">
                      {{ item.title }}
                    </p>
                    <br>
                    <div>
                      <p class="text-subtitle-1 font-weight-bold text-center white--text">
                        {{ item.subtext }}
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

  export default {
    data: () => ({
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
      items: [
        {
          title: 'Kancelarjiski materijal',
          text: `It's New Release Friday`,
          subtext: 'Imamo kompletna ponuda kancelarijskog materijala, školskog pribora, reklamnog i  promo materijala sa uslugom štampe.',
          img: km,
        },
        {
          title: 'Proizvodi za održavanje higijene',
          text: 'Greatest Rock Hits',
          subtext: 'Imamo veliki izbor kućnih i industrijskih sredtava za održavanje higijene kako domaće tako i strane proizvodnje. U našoj ponudi možete pronaći i kompletnu ponudu papirne galanterije.',
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
