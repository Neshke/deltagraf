<template>
  <div id="references-div"  >
    <div style="height:110px;background-color:#da996f"/>
    <h1 class="display-3 black--text text-center pa-3 pb-12" >
      <div data-aos="slide-down" data-aos-delay="300"><div data-aos="fade-down" data-aos-delay="300">Reference</div></div>
      </h1>
      
        <v-container>
          <v-row width="600" class="pb-8">
            <template v-for="n in logos">
              <v-col
              :key="n"
              cols="12"
              lg="2">
              <a :href="n.src">
                <v-img
                  height="10vh"
                  :src="n.img"
                  :title="n.alt"
                  eager
                  contain
                  >
                  </v-img>
              </a>
              </v-col>
            </template>
          </v-row>
        </v-container>
  </div>
</template>

<script>


import n1 from "../assets/references-logo/n1.png"
import n2 from "../assets/references-logo/n2.png"
import n3 from "../assets/references-logo/n3.jpg"
import n4 from "../assets/references-logo/n4.png"
import n5 from "../assets/references-logo/n5.png"
import n6 from "../assets/references-logo/n6.png"
import n7 from "../assets/references-logo/n7.jpg"
import n8 from "../assets/references-logo/n8.png"
import n9 from "../assets/references-logo/n9.png"
import n10 from "../assets/references-logo/n10.png"
import n11 from "../assets/references-logo/n11.png"
import n12 from "../assets/references-logo/n12.png"
import n13 from "../assets/references-logo/n13.png"
import n14 from "../assets/references-logo/n14.png"
import n15 from "../assets/references-logo/n15.jpg"
import n16 from "../assets/references-logo/n16.png"
import n17 from "../assets/references-logo/n17.png"
import n18 from "../assets/references-logo/n18.jpg"

export default {
    data: () => ({
      model: 0,
      
      logos:[
        {
          src:'https://mts.rs/',
          alt:'MTS',
          img:n1,
        },
        {
          src:'https://www.srbija.gov.rs/',
          alt:'Vlada Republike Srbije',
          img:n2,
        },
        {
          src:'http://www.sd.os.sud.rs/',
          alt:'Osnovni sud u Smederevu',
          img:n3,
        },
        {
          src:'http://www.eps.rs/cir',
          alt:'EPS',
          img:n4,
        },
        {
          src:'https://www.domzdravljasd.rs/',
          alt:'Dom zdravlja Smederevo',
          img:n5,
        },
        {
          src:'https://www.nisgazprom.rs/sr/',
          alt:'NIS Petrol',
          img:n6,
        },
        {
          src:'https://hbisserbia.rs/',
          alt:'HBIS SERBIA',
          img:n7,
        },
        {
          src:'https://mts.rs/O-Telekomu?utm_source=google&utm_medium=cpc&utm_campaign=Srbija_11062021_Korporativna-Telekom',
          alt:'Telekom Srbija',
          img:n8,
        },
        {
          src:'https://www.uns.ac.rs/',
          alt:'Univerzitet u Novom Sadu',
          img:n9,
        },
        {
          src:'http://www.zelenilosd.rs/',
          alt:'JKP Zеlenilo Smederevo',
          img:n10,
        },
        {
          src:'https://www.smederevo.org.rs/',
          alt:'Grad Smederevo',
          img:n11,
        },
        {
          src:'https://www.infostan.rs/',
          alt:'Infostan',
          img:n12,
        },
        {
          src:'https://sbpbkovin.rs/',
          alt:'SPBP Kovin',
          img:n13,
        },
        {
          src:'http://vigimnazija.edu.rs/',
          alt:'Šesta Beogradska gimnazija',
          img:n14,
        },
        {
          src:'https://www.zcvranje.com/',
          alt:'Dom zdravlja - Zdravstveni centar Vranje',
          img:n15,
        },
        {
          src:'https://restoranvinogradi.rs/',
          alt:'Restoran Vinogradi Grocka',
          img:n16,
        },
        {
          src:'http://tirsova.rs/',
          alt:'Tiršova',
          img:n17,
        },
        {
          src:'https://www.dzmladenovac.rs/',
          alt:'Dom zdravlja Mladenovac',
          img:n18,
        },
      ]
    }),
  }
</script>

<style scoped>
#references-div{
    overflow-x:hidden;
    background-color: white;
}
@media screen and (min-width: 480px) {
  #references-div{
    overflow-x:hidden;
    background-color: white;
    height:99vh;
  }
}
</style>