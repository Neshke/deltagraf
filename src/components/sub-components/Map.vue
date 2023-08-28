<template>
   <div style="height: 700px; width: 100%;z-index:0">
    
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 100%;z-index:0"
      scrollWheelZoom="false"
      gestureHandling :options="mapOptions"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
        style="z-index:0"
      />
      <l-marker :lat-lng="withTooltip">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div >
            Deltagraf D.O.O, Ante Protića 2, Smederevo
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng, Icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import { GestureHandling } from "leaflet-gesture-handling";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


export default {
    components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
    data() {
    return {
      zoom: 15,
      center: latLng(44.663663, 20.923159),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withTooltip: latLng(44.663663, 20.923159),
      currentZoom: 15,
      currentCenter: latLng(44.663663, 20.923159),
      mapOptions: {
        gestureHandling:true
      }
    };
  },
}
</script>

<style>

</style>