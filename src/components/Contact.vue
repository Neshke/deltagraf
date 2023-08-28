<template>
    <div id="contact-div">
        
        <div style="height:110px;background-color:#ba9a31"/>
        <div data-aos="fade-down" data-aos-delay="300">
            <h1 class="display-3 white--text text-center pa-8" data-aos="slide-down" data-aos-delay="300">{{$t('contact.title')}}</h1>
        </div>
        <div class="map">
            <Map />
        </div>
        <div class="form text-center">
            <v-container class="contact-header">
                <v-row class="pt-5 pb-3 white--text">
                  <v-col cols="12" lg="3" v-for="n in info" :key="n">
                    <v-row justify="center">
                        <v-icon large color="#ba9a31">{{n.icon}}</v-icon>
                    </v-row>
                    <v-row justify="center">
                      <h1  class="title">{{ $t(`contact.${n.title}`) }}</h1>
                    </v-row>
                    <v-row justify="center">
                      <p class="subtitle-1 sub-pre">{{ $t(`contact.${n.subtitle}`) }}</p>
                    </v-row>
                  </v-col>
                </v-row>
            </v-container>
            <h1 class="display-1 white--text text-center pa-8" >{{ $t(`contact.form`) }}</h1>
            <p class=" pa-10 white--text text-center " style="word-break: break-word;">{{$t('contact.formInfo')}}</p>
        <v-container class="input-container text-center ">
                <form>
                    <v-text-field
                    v-model="firstName"
                    :error-messages="firstNameErrors"
                    :label="$t('contact.formFName')"
                    color="#ba9a31"
                    required
                    outlined
                    dark
                    validate-on-blur
                    @input="$v.firstName.$touch()"
                    @blur="$v.firstName.$touch()"
                    />

                    <v-text-field
                    v-model="lastName"
                    :error-messages="lastNameErrors"
                    color="#ba9a31"
                    :label="$t('contact.formLName')"
                    required
                    outlined
                    dark
                    @input="$v.lastName.$touch()"
                    @blur="$v.lastName.$touch()"
                    ></v-text-field>

                    <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    :label="$t('contact.formEmail')"
                    color="#ba9a31"
                    required
                    outlined
                    dark
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    />

                    <v-text-field
                    v-model="phone"
                    :error-messages="phoneErrors"
                    :label="$t('contact.formPhone')"
                    color="#ba9a31"
                    required
                    outlined
                    dark
                    @input="$v.phone.$touch()"
                    @blur="$v.phone.$touch()"
                    />

                    <v-textarea
                    v-model="desc"
                    :label="$t('contact.formMessage')"
                    color="#ba9a31"
                    required
                    outlined
                    dark
                    @input="$v.desc.$touch()"
                    @blur="$v.desc.$touch()"
                    />

                    <v-btn
                    class="mr-4"
                    @click="submit"
                    color="#ba9a31"
                    :disabled="$v.$anyError"
                    dark
                    >
                    {{$t('contact.button1')}}
                    </v-btn>
                    <v-btn @click="clear" color="#ba9a31">
                    {{$t('contact.button2')}}
                    </v-btn>
                </form>
            </v-container>
        </div>
    </div>
</template>

<script>
import Map from '../components/sub-components/Map.vue'
import { validationMixin } from 'vuelidate'
import { required, minLength, email,numeric } from 'vuelidate/lib/validators'


export default {
    data: () => ({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      desc:'',
      validated: true,
      sent: false,
      form: [],
      info:[
        {
          icon: 'place',
          title: 'info1',
          subtitle: 'address1',
        },
        {
          icon: 'place',
          title: 'info2',
          subtitle: 'address2',
        },
        {
          icon: 'call',
          title: 'info3',
          subtitle: 'address3',
        },
        {
          icon: 'schedule',
          title: 'info4',
          subtitle: 'address4',
        }
      ],
    }),
    components: {
        Map,
    },
    mixins: [validationMixin],
    validations: {
      firstName: { required, minLength: minLength(3)},
      lastName: { required, minLength: minLength(3)},
      phone: {required,numeric, minLength:minLength(9) },
      email: { required, email },
    },

    computed: {
      firstNameErrors () {
        const errors = []
        if (!this.$v.firstName.$dirty) return errors
        console.log(this.$t('contact.title'))
        !this.$v.firstName.required && errors.push(this.$t('contact.fNameError1'))
        !this.$v.firstName.minLength && errors.push(this.$t('contact.fNameError2'))
        return errors
      },
      lastNameErrors () {
        const errors = []
        if (!this.$v.lastName.$dirty) return errors
        !this.$v.lastName.required && errors.push(this.$t('contact.lNameError1'))
        !this.$v.lastName.minLength && errors.push(this.$t('contact.lNameError2'))
        return errors
      },
      phoneErrors () {
        const errors = []
        if (!this.$v.phone.$dirty) return errors
        !this.$v.phone.numeric && errors.push(this.$t('contact.phoneError1'))
        !this.$v.phone.required && errors.push(this.$t('contact.phoneError2'))
        !this.$v.phone.minLength && errors.push(this.$t('contact.phoneError3'))
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push(this.$t('contact.emailError1'))
        !this.$v.email.required && errors.push(this.$t('contact.emailError2'))
        return errors
      },
    },

    methods: {
      submit (e) {
        e.preventDefault()
        this.form.push(this.firstName)
        this.form.push(this.lastName)
        this.form.push(this.email)
        this.form.push(this.phone)
        this.form.push(this.desc)
        var querystring = require('querystring');

        this.axios.post(
              "https://deltagraf.rs/about.php",
              querystring.stringify(this.form)
          )
          alert(this.$t('contact.alert'))
        this.clear()
      },
      clear () {
        this.$v.$reset()
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.phone = ''
        this.desc = ''
        this.form = []
      },
    },
}
addEventListener("load", function() {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
})
</script>

<style scoped>
#contact-div{
    background-color:#010600;
    overflow-x:hidden;
    overflow-y:hidden;
}
.contact-header{
  margin-left:10rem;
  margin-right:20rem;
}
.map{
    background-color:white;
    z-index:0;
    border-bottom:2px solid #ba9a31;
    border-top:2px solid #ba9a31;
}
.form{
  background-color:black;
  position:relative;
  margin-top:-200px;
  left: 50%;
  transform: translateX(-50%);
}
@media screen and (min-width: 480px) {
  .form{
  background-color:#010600;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  position:relative;
  margin-top:-200px;
  left: 50%;
  transform: translateX(-50%);
}
@media screen and (min-width: 600px) {
  .input-container{
    width: 35rem;
  }
}
}
.sub-pre{
  white-space: pre;
}

</style>