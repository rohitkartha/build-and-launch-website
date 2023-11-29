<script setup lang="ts">
import members from "../members";
import MemberInfoBlock from "./MemberInfoBlock.vue";
import Header from "./Header.vue";
</script>

<template>
  <div class="container">
    <Header :logo="true" />
    <h1>Meet the Executive Board</h1>
    <div class="membersContainer">
      <MemberInfoBlock
        v-for="member in members"
        :member-block="member" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 1fr 1fr 6fr;
}
.membersContainer {
  display: flex;
  flex-wrap: wrap;
  background: transparent;
}

h1 {
  color: black;
  font-weight: bold;
  text-align: left;
}
</style>
