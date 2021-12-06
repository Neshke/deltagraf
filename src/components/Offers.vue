<template>
<div id="offers-div">
  <div style="height:110px; background-color:#ba9a31" />

  <div data-aos="fade-down" data-aos-delay="300"><h1 class="display-3 white--text text-center pa-3 pb-12" data-aos="slide-down" data-aos-delay="300">Ponuda</h1></div>

  <div class="carousel">
    <v-carousel
      v-model="model"
      style="z-index:0;"
      class="white "
      interval="2500"
      hide-delimiters
      height="100%"
      color="#c4c1c4">
      <v-carousel-item
        v-for="image in images"
        :key="image"
      >
        <v-sheet
          tile
          rounded-lg
          color="#c4c1c4"
          height="102%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h2 col-sm" style="object-fit:cover" >
              <v-img :src="image.img" height="79vh" contain ></v-img>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
  </div>
</template>
<script>
import n1 from "../assets/offers/n1.jpg"
import n2 from "../assets/offers/n2.jpg"
import n3 from "../assets/offers/n3.jpg"
import n4 from "../assets/offers/n4.jpg"
import n5 from "../assets/offers/n5.jpg"
import n6 from "../assets/offers/n6.jpg"
import n7 from "../assets/offers/n7.jpg"
import n8 from "../assets/offers/n8.jpg"
import n9 from "../assets/offers/n9.jpg"
import n10 from "../assets/offers/n10.jpg"
import n11 from "../assets/offers/n11.jpg"

  export default {
    data: () => ({
      model: 0,
      images: [
        {
          img:n1,
          desc:'Solvent traka providna'
        },
        {
          img:n2,
          desc:'Registrator uski'
        },
        {
          img:n3,
          desc:'Princ ženski novčanik'
        },
        {
          img:n4,
          desc:'Navigator papir'
        },
        {
          img:n5,
          desc:'Mondi (Prepraviti naziv)'
        },
        {
          img:n6,
          desc:'RETYPE Korektor'
        },
        {
          img:n7,
          desc:'Hemijska tipa AH-567'
        },
        {
          img:n8,
          desc:'American BP'
        },
        {
          img:n9,
          desc:'Folija za dokumenta U'
        },
        {
          img:n10,
          desc:'Folija za dokumenta U'
        },
        {
          img:n11,
          desc:'Folija za dokumenta U'
        },
      ],
    }),
  }
</script>
<style scoped>
#offers-div{
  background-color:#010600;
}
@media screen and (min-width: 480px) {
  #offers-div{
  background-color:#010600;
  height: 99vh;
  }
}
.carousel{
  border: 4px solid #ba9a31;
  height: 80vh;
}
</style>