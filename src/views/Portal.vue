<template>
  <div class="portal">
    <Navigation />
    <div class="">
      <div id="map" class="h-screen w-full z-0"></div>

      <div
        class="fixed top-1/4 z-auto border bg-white h-1/2 w-1/4 align-top right-0 p-6 m-2 rounded-sm"
        :class="[{ hidden: !isAreaClicked }]"
      >
        <div class="flex justify-end">
          <button
            @click="isAreaClicked = false"
            class="right-0 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Close
          </button>
        </div>
        <h1
          class="align-middle text-center text-lg pb-4 pt-5 font-semibold text-gray-600"
        >
          Information
        </h1>
        <div class="grid-flow-col grid-cols-1">
          <div class="grid grid-flow-col">
            <h2 class="text-sm pr-4">Area in Hectare:</h2>
            <h2 class="text-right">{{ area }}</h2>
          </div>
          <div class="grid grid-flow-col">
            <h2 class="text-sm pr-4">NDVI Mean:</h2>
            <h2 class="text-right">{{ ndvi }}</h2>
          </div>
          <div class="grid grid-flow-col">
            <h2 class="text-sm pr-4">Predicted Yield in MT:</h2>
            <h2 class="text-right">{{ forecast_yield }}</h2>
          </div>
        </div>
        <div class="p-4 text-center">
          <p class="text-xs leading-relaxed break-normal text-red-300">
            This prediction is based on March 30, 2021 LandSat 8 image with the
            projection of WGS 84 / UTM zone 51N
          </p>
        </div>
      </div>
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
import block1 from "@/data/sanclem/block1.json";
import block2 from "@/data/sanclem/block2.json";
import block3 from "@/data/sanclem/block3.json";
import block4 from "@/data/sanclem/block4.json";
import block5 from "@/data/sanclem/block5.json";
import block6 from "@/data/sanclem/block6.json";
import block7 from "@/data/sanclem/block7.json";
import block8 from "@/data/sanclem/block8.json";
import block9 from "@/data/sanclem/block9.json";
// import bambanForecast from "@/data/sanclem/bamban-forecast.json";

export default {
  name: "Portal",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      center: [37, 7749, -122, 4194],
      mapDiv: null,
      mapDiv2: null,
      area: null,
      ndvi: null,
      forecast_yield: null,
      isAreaClicked: false,
    };
  },
  methods: {
    setupLeafletMap: function () {
      this.mapDiv = L.map("map").setView([15.4755, 120.5963], 10.2);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
      }).addTo(this.mapDiv);
      L.geoJSON(anao, {}).addTo(this.mapDiv).on("click", this.onMapClick);
      L.geoJSON(bamban, {}).addTo(this.mapDiv).on("click", this.onMapClick);
      L.geoJSON(camiling, {}).addTo(this.mapDiv).on("click", this.onMapClick);
      L.geoJSON(capas, {}).addTo(this.mapDiv).on("click", this.onMapClick);
      L.geoJSON(concepcion, {}).addTo(this.mapDiv).on("click", this.onMapClick);
      L.geoJSON(gerona, {}).addTo(this.mapDiv).on("click", this.onMapClick);
      L.geoJSON(lapaz, {}).addTo(this.mapDiv).on("click", this.onMapClick);
      L.geoJSON(mayantoc, {}).addTo(this.mapDiv).on("click", this.onMapClick);
      L.geoJSON(moncada, {}).addTo(this.mapDiv).on("click", this.onMapClick);
      L.geoJSON(paniqui, {}).addTo(this.mapDiv).on("click", this.onMapClick);
      L.geoJSON(pura, {}).addTo(this.mapDiv).on("click", this.onMapClick);
      L.geoJSON(ramos, {}).addTo(this.mapDiv).on("click", this.onMapClick);
      L.geoJSON(sanclemente, {})
        .addTo(this.mapDiv)
        .on("click", this.onSanClementeClick);
      L.geoJSON(santaignacia, {})
        .addTo(this.mapDiv)
        .on("click", this.onMapClick);
      L.geoJSON(sanmanuel, {}).addTo(this.mapDiv).on("click", this.onMapClick);
      L.geoJSON(sanjose, {}).addTo(this.mapDiv).on("click", this.onMapClick);
      L.geoJSON(tarlacCT, {}).addTo(this.mapDiv).on("click", this.onMapClick);
      L.geoJSON(victoria, {}).addTo(this.mapDiv).on("click", this.onMapClick);
    },

    onMapClick: function () {
      alert("No available data for this location");
    },

    onSanClemBlock1Click: function () {
      this.area = 91.0;
      this.ndvi = 1.444;
      this.forecast_yield = 811.559;
      this.isAreaClicked = true;
      this.onDivResize();
    },

    onSanClemBlock2Click: function () {
      this.area = 0.59;
      this.ndvi = 0.253;
      this.forecast_yield = 2.518;
      this.isAreaClicked = true;
      this.onDivResize();
    },

    onBlockClick: function (predictedYield, blockArea) {
      alert("Hello" + predictedYield);
      this.area = blockArea;
      this.ndvi = 0.253;
      this.forecast_yield = predictedYield;
      this.isAreaClicked = true;
      this.onDivResize();
    },

    onDivResize: function () {
      window.setTimeout(function () {
        window.mapDiv2.invalidateSize();
      }, 0);
    },

    onEachFeature: function (feature) {
      console.log(feature.properties);
    },

    onSanClementeClick: function () {
      // for (let i = 0; i < bambanForecast.forecasts[0].length(); i++) {
      //   console.log("Hi");
      // }

      // const test = bambanForecast.forecasts[0].area
      // const len = bambanForecast.forecasts[0].yield
      // console.log(test)
      // console.log(len)

      this.mapDiv.off().remove();
      this.mapDiv2 = L.map("map").setView([15.7081, 120.3692], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
      }).addTo(this.mapDiv2);

      L.geoJSON(sanclemente, {}).addTo(this.mapDiv2);

      L.geoJSON(block1, {})
        .addTo(this.mapDiv2)
        .on("click", this.onSanClemBlock2Click);

      L.geoJSON(block2, {})
        .addTo(this.mapDiv2)
        .on("click", this.onSanClemBlock2Click);

      L.geoJSON(block3, {})
        .addTo(this.mapDiv2)
        .on("click", this.onSanClemBlock2Click);

      L.geoJSON(block4, {})
        .addTo(this.mapDiv2)
        .on("click", this.onSanClemBlock2Click);

      L.geoJSON(block5, {})
        .addTo(this.mapDiv2)
        .on("click", this.onSanClemBlock2Click);

      L.geoJSON(block6, {})
        .addTo(this.mapDiv2)
        .on("click", this.onSanClemBlock2Click);

      L.geoJSON(block7, {})
        .addTo(this.mapDiv2)
        .on("click", this.onSanClemBlock2Click);

      L.geoJSON(block8, {})
        .addTo(this.mapDiv2)
        .on("click", this.onSanClemBlock2Click);

      L.geoJSON(block9, {})
        .addTo(this.mapDiv2)
        .on("click", this.onBlockClick.bind(10, 20));
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>
