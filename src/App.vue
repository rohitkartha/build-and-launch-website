<script setup lang="ts">
import Eclipses from "./components/Eclipses.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import MobileHeader from "./components/MobileHeader.vue";
</script>

<template>
  <RouterView></RouterView>
  <Eclipses />
  <Header :logo="true" />
  <MobileHeader class="mobile" />
  <Footer />
</template>

<style>
* {
  width: 100%;
  height: 100%;
  background-color: white;
}
.mobile {
  visibility: hidden;
}
@media (width < 768px) {
  .header {
    visibility: hidden;
  }
  .mobile {
    visibility: visible;
  }
}

#app {
}
</style>
