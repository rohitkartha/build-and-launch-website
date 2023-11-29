<script setup lang="ts">
import Header from "../components/Header.vue";
</script>

<template>
  <div class="container">
    <Header :logo="true" />
    <h1>About Us</h1>
    <p>
      This is Michigan Build and Launch. We are a
      student organization at the University of
      Michigan, and our goal is to bring together
      computer science, user-experience design,
      and business students. Members will work in
      project teams over the course of multiple
      semesters and receive real-world experience
      when it comes to taking an idea and building
      it into a real product to be launched.
    </p>
    <p>
      Beyound our project teams, Michigan Build
      and Launch members also receive access to
      education sessions on a variety of topics,
      our speaker series, social events, and more!
      Michigan Builda nd Launch is more than just
      a place to learn. It's a community of
      passionate students who are interested in
      building innovative products.
    </p>
    <div class="buttonContainer">
      <button>Contact</button>
      <button>Apply</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  height: 70%;
}

p {
  text-align: left;
  color: black;
}

h1 {
  text-align: left;
  color: black;
}

.buttonContainer {
  display: flex;
}

button {
  background: transparent;
  width: 5em;
  height: 3em;
  color: black;
  text-align: center;
  padding: 0px;
  border: 1px solid;
}
</style>
