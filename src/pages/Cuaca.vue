<template>
  <div class="weather-widget-container">
    <div class="weather-widget">
      <q-card class="weather-card">
        <q-card-section>
          <h2 class="text-h6 q-mb-sm">PENGECEKAN CUACA</h2>
          <form @submit.prevent="fetchWeather" class="q-gutter-md">
            <q-input v-model="location" placeholder="Masukkan lokasi" outlined dense />
            <q-btn type="submit" color="primary" label="Cari" dense />
          </form>
          <div v-if="weather" class="weather-info">
            <p><strong>Lokasi:</strong> {{ weather.name }}</p>
            <p><strong>Suhu Sekarang:</strong> {{ weather.main.temp }}°C</p>
            <p><strong>Cuaca:</strong> {{ mapWeatherDescription(weather.weather[0].description) }}</p>
          </div>
          <div v-else-if="loading" class="loading">
            <q-spinner-dots color="primary" size="32px" />
          </div>
          <div v-else-if="error" class="error">
            <p>Error: {{ error }}</p>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Cuaca',
  data() {
    return {
      weather: null,
      apiKey: '3d3b528f1a823841e68b0d2b75141fd3',
      location: '',  // Input lokasi dari pengguna
      loading: false,
      error: null,
    };
  },
  methods: {
    fetchWeather() {
      if (!this.location) {
        this.error = "Lokasi harus diisi";
        return;
      }

      this.loading = true;
      this.error = null;

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=${this.apiKey}`;

      axios.get(apiUrl)
        .then(response => {
          this.weather = response.data;
          this.loading = false;
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            this.error = 'Lokasi tidak ditemukan';
          } else {
            this.error = error.message;
          }
          this.loading = false;
        });
    },
    mapWeatherDescription(description) {
      const weatherMap = {
        'clear sky': 'Langit Cerah',
        'few clouds': 'Berawan Sedikit',
        'scattered clouds': 'Berawan',
        'broken clouds': 'Berawan Pecah-pecah',
        'overcast clouds': 'Langit Mendung',
        'light rain': 'Hujan Ringan',
        'moderate rain': 'Hujan Sedang',
        'heavy intensity rain': 'Hujan Lebat',
        'very heavy rain': 'Hujan Lebat Sekali',
        'extreme rain': 'Hujan Ekstrim',
        'freezing rain': 'Hujan Beku',
        'light intensity shower rain': 'Hujan Intensitas Ringan',
        'shower rain': 'Hujan Sedang',
        'heavy intensity shower rain': 'Hujan Intensitas Berat',
        'ragged shower rain': 'Hujan Berombak',
        'thunderstorm with light rain': 'Badai Petir dengan Hujan Ringan',
        'thunderstorm with rain': 'Badai Petir dengan Hujan',
        'thunderstorm with heavy rain': 'Badai Petir dengan Hujan Lebat',
        'light thunderstorm': 'Petir Ringan',
        'thunderstorm': 'Badai Petir',
        'heavy thunderstorm': 'Petir Berat',
        'ragged thunderstorm': 'Badai Petir Berombak',
        'thunderstorm with light drizzle': 'Petir dengan Gerimis Ringan',
        'thunderstorm with drizzle': 'Petir dengan Gerimis',
        'thunderstorm with heavy drizzle': 'Petir dengan Gerimis Lebat',
        'light snow': 'Salju Ringan',
        'snow': 'Salju',
        'heavy snow': 'Salju Lebat',
        'sleet': 'Salju Berbatu',
        'shower sleet': 'Salju Berbatu',
        'light rain and snow': 'Hujan Ringan dan Salju',
        'rain and snow': 'Hujan dan Salju',
        'light shower snow': 'Hujan Salju Ringan',
        'shower snow': 'Hujan Salju',
        'heavy shower snow': 'Hujan Salju Berat',
        'mist': 'Kabut',
        'smoke': 'Asap',
        'haze': 'Kabut Asap',
        'sand, dust whirls': 'Pasir, Puting Beliung Debu',
        'fog': 'Kabut Tebal',
        'sand': 'Pasir',
        'dust': 'Debu',
        'volcanic ash': 'Abu Vulkanik',
        'squalls': 'Angin Kencang',
        'tornado': 'Puting Beliung'
      };

      return weatherMap[description.toLowerCase()] || description;
    }
  }
};
</script>

<style scoped>
.weather-widget-container {
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Mengatur agar container berada di bagian bawah */
  min-height: 50vh; /* Menggunakan setidaknya tinggi layar untuk mengisi ruang */
  margin-top: 8%;
}

.weather-widget {
  max-width: 400px;
  width: 100%;
  border: 2px solid #333; /* Border tebal */
  border-radius: 8px; /* Sudut membulat */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow ringan */
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}

.weather-card {
  max-width: 400px;
  width: 100%;
}

.weather-info {
  margin-top: 20px;
}

.loading,
.error {
  margin-top: 20px;
  text-align: center;
  color: red; /* atau warna lain sesuai preferensi */
}
</style>
