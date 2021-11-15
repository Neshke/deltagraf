<template>
    <nav style="z-index:1001" >
        <v-app-bar-nav-icon color="#da996f" class="hidden-lg-and-up" @click="drawer = !drawer" width="60" height="60" ></v-app-bar-nav-icon>
        <v-toolbar color="#010600" class="hidden-md-and-down"  flat  >
            <v-tabs centered slider-color="#da996f">
                <v-tab class="white--text"  v-for="link in links" :key="link.text"  @click="navigate(link)" id="navLink">{{link.text}}</v-tab>
            </v-tabs>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer"  color="#010600" hide-overlay  disable-resize-watcher >
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" >
                    <v-list-item-action>
                        <v-icon color="#da996f">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content class="white--text">
                        <v-list-item-title class="item-title"  @click="navigate(link);drawer = !drawer">{{link.text}}</v-list-item-title>
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
                { icon: 'home', text: 'Početna', id:"#home-div"},
                { icon: 'info', text: 'Ponuda', id:"#offers-div"},
                { icon: 'fact_check', text: 'O nama', id:"#about-div" },
                { icon: 'contact_page', text: 'Reference', id:"#references-div" },
                { icon: 'contact_page', text: 'Kontakt', id:"#contact-div" },
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
    color:#da996f;
}
</style>