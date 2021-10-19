<template>
  <div id="about" style="background-color:transparent">
      <v-container class="lighten-5" style="background-color:transparent">
          <h1 class="display-2 white--text text-center pa-3">O nama</h1>
        <v-row no-gutters height="200" class="black--text pa-4 fill-height" align="center" justify="center">
            <v-col :key="n" cols="12" sm="6">
               <v-img :src="slika" eager  class=" black ma-4  rounded-lg"/>
            </v-col>
            <v-col :key="n" cols="12" sm="6">
              <v-card class="ma-4 pt-5 rounded-lg white--text text-center" color="#010600" outlined tile  >
                <v-card-title class="text-center">
                    Nesto o nama
                </v-card-title >
                <v-card-text class="text-left white--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusantium sint veritatis cupiditate. Recusandae ab molestiae esse consequuntur sint impedit veniam adipisci debitis atque, dolor excepturi quaerat doloremque odit maiores.
                </v-card-text>
              </v-card>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import km from "../assets/workers.jpg"
export default {
    data:() =>({
        slika:km,
    }),


}
</script>

<style>
#about{
}
</style>