<template>
<div id="offers-div">
  <div style="height:100px" />
  <h1 class="display-3 white--text text-center pa-3 pb-12" >Ponuda</h1>
  <v-carousel
    v-model="model"
    style="z-index:0;"
    class="mt-4 black"
    continuous
    cycle
    interval="2500"
    hide-delimiters
    height="66vh">
    <v-carousel-item
      v-for="image in images"
      :key="image"
    >
      <v-sheet
        height="100%"
        tile
        rounded-lg
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
          style="border-radius: 1em"
        >
          <div class="text-h2 col-sm" style="object-fit:cover" >
            <v-img :src="image" height="66vh" ></v-img>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>
<script>
import pens from "../assets/pens.jpg"
import spray from "../assets/spray.jpg"
import pozadina from "../assets/pozadina.jpg"

  export default {
    data: () => ({
      model: 0,
      images: [
        pens,
        spray,
        pozadina,
      ],
    }),
  }
</script>
<style scoped>
#offers-div{
  background-color:#010600;
}
</style>