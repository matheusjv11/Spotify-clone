<template>
  <main class="app-grid">
    <Sidebar />
    <Footer />
  </main>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  components: {Sidebar, Footer}
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
</style>
