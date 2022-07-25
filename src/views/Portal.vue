<template>
  <div class="portal">
    <Navigation />
    <div>
      <div id="map" class="h-screen"></div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import anao from "@/data/anao.json";
import bamban from "@/data/bamban.json";
import camiling from "@/data/camiling.json";
import capas from "@/data/capas.json";
import concepcion from "@/data/concepcion.json";
import gerona from "@/data/gerona.json";
import lapaz from "@/data/lapaz.json";
import mayantoc from "@/data/mayantoc.json";
import moncada from "@/data/moncada.json";
import paniqui from "@/data/paniqui.json";
import pura from "@/data/pura.json";
import ramos from "@/data/ramos.json";
import sanclemente from "@/data/sanclemente.json";
import santaignacia from "@/data/santaignacia.json";
import sanmanuel from "@/data/sanmanuel.json";
import sanjose from "@/data/sanjose.json";
import tarlacCT from "@/data/tarlacCT.json";
import victoria from "@/data/victoria.json";

export default {
  name: "Portal",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      center: [37, 7749, -122, 4194],
    };
  },
  methods: {
    setupLeafletMapAnao: function () {
      var mapDiv = L.map("map").setView([15.4755, 120.5963], 10.2);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
      }).addTo(mapDiv);
      L.geoJSON(anao, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(bamban, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(camiling, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(capas, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(concepcion, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(gerona, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(lapaz, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(mayantoc, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(moncada, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(paniqui, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(pura, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(ramos, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(sanclemente, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(santaignacia, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(sanmanuel, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(sanjose, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(tarlacCT, {}).addTo(mapDiv).on("click", this.onMapClick);
      L.geoJSON(victoria, {}).addTo(mapDiv).on("click", this.onMapClick);
    },

    onMapClick: function () {
      alert("You Clicked the map");
    },
  },
  mounted() {
    this.setupLeafletMapAnao();
  },
};
</script>
