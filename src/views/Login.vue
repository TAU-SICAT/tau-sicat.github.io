<template>
  <div
    class="
      absolute
      align-middle
      left-1/2
      top-1/2
      transform
      -translate-x-1/2 -translate-y-1/2
      flex
      items-center
      justify-center
      min-h-screen
      bg-transparent
      z-20
    "
  >
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-md">
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
            <label class="block" for="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              class="
                w-full
                px-4
                py-2
                mt-2
                border
                rounded-md
                focus:outline-none focus:ring-1 focus:ring-blue-600
              "
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
              class="
                w-full
                px-4
                py-2
                mt-2
                border
                rounded-md
                focus:outline-none focus:ring-1 focus:ring-blue-600
              "
            />
          </div>
          <div class="flex items-baseline justify-between">
            <button
              class="
                px-6
                py-2
                mt-4
                text-white
                bg-blue-600
                rounded-lg
                hover:bg-blue-900
              "
            >
              Login
            </button>
            <a
            href="#"
              class="
                px-6
                py-2
                mt-4
                text-white
                bg-green-600
                rounded-lg
                hover:bg-green-900
              "
              type="none"
              @click="showRegisterForm()"
            >
              Register
            </a>

            <a href="#" class="text-sm text-blue-600 hover:underline"
              >Forgot password?</a
            >
          </div>
        </div>
      </form>
    </div>
  </div>
  <Register :class="{ hidden: showRegister }" />
</template>
<script>
import Register from "@/views/Register.vue";
export default {
  name: "Login",
  setup() {},
  components: {
    Register,
  },
  data() {
    return {
      showRegister: true,
      showLogin: true,
    };
  },
  methods: {
    showRegisterForm() {
      this.showRegister = !this.showRegister;
      this.showLogin = false;
    },
  },
};
</script>
