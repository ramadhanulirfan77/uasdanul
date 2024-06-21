<!-- src/components/Navbar.vue -->
<template>
  <q-header elevated class="navbar">
    <q-toolbar>
      <q-toolbar-title class="toolbar-title">
        DANUL ANTI AIR
      </q-toolbar-title>
      
      <q-btn
        class="q-mr-md bubble-btn" 
        color="primary" 
        @click="navigateTo('/cuaca')" 
        label="CUACA"
      />

      <q-btn
        class="q-mr-md bubble-btn" 
        color="primary" 
        @click="navigateToTugas('https://tugas1danule.netlify.app/')" 
        label="Tugas 1" 
      />
      <q-btn
        class="q-mr-md bubble-btn" 
        color="primary" 
        @click="navigateToTugas('https://tugas2danule.netlify.app/')" 
        label="Tugas 2" 
      />
      <q-btn
        class="q-mr-md bubble-btn" 
        color="primary" 
        @click="navigateToTugas('https://223510935-ramadhanul.netlify.app/')" 
        label="Tugas 3" 
      />
      <q-btn
        class="q-mr-md bubble-btn" 
        color="primary" 
        @click="navigateToTugas('https://github.com/ramadhanul27irfan/tugas4?authuser=0')" 
        label="Tugas 4" 
      />
      <q-btn
        class="q-mr-md bubble-btn" 
        color="primary" 
        @click="navigateToTugas('https://id.wiktionary.org/wiki/maaf')" 
        label="Tugas 5" 
      />
      <q-btn
        class="q-mr-md bubble-btn" 
        color="primary" 
        @click="navigateToTugas('https://tugas6ramadhanulygganteng.netlify.app/')" 
        label="Tugas 6" 
      />
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    navigateTo(route) {
      this.$router.push(route); // Navigasi menggunakan Vue Router
    },

    navigateToTugas(url) {
      window.open(url, '_blank');
    }
  }
};
</script>

<style scoped>
.navbar {
  background: linear-gradient(45deg, #6bc1ff, #9be2ff);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid #0077b6;
  padding: 10px 0;
}

.toolbar-title {
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  font-family: 'Comic Sans MS', cursive, sans-serif;
}

.bubble-btn {
  background: rgba(255, 255, 255, 0.1) !important;
  color: #ffffff !important;
  border-radius: 50%;
  transition: background 0.3s ease, transform 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  border: 2px solid #ffffff;
}

.bubble-btn:hover {
  background: rgba(255, 255, 255, 0.3) !important;
  transform: scale(1.1);
}

.q-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.q-toolbar-title {
  font-size: 1.5rem;
}

/* Background for the card in the weather widget */
.weather-card {
  background: url('https://example.com/underwater-bg.jpg') no-repeat center center;
  background-size: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid #0077b6;
}

/* Font styles for the card content */
.weather-info,
.loading,
.error {
  font-weight: bold;
  color: #00497a;
}

.weather-info p,
.loading p,
.error p {
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
}
</style>
