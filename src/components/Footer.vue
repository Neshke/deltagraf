<template>
    <div id="footer" class="text-center white--text">
                <v-sheet height="1px"  color="#ba9a31" align="center" class="ml-15 mr-15 mt-10 mb-2"/>
                <v-row>
                    <v-col lg="6">
                        <p class="ml-16 mr-15 mt-2 mb-2">&copy Deltagraf 2023</a> </p>
                    </v-col>
                    <v-col lg="6" justify="space-around">
                        <a  @click="socialNavigate('http://www.instagram.com')"  class="social pr-2"><v-icon color="#ba9a31" >mdi-instagram</v-icon></a>
                        <a @click="socialNavigate('http://www.facebook.com')" class="social"><v-icon color="#ba9a31">mdi-facebook</v-icon></a>
                    </v-col>
                </v-row> 
  </div>
</template>

<script>
export default {
    methods:{
        socialNavigate(link){
            window.location = link;
        }
    }
}
</script>

<style>
#footer{
    background-color:#010600;
    overflow-x:hidden;
    overflow-y:hidden;
    justify-content: center;
}
.social{
    text-decoration: none;
}
</style>