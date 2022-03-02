<template>
  <div class="home">
    <Navigation />
    <!-- <XyzTransition appear xyz="fade-25% down">
      <h1 class="square font-bold">Im Here</h1>
    </XyzTransition> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Home",
  components: {
    Navigation,
  },
};
</script>
