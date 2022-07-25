<template>
  <main class="main">
    <PlaylistHeader />
    <Playlist />
  </main>
</template>

<script>
import PlaylistHeader from './PlaylistHeader/PlaylistHeader.vue'
import Playlist from './Playlist/Playlist.vue'

export default {
    components: {PlaylistHeader, Playlist}
} 
</script>

<style lang="css" scoped>
  .main {
    background-color: rgb(18, 18, 18);
  }
</style>