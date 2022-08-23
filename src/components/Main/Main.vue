<template>
  <main class="main">
    <PlaylistHeader />
    <PlaylistDescription v-if="currentPlaylistObj" :infos="currentPlaylistObj.infos"/>
    <Playlist v-if="currentPlaylistObj" :musicIds="currentPlaylistObj.musics"/>
  </main>
</template>

<script>
import PlaylistHeader from './PlaylistHeader/PlaylistHeader.vue'
import PlaylistDescription from './PlaylistDescription/PlaylistDescription.vue'
import Playlist from './Playlist/Playlist.vue'

import PlaylistService from '../../service/playlistService';

export default {
  components: {PlaylistHeader, Playlist, PlaylistDescription},
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