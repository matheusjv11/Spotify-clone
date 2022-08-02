<template>
  <main>
      <ul>
        <PlaylistItem 
          v-for="(playlist) in playlists" 
          :key="playlist[0]"
          :text="playlist[1].infos.title"
          :playlistId="playlist[0]"
        />
      </ul>
  </main>
</template>

<script>
import PlaylistService from '../../service/playlistService';
import PlaylistItem from './PlaylistItem.vue'

export default {
  components: {PlaylistItem},
  computed: {
    playlists() {
      return PlaylistService.list();
    }
  }
}
</script>

<style>

</style>