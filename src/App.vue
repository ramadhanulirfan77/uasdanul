<template>
  <q-layout view="lHh Lpr lFf" class="app-layout">
    <Navbar />
    <router-view />
  </q-layout>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style scoped>
.app-layout {
  background-image: url('https://66.media.tumblr.com/b4f6608b2d4b7eb4021c95c235285ec1/tumblr_ml094rrWlb1s8hnhko1_500.gif');
  background-size: cover; 
  background-position: center; 
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Mengatur agar konten terletak di tengah dengan mempertimbangkan navbar */
}
</style>
