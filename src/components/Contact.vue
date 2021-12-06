<template>
    <div id="contact-div">
        
        <div style="height:110px;background-color:#ba9a31"/>
        <div data-aos="fade-down" data-aos-delay="300">
            <h1 class="display-3 white--text text-center pa-8" data-aos="slide-down" data-aos-delay="300">Kontakt</h1>
        </div>
        <div class="map">
            <Map />
        </div>
        <div class="form text-center">
            <v-container>
                <v-row class="pt-5 pb-3 white--text">
                  <v-col cols="12" lg="3" v-for="n in info" :key="n">
                    <v-row justify="center">
                        <v-icon large color="#ba9a31">{{n.icon}}</v-icon>
                    </v-row>
                    <v-row justify="center">
                      <h1  class="title">{{n.title}}</h1>
                    </v-row>
                    <v-row justify="center">
                      <p class="subtitle-1 sub-pre">{{n.subtitle}}</p>
                    </v-row>
                  </v-col>
                </v-row>
            </v-container>
            <h1 class="display-1 white--text text-center pa-8" >Kontakt forma</h1>
            <p class=" pa-10 white--text text-center " style="word-break: break-word;">Za sva Vaša pitanja u vezi naših proizvoda i poslovanja na raspolaganju vam stoji prodajni tim kompanije Deltagraf D.O.O. Na sva vaša pitanja odgovorićemo u najkraćem roku.</p>
        <v-container class="input-container text-center ">
                <form>
                    <v-text-field
                    v-model="firstName"
                    :error-messages="firstNameErrors"
                    color="#ba9a31"
                    label="Ime"
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
                    label="Prezime"
                    required
                    outlined
                    dark
                    @input="$v.lastName.$touch()"
                    @blur="$v.lastName.$touch()"
                    />

                    <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="E-pošta"
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
                    label="Phone"
                    color="#ba9a31"
                    required
                    outlined
                    dark
                    @input="$v.phone.$touch()"
                    @blur="$v.phone.$touch()"
                    />

                    <v-textarea
                    v-model="desc"
                    label="Poruka"
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
                    Pošalji
                    </v-btn>
                    <v-btn @click="clear" color="#ba9a31">
                    Očisti polja
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
          title: 'Sedište',
          subtitle: 'Beogradski put 29, \n11300 Smederevo, Srbija',
        },
        {
          icon: 'place',
          title: 'Kancelarija',
          subtitle: 'Ante Protića 2, \n11300 Smederevo, Srbija',
        },
        {
          icon: 'call',
          title: 'Kontakt podaci',
          subtitle: 'E-pošta: info@deltagraf.rs\n Telefon: 026/611-456',
        },
        {
          icon: 'schedule',
          title: 'Radno vreme',
          subtitle: ' Pon-Sub\n 07:30-15:30',
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
        !this.$v.firstName.required && errors.push('Polje Ime je obavezno.')
        !this.$v.firstName.minLength && errors.push('Ime mora imati više od 3 slova')
        return errors
      },
      lastNameErrors () {
        const errors = []
        if (!this.$v.lastName.$dirty) return errors
        !this.$v.lastName.required && errors.push('Polje Prezime je obavezno.')
        !this.$v.lastName.minLength && errors.push('Prezime mora imati više od 3 slova')
        return errors
      },
      phoneErrors () {
        const errors = []
        if (!this.$v.phone.$dirty) return errors
        !this.$v.phone.numeric && errors.push('Nepravilno unet broj')
        !this.$v.phone.required && errors.push('Polje Broj telefona je obavezno.')
        !this.$v.phone.minLength && errors.push('Broj mora sadržati minimum 9 cifara')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Nepravilno uneta E-pošta')
        !this.$v.email.required && errors.push('Polje E-pošta je obavezno')
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

        console.log(this.form[0])
        this.axios.post(
              "http://localhost/dist/about.php",
              querystring.stringify(this.form)
          )
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
  width:850px;
  left: 50%;
  transform: translateX(-50%);
}
}
.sub-pre{
  white-space: pre;
}

</style>