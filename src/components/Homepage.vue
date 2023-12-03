<script setup lang="ts">
import Header from "../components/Header.vue";
import router from "../router/router";

function goApply() {
  router.push("Apply");
}
</script>

<template>
  <div class="homepage-container">
    <Header :logo="true"></Header>

    <div class="image-logo">
      <img
        src="../assets/Logo.png"
        alt="Michigan Build and Launch Logo" />
    </div>

    <div class="apply">
      <button
        class="apply-button"
        @click="goApply">
        Apply
      </button>
    </div>
  </div>
</template>

<style scoped>
.homepage-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}

.image-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  background: transparent;
  object-fit: contain;
}

.apply-button {
  background-color: #ddd;
  background: black;
  color: white;
  width: 10em;
  height: 3em;
  text-align: center;
  display: inline-block;
  border-radius: 16px;
}

.apply {
  margin-top: 20px;
}
</style>
