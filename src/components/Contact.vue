<template>
    <div id="contact-div">
        
        <div style="height:110px;background-color:#da996f"/>
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
                        <v-icon large color="#da996f">{{n.icon}}</v-icon>
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
                    color="#da996f"
                    label="Ime"
                    required
                    outlined
                    dark
                    @input="$v.firstName.$touch()"
                    @blur="$v.firstName.$touch()"
                    ></v-text-field>

                    <v-text-field
                    v-model="lastName"
                    :error-messages="lastNameErrors"
                    color="#da996f"
                    label="Prezime"
                    required
                    outlined
                    dark
                    @input="$v.lastName.$touch()"
                    @blur="$v.lastName.$touch()"
                    ></v-text-field>

                    <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="E-pošta"
                    color="#da996f"
                    required
                    outlined
                    dark
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    ></v-text-field>

                    <v-text-field
                    v-model="phone"
                    :error-messages="phoneErrors"
                    label="Phone"
                    color="#da996f"
                    required
                    outlined
                    dark
                    @input="$v.phone.$touch()"
                    @blur="$v.phone.$touch()"
                    ></v-text-field>

                    <v-textarea
                    v-model="desc"
                    label="Poruka"
                    color="#da996f"
                    required
                    outlined
                    dark
                    @input="$v.desc.$touch()"
                    @blur="$v.desc.$touch()"
                    ></v-textarea>

                    <v-btn
                    class="mr-4"
                    @click="submit"
                    color="#da996f"
                    >
                    Pošalji
                    </v-btn>
                    <v-btn @click="clear" color="#da996f">
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
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.phone = ''
        this.desc = ''
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
    border-bottom:2px solid #da996f;
    border-top:2px solid #da996f;
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