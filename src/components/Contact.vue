<script setup lang="ts">
import Header from "../components/Header.vue";
</script>

<template>
  <div class="container">
    <Header :logo="true" />
    <h1>Contact Us</h1>
    <input
      type="text"
      name=""
      id=""
      placeholder="Name" />

    <input
      type="text"
      name=""
      id=""
      placeholder="Email" />
    <input
      type="text"
      name=""
      id=""
      placeholder="Message" />
    <button>SEND</button>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 1fr 2fr 1fr 1fr 1fr;
  height: 60%;
}

h1 {
  text-align: left;
  color: black;
  font-weight: bold;
}

input {
  width: 450px;
  height: 40px;
  border: 4px solid black;
  border-radius: 20px;
  padding-left: 20px;
}

input::placeholder {
  color: black;
  font-weight: bold;
  font-size: 15px;
}

button {
  background: black;
  width: 480px;
}
</style>
