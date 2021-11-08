<template>
  <div id="references-div" style="height:1000px">
     <template>
        <v-sheet class="mx-auto" max-width="100%" justify="center" >
            <v-slide-group v-model="model" class="pa-4" show-arrows >
                <v-slide-item v-for="n in images" :key="n" v-slot="{ toggle }" >
                    <v-card class="ma-4" height="30vh" width="25vw" @click="toggle" elevation="0">
                          <v-img :src="n" height="100%" contain></v-img>
                    </v-card>
                </v-slide-item>
            </v-slide-group>

            <v-expand-transition>
              <v-sheet
                v-if="model != null"
                height="200"
                tile
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-image :src="images.s1"></v-image>
                    
                </v-row>
              </v-sheet>
            </v-expand-transition>
          </v-sheet>
        </template>
    </div>
</template>

<script>
import s1 from "../assets/s1.jpg"
import s2 from "../assets/s2.jpg"
import s3 from "../assets/s3.jpg"
import s4 from "../assets/s4.jpg"

export default {
    data: () => ({
      model: 0,
      images: [
        s1,
        s2,
        s3,
        s4,
      ],
    }),
  }
</script>

<style>
#references-div{
    overflow-x:hidden;
}
</style>