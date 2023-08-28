<template>
  <div class="localeS">
    <button
      class="flex items-center ul-button mt-7"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <span class="ml-2">{{ $i18n.locale.toUpperCase() }}</span>
     
    </button>
    <transition name="dropdown-fade">
      <ul v-on-clickaway="hideDropdown" v-if="isVisible" ref="dropdown" class="ul-style mt-16">
        <li>
          <p
            @click.prevent="setLocale('en')"
            ref="account"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.up.exact.prevent=""
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
           <router-link to="/en/site">
            <v-img src="/flag_en.svg" alt="english flag" height="16px" width="28px" class="flags mt-2" />
            <span class="mr-7 pl-2 title">English</span>
           </router-link>
          </p>
          
        </li>
        <li >
          <p
            @click.prevent="setLocale('rs')"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent=""
            @keydown.tab.exact="hideDropdown"
            @keydown.esc.exact="hideDropdown"
          >
            <router-link to="/rs/site">
            <v-img src="/flag_rs.svg" alt="english flag" height="16px" width="28px" class="flags mt-2" />
            <span class="mr-7 pl-2 title">Srpski</span>
            </router-link>
          </p>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  mixins: [ clickaway ],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      if (this.isVisible) {
        // this.$refs.account.focus()
        this.$refs.dropdown.children[0].children[0].focus()
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
    },
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
      this.hideDropdown()
    }
  }
}
</script>

<style scoped>
  .dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: all .1s ease-in-out;
  }
  .dropdown-fade-enter, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }
  .localeS{
    padding-bottom:10px;
  }
  ul {
    list-style-type: none;
  }
  a{
    text-decoration: none;
    color:white;
  }
span{
  color:white;
}
span:hover{
  color: #ba9a31;
  border-radius: 5px;
  text-decoration: none;
}
.ul-button{
  position: absolute;
  right:35px;
}
@media screen and (min-width: 480px) {
  .ul-button{
    position: absolute;
    right: 20vw;
    margin-top:30px;
    z-index: 999;
  }
}
@media screen and (max-width: 992px) {
  .ul-style{
    position:relative;
    background-color:green;
    right: 15px;
    z-index: 999;
  }
}
.ul-style{
  position:relative;
  background-color:#010600;
  position: absolute;
  z-index: 999;
  right:15vw;
  width: 200px;
}
.flags{
  float:left
}
</style>
