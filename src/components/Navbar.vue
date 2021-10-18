<template>
    <nav >
        <v-app-bar-nav-icon color="#da996f" class="hidden-lg-and-up" @click="drawer = !drawer" ></v-app-bar-nav-icon>
        <v-toolbar color="#010600" class="hidden-md-and-down"  flat  >
            <v-tabs centered slider-color="#da996f">
                <v-tab class="white--text"  v-for="link in links" :key="link.text" @click="$emit('scroll-down', link)">{{link.text}}</v-tab>
            </v-tabs>
        </v-toolbar>
        <v-navigation-drawer stateless app v-model="drawer" color="#010600" hide-overlay  disable-resize-watcher>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" >
                    <v-list-item-action>
                        <v-icon color="#da996f">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content class="white--text">
                        <v-list-item-title class="item-title"  @click="$emit('scroll-down', link);drawer = !drawer">{{link.text}}</v-list-item-title>
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
                { icon: 'home', text: 'Početna', route: '/', scrollValue: 800, index: 0},
                { icon: 'info', text: 'O nama', route: '/about', scrollValue: 1605, index: 1},
                { icon: 'fact_check', text: 'Ponuda', route: '/references', scrollValue: 830, index: 2 },
                { icon: 'contact_page', text: 'Kontakt', route: '/contact', scrollValue: 830, index: 3 },
            ],
        }
    },
    methods:{
        clickedButton:function(){
            this.$emit('scroll-down', this.links[1].scrollValue)
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