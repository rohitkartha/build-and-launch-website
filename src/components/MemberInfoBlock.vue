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
    <div class="memberName">
      {{ memberBlock.name }}
    </div>
    <div class="memberTitle">
      {{ memberBlock.title }}
    </div>
  </div>
</template>

<style scoped>
.memberContainer {
  display: grid;
  align-items: center;
  height: 250px;
  width: 200px;
  padding: 12px;
  background: transparent;
}

img {
  height: 200px;
  width: 200px;
}

.memberName {
  color: black;
  text-align: left;
  background: transparent;
  font-size: 20px;
  font-weight: bold;
}
.memberTitle {
  color: black;
  text-align: left;
  background: transparent;
}

@media (width < 750px) {
  .memberContainer {
    min-height: 280px;
    box-sizing: border-box; /* NEW */
  }
}
</style>
