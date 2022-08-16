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

const musicObjTeste = {
  id: '1',
  title: '505',
  artist: 'Arctic Monkeys',
  album: 'Favourite Worst Nightmare',
  added: 'há 7 horas',
  duration: '4:13'
}

export default {
  components: {Sidebar, Footer, Main},
  created() {
    console.log('passei aqui')
    this.$store.dispatch('initMusic', musicObjTeste);
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
