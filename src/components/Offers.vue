<template>
<div id="offers">
  <h1 class="display-2 white--text text-center pa-3">Ponuda</h1>
  <v-carousel v-model="model" style="z-index:0" class="mt-4"  >
    <v-carousel-item
      v-for="image in images"
      :key="image"
      
    >
      <v-sheet
        :color="color"
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
          <div class="text-h2" >
            <v-img :src="image" height="500" ></v-img>
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