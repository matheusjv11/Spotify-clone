<template>
  <main class="app-grid">
    <Sidebar />
    <Main />
    <Footer />
  </main>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar.vue'
import Footer from './components/Footer/Footer.vue'
import Main from './components/Main/Main.vue'


const musicTeste =         {
            "id": 1,
            "title": "Samurai",
            "album": "NoCopyrightSounds",
            "duration": "3:20",
            "created": "Aug 11, 2022",
            "author": "Jim Yosef",
            "credits": "Song: Jim Yosef - Samurai [NCS Release] Music provided by NoCopyrightSounds Free Download/Stream: http://NCS.io/Samurai Watch: http://youtu.be/"
        };

export default {
  components: {Sidebar, Footer, Main},
  created() {
    this.$store.dispatch('initMusic', {
      music: musicTeste,
      play: false
    });
  }
}
</script>

<style>
  html {
    overflow: unset !important;
  }

  body {
    font-family: 'Inter', sans-serif;
    margin: 0px;
  }

  #app {
    height: 100vh;
  }

  .app-grid {
    display: grid; 
    height: 100vh;
    grid-template-columns: 241px 1fr 1fr; 
    grid-template-rows: 1fr 1fr 90px; 
    gap: 0px 0px; 
    grid-template-areas: 
      "sidebar main main"
      "sidebar main main"
      "footer footer footer"; 
  }
  .sidebar { grid-area: sidebar; }
  .footer { grid-area: footer; }
  .main { grid-area: main; }

  a {
    text-decoration: none;
    color: white;
  }

  p {
    font-size: 14px;
    margin: 0px;
  }

  .text-left,
  .theme--light.v-data-table,
  .normal-text {
    color: rgb(179, 179, 179) !important;
  }

  .v-icon.mdi {
    color: rgba(255, 255, 255, 0.7) !important;
  }

  .v-icon.mdi:hover {
    color: white !important;
  }
</style>
