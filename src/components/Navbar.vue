<template>
    <nav >
        <v-app-bar-nav-icon color="#da996f" class="hidden-lg-and-up" @click="drawer = !drawer" ></v-app-bar-nav-icon>
        <v-toolbar color="#010600" class="hidden-md-and-down"  flat  >
            <v-tabs centered slider-color="#da996f">
                <v-tab class="white--text"  v-for="link in links" :key="link.text"  @click="clickedButton(link)" id="navLink">{{link.text}}</v-tab>
            </v-tabs>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer"  color="#010600" hide-overlay  disable-resize-watcher >
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" >
                    <v-list-item-action>
                        <v-icon color="#da996f">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content class="white--text">
                        <v-list-item-title class="item-title"  @click="clickedButton(link);drawer = !drawer">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return{
            drawer:false,
            counter:0,
            scrollValue: 0,
            links:[
                { icon: 'home', text: 'Početna', index: 0},
                { icon: 'info', text: 'Ponuda', index: 1},
                { icon: 'fact_check', text: 'O nama', index: 2 },
                { icon: 'contact_page', text: 'Reference', index: 3 },
                { icon: 'contact_page', text: 'Kontakt', index: 4 },
            ],
        }
    },
    methods:{
        clickedButton:function(link){
            if(link.index==0){
                const home = document.querySelector("#home-div")
                home.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
            }else if(link.index==1){
                const offer = document.querySelector("#offers-div")
                offer.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
            }else if(link.index==2){    
                const about = document.querySelector("#about-div")
                about.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
            }else if(link.index==3){    
                const about = document.querySelector("#abou")
                about.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
            }else{
                const about = document.querySelector("#abou")
                about.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
            }
        }
    },
    
}
</script>

<style>
.no-border-radius{
    border-radius: 0px;
    margin:0%;
}
.item-title:hover{
    color:#da996f;
}
</style>