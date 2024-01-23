<script setup lang="ts">
window.onload = function () {
  const menu_btn =
    document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(
    ".mobile-nav"
  );

  menu_btn!.addEventListener(
    "click",
    function () {
      menu_btn!.classList.toggle("is-active");
      mobile_menu!.classList.toggle("is-active");
    }
  );
};
</script>

<template>
  <div class="cont">
    <div class="hamburger">
      <div class="bar"></div>
    </div>
    <div class="mobile-nav">
      <a href="/home">here</a>
      <a href="/about">about</a>
      <a href="/members">members</a>
      <a href="/contact">contact</a>
      <a href="/apply">apply</a>
    </div>
  </div>
</template>

<style scoped>
.cont {
  position: absolute;
  display: flex;
  max-height: 50px;
  width: 100%;
  margin-top: 12px;
  z-index: 102;
  top: 0;
  background-color: transparent;
}
.hamburger {
  position: relative;
  display: block;
  width: 35px;
  cursor: pointer;
  z-index: 4000;
  appearance: none;
  background: none;
  outline: none;
  border: none;
  margin-left: 30px;
}

.hamburger .bar,
.hamburger:after,
.hamburger:before {
  content: "";
  display: block;
  width: 100%;
  height: 5px;
  background-color: black;
  margin: 6px 0px;
  transition: 0.4s;
}

.hamburger.is-active:before {
  transform: rotate(-45deg) translate(-8px, 6px);
}

.hamburger.is-active:after {
  transform: rotate(45deg) translate(-9px, -8px);
}

.hamburger.is-active .bar {
  opacity: 0;
}

.mobile-nav {
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100vh;
  display: block;
  background-color: white;
  opacity: 0.1;
  padding-top: 120px;
  transition: 0.4s;
  overflow: hidden;
}

.mobile-nav.is-active {
  left: 0;
}

.mobile-nav a {
  display: block;
  padding: 9px;
  text-align: center;
  height: 20px;
  color: black;
  text-decoration: none;
}

.mobile-nav a:hover {
  background-color: #24104f;
}
</style>
