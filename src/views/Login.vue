<template>
  <div
    class="absolute align-middle left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center min-h-screen bg-transparent z-20"
  >
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-md">
      <router-link to="/">
        <button
          type="button"
          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-100 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span class="sr-only">Close menu</span>
          <!-- Heroicon name: outline/x -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </router-link>

      <div class="flex justify-center">
        <img
          src="../assets/logo/TAU.png"
          class="mr-3 h-24"
          alt="Flowbite Logo"
        />
      </div>
      <h3 class="text-2xl font-bold text-center text-gray-700">
        Login to your account
      </h3>
      <form action="">
        <div class="mt-4">
          <div>
            <!-- <form v-on:submit.prevent="submitForm">
              <label for="username">Username</label>
              <input type="text" id="username" v-model="username">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="password">

              <button type="submit">Login</button>
            </form> -->
            <label class="block" for="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <span class="text-xs tracking-wide text-red-600"
              >Email field is required
            </span>
          </div>
          <div class="mt-4">
            <label class="block">Password</label>
            <input
              type="password"
              placeholder="Password"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="flex items-baseline justify-between">
            <button
              class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Login
            </button>
            <router-link to="/register">
              <a
                href="#"
                class="px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-900"
                type="none"
                @click="showRegisterForm()"
              >
                Register
              </a>
            </router-link>
            <a href="#" class="text-sm text-blue-600 hover:underline"
              >Forgot password?</a
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  setup() {},
  components: {},
  data() {
    return {
      showRegister: true,
      showLogin: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        // this will send a post request to the API

        // const response = await this.$http.post('http://127.0.0.1:8000/api/login/', {
        //   username : this.username,
        //   password : this.password
        // })
        // console.log(response)
        const user = { username: this.username, password: this.password };
        this.$http.post("http://127.0.0.1:8000/api/login/", user);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
