<script setup lang="ts">
import members from "../members";
import MemberInfoBlock from "./MemberInfoBlock.vue";
import Header from "./Header.vue";
</script>

<template>
  <Header :logo="true" />

  <div class="membersContainer">
    <MemberInfoBlock
      v-for="member in members"
      :member-block="member" />
  </div>
</template>

<style scoped>
.membersContainer {
  display: flex;
  height: 80%;
  padding-top: 20%;
}
</style>
