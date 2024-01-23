<script setup lang="ts"></script>

<template>
  <div class="eclipses">
    <div class="yellow"></div>
    <div class="blue"></div>
  </div>
</template>

<style scoped>
.eclipses {
  position: relative;
  overflow: hidden;
  height: 100%;
}
.yellow {
  border-radius: 1019px;
  background: rgba(251, 222, 156, 0.62);
  position: absolute;
  z-index: 100;
  right: 70%;
  bottom: 50%;
}

.blue {
  border-radius: 1019px;
  background: rgba(211, 249, 250, 0.58);
  position: absolute;
  z-index: 101;
  right: -70%;
  bottom: -50%;
}

@media (width < 768px) {
  .yellow {
    right: 45%;
    bottom: 70%;
  }
  .blue {
    left: 45%;
    top: -70%;
  }
}
</style>
