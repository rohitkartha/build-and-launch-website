<script setup lang="ts">
defineProps(["logo"]);
</script>

<template>
  <div class="header">
    <img
      v-if="logo"
      src="../assets/Logo.png"
      alt="Build and Launch Logo" />
    <button @click="$router.push('About')">
      About
    </button>
    <button @click="$router.push('Members')">
      Members
    </button>
    <button @click="$router.push('Contact')">
      Contact
    </button>
    <button @click="$router.push('Apply')">
      Apply
    </button>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
}
button {
  background: transparent;
  width: 6em;
  height: 3em;
  color: black;
}

img {
  width: 7em;
  height: 3em;
  background: transparent;
}
</style>
