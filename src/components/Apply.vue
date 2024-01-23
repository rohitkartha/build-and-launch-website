<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1>Apply</h1>
    <p>
      Our first standard recruitment round will be
      during the Winter 2024 semester at the
      University of Michigan. We accept
      undergraduate applicants from any field of
      study at the University of Michigan.
      <br />
      If you're interested in applying, please
      complete our general member interest form.
    </p>
    <div class="buttonContainer">
      <button>Form</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height: 50%;
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
  background-color: #ddd;
  background: black;
  color: white;
  width: 10em;
  height: 3em;
  text-align: center;
  display: inline-block;
  border-radius: 16px;
}

@media (width < 750px) {
  .container {
    grid-template-rows: 1fr 1fr 2fr 1fr;
    height: 60%;
  }
}
</style>
