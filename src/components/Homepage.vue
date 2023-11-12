<script setup lang="ts">
import Header from "../components/Header.vue";
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
      <button class="apply-button">Apply</button>
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
  width: 850px;
  height: 320px;
}

.apply-button {
  background-color: #ddd;
  background: black;
  color: white;
  width: 10em;
  height: 5em;
  text-align: center;
  display: inline-block;
  border-radius: 16px;
}
</style>
