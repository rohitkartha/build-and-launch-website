<script setup lang="ts">
import router from "../router/router";

function goApply() {
  router.push("Apply");
}

function goContact() {
  router.push("Contact");
}
</script>

<template>
  <div class="container">
    <div class="text">
      <h1>About Us</h1>
      <p>
        This is Michigan Build and Launch. We are
        a student organization at the University
        of Michigan, and our goal is to bring
        together computer science, user-experience
        design, and business students. Members
        will work in project teams over the course
        of multiple semesters and receive
        real-world experience when it comes to
        taking an idea and building it into a real
        product to be launched. <br />Beyound our
        project teams, Michigan Build and Launch
        members also receive access to education
        sessions on a variety of topics, our
        speaker series, social events, and more!
        Michigan Build and Launch is more than
        just a place to learn. It's a community of
        passionate students who are interested in
        building innovative products.
      </p>

      <div class="buttonContainer">
        <button @click="goContact">
          Contact
        </button>
        <button
          @click="goApply"
          class="apply">
          Apply
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 24%;
  right: 0;
  height: 80%;
  width: 60%;
  top: 20%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
}

.text {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 500px;
}

p {
  text-align: left;
  color: black;
}

h1 {
  text-align: left;
  color: black;
  max-height: 50px;
}

.buttonContainer {
  display: flex;
  max-height: 200px;
}

button {
  background: transparent;
  width: 10em;
  height: 3em;
  color: black;
  text-align: center;
  padding: 0px;
  border: 1px solid;
  margin-left: 10px;
}

.apply {
  background-color: #ddd;
  background: black;
  color: white;
  width: 10em;
  height: 3em;
  text-align: center;
  display: inline-block;
  border-radius: 16px;
}

@media (width < 768px) {
  .text {
    min-height: none;
  }
  .container {
    display: grid;
    grid-template-rows: 1fr 6fr;
    height: 100%;
  }
}
</style>
