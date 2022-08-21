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
      currentPlaylistId: '1',
      currentPlaylistObj: null
    }
  },
  watch:{
    $route (){
      this.loadPlaylist();
    }
  },
  methods: {
    loadPlaylist() {
      this.updateId();
      this.updatePlaylist();
    },

    updatePlaylist() {
      this.currentPlaylistObj = PlaylistService.get(this.currentPlaylistId);
    },

    updateId() {
      const playlistId = this.$route.query.playlist || '1';
      this.currentPlaylistId = playlistId;
    },

  },
  mounted() {
    this.loadPlaylist();
  }
}  
</script>

<style lang="css" scoped>
  .main {
    background-color: rgb(18, 18, 18);
    overflow: auto;
  }
</style>