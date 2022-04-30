<template>
  <div class="about">
    <Navigation />
    <div>
      <img
        class="object-cover h-screen w-screen lg:h-96 lg:object-cover md:object-cover md:h-96"
        src="../assets/img/bg.jpg"
        alt="img"
      />
    </div>
    <div
      class="absolute top-10 lg:relative md:relative md:top-0 lg:top-0 md:px-0 lg:px-0 px-8 w-full flex items-center justify-center my-12"
    >
      <div
        class="top-40 w-full md:mx-10 lg:mx-20 bg-white shadow rounded py-12 my-4 lg:px-28 px-8 mx-0"
      >
        <p
          class="md:text-3xl text-xl font-medium leading-7 text-center text-gray-700 mb-8"
        >
          About Us
        </p>
        <div class="w-full bg-gray-200 h-auto my-2 p-4 rounded-md md:p-24">
          <p
            class="text-md text-center justify-center text-gray-600 font-light"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="w-full h-auto py-8">
          <h1 class="text-center text-3xl text-gray-700">Meet the Team</h1>
          <div
            class="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <div
              class="rounded-md w-22 h-auto py-4 object-contain m-3 md:mx-2 lg:mx-8"
            >
              <img
                src="../assets/img/team/pexel.jpg"
                alt="justin"
                class="rounded-full lg:mb-4 md:mb-3"
              />
              <h1
                class="text-center text-md text-gray-800 lg:text-xl md:text-2xl"
              >
                Boróka Batyah
              </h1>
              <h2
                class="text-center text-xs text-gray-500 lg:text-md md:text-md"
              >
                Project Manager
              </h2>
            </div>
            <div
              class="rounded-md w-22 h-auto py-4 object-contain m-3 md:mx-2 lg:mx-8"
            >
              <img
                src="../assets/img/team/justin.jpg"
                alt="justin"
                class="rounded-full lg:mb-4 md:mb-3"
              />
              <h1
                class="text-center text-md text-gray-800 lg:text-xl md:text-2xl"
              >
                Mathéo Émile
              </h1>
              <h2
                class="text-center text-xs text-gray-500 lg:text-md md:text-md"
              >
                Lead Developer
              </h2>
            </div>
            <div
              class="rounded-md w-22 h-auto py-4 object-contain m-3 md:mx-2 lg:mx-8"
            >
              <img
                src="../assets/img/team/robben.jpg"
                alt="robben"
                class="rounded-full lg:mb-4 md:mb-3"
              />
              <h1
                class="text-center text-md text-gray-800 lg:text-xl md:text-2xl"
              >
                Georges Sacha
              </h1>
              <h2
                class="text-center text-xs text-gray-500 lg:text-md md:text-md"
              >
                Jr Developer
              </h2>
            </div>
            <div
              class="rounded-md w-22 h-auto py-4 object-contain m-3 md:mx-2 lg:mx-8"
            >
              <img
                src="../assets/img/team/andrea.jpg"
                alt="andrea"
                class="rounded-full lg:mb-4 md:mb-3"
              />
              <h1
                class="text-center text-md text-gray-800 lg:text-xl md:text-2xl"
              >
                Vera Gerlind
              </h1>
              <h2
                class="text-center text-xs text-gray-500 lg:text-md md:text-md"
              >
                Project Coordinator
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "About",
  components: {
    Navigation,
    Footer,
  },
  setup() {},
};
</script>
