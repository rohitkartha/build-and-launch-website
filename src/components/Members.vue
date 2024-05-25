<script setup lang="ts">
import members from "../members";
import MemberInfoBlock from "./MemberInfoBlock.vue";
</script>

<template>
  <div class="container">
    <h1>Meet the Executive Board</h1>
    <div class="membersContainer">
      <div class="overflow">
        <MemberInfoBlock
          v-for="member in members"
          :member-block="member" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  height: 80%;
  width: 100%;
  top: 4%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
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
.overflow {
  display: flex;
  flex-wrap: wrap;
}

@media (width < 768px) {
  .container {
    display: block;
  }
  .membersContainer {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    height: 100%;
  }
  h1 {
    font-size: 30px;
    text-align: center;
    height: 1em;
  }
  .overflow {
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
  }
}
</style>
