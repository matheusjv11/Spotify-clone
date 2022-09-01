<template>
  <main class="main">
    <PlaylistDescription v-if="currentPlaylistObj" :playlist="currentPlaylistObj"/>
    <Playlist v-if="currentPlaylistObj" :musicIds="currentPlaylistObj.musics"/>
  </main>
</template>

<script>
import PlaylistDescription from './PlaylistDescription/PlaylistDescription.vue'
import Playlist from './Playlist/Playlist.vue'

import PlaylistService from '../../service/playlistService';

export default {
  components: {Playlist, PlaylistDescription},
  data() {
    return {
      currentPlaylistObj: null
    }
  },
  watch:{
    $route (){
      this.updatePlaylist();
    }
  },
  methods: {
    updatePlaylist() {
      this.currentPlaylistObj = PlaylistService.getCurrent();
    },
  },
  mounted() {
    this.updatePlaylist();
  }
}  
</script>

<style lang="css" scoped>
  .main {
    background-color: rgb(18, 18, 18);
    overflow: auto;
  }
</style>