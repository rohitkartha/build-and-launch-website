<script setup lang="ts">
import { ref as ref2 } from "vue";

import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
} from "firebase/database";

const name = ref2();
const email = ref2();
const message = ref2();

const firebaseConfig = {
  apiKey:
    "AIzaSyDJW0XkYgb28Zbloj53MCX-CR3vPntuCaM",
  authDomain:
    "build-and-launch-bot.firebaseapp.com",
  databaseURL:
    "https://build-and-launch-bot-default-rtdb.firebaseio.com",
  projectId: "build-and-launch-bot",
  storageBucket:
    "build-and-launch-bot.appspot.com",
  messagingSenderId: "978403477393",
  appId:
    "1:978403477393:web:88b67bcc3495efe9027c30",
};

function generateRandomSixDigitNumber() {
  return Math.floor(
    100000 + Math.random() * 900000
  );
}

function clearFields() {
  name.value = "";
  email.value = "";
  message.value = "";
}

const dynamicVariableName = `userMessage${generateRandomSixDigitNumber()}`;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app.name);

function sendMessage() {
  const db = getDatabase();

  set(ref(db, dynamicVariableName), {
    name: name.value,
    email: email.value,
    message: message.value,
  });
  clearFields();
}
</script>

<template>
  <div class="container">
    <h1>Contact Us</h1>
    <div class="messageFields">
      <input
        v-model="name"
        type="text"
        name=""
        id=""
        placeholder="Name" />

      <input
        v-model="email"
        type="text"
        name=""
        id=""
        placeholder="Email" />
      <textarea
        v-model="message"
        class="message"
        placeholder="Enter a message here">
      </textarea>
      <button @click="sendMessage">Send</button>
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

.message {
  height: 1000px;
}

textarea {
  border: 4px solid black;
  border-radius: 20px;
  padding-left: 20px;
  width: calc(100% - 30px);
  margin: 12px 12px 0px 0px;
}

textarea::placeholder {
  color: black;
  font-weight: bold;
  font-size: 16px;
  padding-top: 1px;
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
