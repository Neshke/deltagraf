<template>
    <nav  >
        <LocSw />
        <v-app-bar-nav-icon color="#ba9a31" class="hidden-lg-and-up" @click="drawer = !drawer" width="60" height="60" ></v-app-bar-nav-icon>
        <v-toolbar color="#010600" class="hidden-md-and-down"  flat  >
            <v-tabs centered slider-color="#ba9a31">
                <v-tab class="white--text"  v-for="link in links" :key="link.text"  @click="navigate(link)" id="navLink">{{ $t(`nav.${link.text}`) }}</v-tab>
            </v-tabs>
        </v-toolbar>
        
        <v-navigation-drawer app v-model="drawer"  color="#010600" hide-overlay  disable-resize-watcher >
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" >
                    <v-list-item-action>
                        <v-icon color="#ba9a31">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content class="white--text">
                        <v-list-item-title class="item-title"  @click="navigate(link);drawer = !drawer">{{ $t(`nav.${link.text}`) }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import LocSw from './LocaleSwitcher.vue'

export default {
    components:{
        LocSw,
    },
    data() {
        return{
            drawer:false,
            counter:0,
            scrollValue: 0,
            links:[
                { icon: 'home', text: 'title1', id:"#home-div"},
                { icon: 'local_offer', text: 'title2', id:"#offers-div"},
                { icon: 'fact_check', text: 'title3', id:"#about-div" },
                { icon: 'contact_page', text: 'title4', id:"#references-div" },
                { icon: 'info', text: 'title5', id:"#contact-div" },
            ],
        }
    },
    methods:{
        navigate:function(link){
                const div = document.querySelector(link.id)
                div.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
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
    color:#ba9a31;
}
</style>