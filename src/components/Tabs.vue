<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(1)"
            v-bind:class="{
              'text-green-600 bg-white': openTab !== 1,
              'text-white bg-green-600': openTab === 1,
            }"
          >
            Satellite
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(2)"
            v-bind:class="{
              'text-green-600 bg-white': openTab !== 2,
              'text-white bg-green-600': openTab === 2,
            }"
          >
            Yield Prediction
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(3)"
            v-bind:class="{
              'text-green-600 bg-white': openTab !== 3,
              'text-white bg-green-600': openTab === 3,
            }"
          >
            Articles
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(4)"
            v-bind:class="{
              'text-green-600 bg-white': openTab !== 4,
              'text-white bg-green-600': openTab === 4,
            }"
          >
            Profile
          </a>
        </li>
      </ul>
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
      >
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <SatelliteTab />
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <YieldPredictionTab />
            </div>
            <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <ArticleTab />
            </div>
            <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }">
              <p>
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
                <br />
                <br />
                Dramatically maintain clicks-and-mortar solutions without
                functional solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SatelliteTab from "@/components/SatelliteTab.vue";
import YieldPredictionTab from "@/components/YieldPredictionTab.vue";
import ArticleTab from "@/components/ArticleTab.vue";
export default {
  name: "pink-tabs",
  components: {
    SatelliteTab,
    YieldPredictionTab,
    ArticleTab,
  },
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
