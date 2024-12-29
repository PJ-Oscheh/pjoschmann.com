<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import AppFooter from './components/AppFooter.vue';

</script>

<template>
  <div class="wholeWrapper">
    <header>
    <div class="navbarWrapper">
      <Navbar />

    </div>
  </header>

  <RouterView />

  <AppFooter />
  </div>
</template>

<style>

html, body {
  margin: 0;
  padding: 0;
  background-color: #fff2e9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.wholeWrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
</style>
