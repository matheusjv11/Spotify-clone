<template>
  <main class="main">
    <PlaylistHeader />
    <PlaylistDescription />
    <Playlist />
  </main>
</template>

<script>
import PlaylistHeader from './PlaylistHeader/PlaylistHeader.vue'
import PlaylistDescription from './PlaylistDescription/PlaylistDescription.vue'
import Playlist from './Playlist/Playlist.vue'

export default {
  components: {PlaylistHeader, Playlist, PlaylistDescription}
}  
</script>

<style lang="css" scoped>
  .main {
    background-color: rgb(18, 18, 18);
    overflow: auto;
  }
</style>