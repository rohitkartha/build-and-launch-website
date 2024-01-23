<script setup lang="ts">
import router from "../router/router";

function goApply() {
  router.push("Apply");
}
</script>

<template>
  <div class="homepage-container">
    <img
      class="image-logo"
      src="../assets/Logo.png"
      alt="Michigan Build and Launch Logo" />
    <button
      class="apply-button"
      @click="goApply">
      Apply
    </button>
  </div>
</template>

<style scoped>
.homepage-container {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  height: 28%;
  width: 24%;
  top: 34%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
}

.image-logo {
  width: 300px;
}

img {
  background: transparent;
  object-fit: contain;
}

.apply-button {
  width: 186px;
  height: 68px;
  border-radius: 50px;
  background: #d3f9f9;
  color: black;
}

@media (height < 500px) {
}
</style>
