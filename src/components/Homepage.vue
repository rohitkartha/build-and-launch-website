<script setup lang="ts"></script>

<template>
  <div class="homepage-container">
    <div class="header">
      <button>About</button>
      <button>Members</button>
      <button>Contact</button>
      <button>Apply</button>
    </div>
    <div class="image-logo">
      <img
        src="../assets/Logo.png"
        alt="Michigan Build and Launch Logo" />
    </div>
    <div class="apply"></div>
  </div>
</template>

<style scoped>
.homepage-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}
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

.image-logo {
  width: 850px;
  height: 320px;
}
</style>
