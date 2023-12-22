<script setup lang="ts">
import Header from "../components/Header.vue";
</script>

<template>
  <div class="container">
    <Header :logo="true" />
    <h1>Contact Us</h1>
    <div class="messageFields">
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
        class="message"
        type="text"
        name=""
        id=""
        placeholder="Message" />
      <button>Send</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 1fr 1fr 5fr 1fr;
  height: 70%;
}

.message {
  height: 1000px;
}

.message::placeholder {
  position: relative;
  bottom: 46px;
}
h1 {
  text-align: left;
  color: black;
  font-weight: bold;
  margin-top: 0;
}

.messageFields {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
}

input {
  border: 4px solid black;
  border-radius: 20px;
  padding-left: 20px;
  width: calc(100% - 30px);
  margin: 12px 12px 0px 0px;
}

input::placeholder {
  color: black;
  font-weight: bold;
  font-size: 16px;
}

.message::target-text {
  position: relative;
  bottom: 46px;
}

input,
textarea {
  color: black;
  font-size: 20px;
}

button {
  background: black;
  width: 100%;
  margin: 12px 12px 0px 0px;
}

@media (height < 500px) {
  .container {
    height: 100%;
  }
}

@media (width< 500px) {
  .container {
    height: 100%;
    width: 100%;
    overflow: scroll;
  }
  .messageFields {
    width: 80%;
    padding: 10px;
  }
}
</style>
