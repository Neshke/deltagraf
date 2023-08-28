<template>
  <div id="welcome">
      <v-container>
        <v-sheet class="welcome-card" opacity="2">
        <p class="subtitle mt-2 px-3">Please select the language below. 
        </p>
        <loc-sw />
        </v-sheet>
      </v-container>


  </div>
</template>

<script>
import LocSw from '../components/sub-components/LocaleSwitcher.vue'
export default {
    components:{
        LocSw,
    }
}
</script>

<style scoped>
#welcome{
    position: absolute;
    background-image: url("../assets/logo-deltagraf.jpg");
    background-size:contain;
    background-position: center;
    height:100%;
    width: 100%;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
}
h1{
    position: relative;
    text-align: center;
}
.welcome-card{
  background-color: rgba(255, 255, 255, 0.534);
  border-radius: 15px;
  color:black;
  text-align: center;
  margin:15vw;
}
</style>