<script setup lang="ts">
import { defineProps } from "vue";
import member from "../types/member";

defineProps<{ memberBlock: member }>();
</script>

<template>
  <div class="memberContainer">
    <img
      :src="memberBlock.imageUrl"
      alt="member image" />
    <h3>{{ memberBlock.name }}</h3>
    <h4>{{ memberBlock.title }}</h4>
  </div>
</template>

<style scoped>
.memberContainer {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 220px;
  align-items: center;
}

img {
  width: 200px;
  height: 160px;
}

h3 {
  color: black;
  margin: none;
}

h4 {
  color: black;
  margin: none;
}
</style>
