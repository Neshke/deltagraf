<template>
<div id="home">
  <v-container class="pa-4 text-center">
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
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 4"
              :class="{ 'on-hover': hover }"
              
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
                      <p class="text-subtitle-2 font-weight-medium  text-center black--text">
                        {{ item.subtext }}
                      </p>
                    </div>

                   
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
        <v-col
          :key="i"
          cols="12"
          md="12"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 4"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                height="225px"
              >
                <v-card-title class="text-h6 black--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="mt-4 subheading text-center">
                      Lorem ipsum dolor sit amet.
                    </p>

                    <div>
                      <p class="ma-0 text-body-1 font-weight-bold font-italic text-center">
                        Lorem ipsum dolor sit amet.
                      </p>
                      <p class="text-caption font-weight-medium font-italic text-center">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>

                    <div class="align-self-center">
                      <v-btn
                        v-for="(icon, index) in icons"
                        :key="index"
                        :class="{ 'show-btns': hover }"
                        :color="transparent"
                        icon
                      >
                        <v-icon
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                        >
                          {{ icon }}
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import km from "../assets/km.jpg"
import hem from "../assets/hem.jpg"

  export default {
    data: () => ({
      images:[
      ],
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
      items: [
        {
          title: 'Kancelarjiski materijal',
          text: `It's New Release Friday`,
          subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit eros, mattis suscipit risus eu, fermentum facilisis ante. Curabitur hendrerit.',
          img: km,
        },
        {
          title: 'Kućna hemija',
          text: 'Greatest Rock Hits',
          subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit eros, mattis suscipit risus eu, fermentum facilisis ante. Curabitur hendrerit.',
          img: hem,
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }),
  }
</script>

<style scoped>
#home{
    padding:100px;
}
.v-card {
  transition: opacity .4s ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 0.7;
 }
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>