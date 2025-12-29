<script setup>
import Bene from './NavComp.vue';
</script>

<template>
  <nav class="bg-purple-blue" v-if="showNavbar">
    <div class="max-w-full w-full sm:px-8 md:px-16 lg:px-16">
      <div class="h-24 flex relative items-center sm:justify-center md:justify-between lg:justify-between">
        <div class="text-white text-2xl font-bold tracking-wide sm:hidden md:block lg:block block">
          <span>[EDUFREE]</span>
        </div>
        <Bene />
      </div>
    </div>
  </nav>
</template>

<script>
// import { ref, watch } from "vue";

export default {
  name: "Navbar",
  data() {
    return {
      showNavbar: true,
      notNavbar: ["/register", "/Register", "/Login", "/login", "/open-course", "/dashboard-learn", "/dashboard"],
    };
  },
  watch: {
    $route(to, from) {
      if (this.notNavbar.includes(to.path)) {
        this.showNavbar = false;
      } else {
        this.showNavbar = true;
      }
    },
  },
};
</script>
