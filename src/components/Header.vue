<script setup lang="ts">
defineProps(["logo"]);
</script>

<template>
  <div class="header">
    <router-link to="/">
      <img
        v-if="logo"
        src="../assets/Logo.png"
        alt="Build and Launch Logo" />
    </router-link>
    <button @click="$router.push('About')">
      About
    </button>
    <button @click="$router.push('Members')">
      Members
    </button>
    <button @click="$router.push('Contact')">
      Contact
    </button>
    <button
      class="apply"
      @click="$router.push('Apply')">
      Apply
    </button>
  </div>
</template>

<style scoped>
.header {
  position: absolute;
  display: flex;
  max-height: 50px;
  width: 100%;
  margin-top: 12px;
  z-index: 102;
  top: 0;
  background-color: transparent;
}
button {
  background: transparent;
  width: 15em;
  height: 3em;
  color: black;
  text-align: center;
  padding: 0;
}
.apply {
  background: black;
  color: white;
  border-radius: 30px;
  margin-right: 30px;
}

img {
  display: block;
  max-width: 230px;
  max-height: 3em;
  width: auto;
  height: auto;
  background: transparent;
  position: absolute;
  left: 20px;
}
a {
  background-color: transparent;
}
</style>
