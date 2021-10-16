<template>
    <nav >
        <v-app-bar-nav-icon color="#da996f" class="hidden-lg-and-up" @click="drawer = !drawer" ></v-app-bar-nav-icon>
        <v-toolbar color="#010600" class="hidden-md-and-down"  flat  >
            <v-tabs centered slider-color="#da996f">
                <v-tab class="white--text" v-for="link in links" :key="link.text" optional router :to="link.route">{{link.text}}</v-tab>
            </v-tabs>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" color="#010600" hide-overlay>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon color="#da996f">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content class="white--text">
                        <v-list-item-title class="item-title">{{link.text}}</v-list-item-title>
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
            links:[
                { icon: 'home', text: 'Početna', route: '/' },
                { icon: 'info', text: 'O nama', route: '/about' },
                { icon: 'fact_check', text: 'Ponuda', route: '/references' },
                { icon: 'contact_page', text: 'Kontakt', route: '/contact' },
            ],
        }
    }
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