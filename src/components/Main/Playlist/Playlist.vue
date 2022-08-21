<template>
  <main>
    <v-simple-table>
        <template v-slot:default>
        <thead>
            <tr class="table-header">
              <th class="text-left">
                  #
              </th>
              <th class="text-left">
                  TITLE
              </th>
              <th class="text-left">
                  ALBUM
              </th>
              <th class="text-left">
                  DATE ADDED 
              </th>
              <th class="text-left">
                  O
              </th>
            </tr>
        </thead>
        <tbody class="normal-text">
            <tr
              v-for="(music, index) in musics"
              :key="index"
              @mouseover="hover = true"
              @mouseleave="hover = false"
            >
            <td class="index-column">
              <template v-if="hover">
                <Play @beenClicked="$store.dispatch('initMusic', {music: music, play: false})"/>
              </template>
              <template v-else>
                {{ index + 1}}
              </template>
            </td>
            <MusicTableData
              :id="music.id"
              :title="music.title"
              :artist="music.author" 
            />
            <td>{{ music.album }}</td>
            <td>{{ music.created }}</td>
            <td>{{ music.duration }}</td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
  </main>
</template>

<script>
import MusicTableData from './MusicTableData.vue';
import Play from '@/components/Base/Play.vue';
import MusicService  from '@/service/musicService.js';

export default {
  components: {MusicTableData, Play},
  props: {
    musicIds: {Array}
  },
  data() {
      return {
        musics: [],
        hover: false
      }
  },
  watch:{
    $route (){
      this.loadMusics();
    }
  },
  methods: {
    loadMusics() {
      this.musics = MusicService.list(this.musicIds);
    }
  },
  mounted() {
    this.loadMusics();
  }
}
</script>

<style lang="css">
  .v-data-table tr:not(.table-header):hover {
    background-color: #2a2a2a !important;
  }

  .text-left {
    text-align: left;
    font-weight: 400;
  }

  .theme--light.v-data-table {
    background-color: inherit !important;
  }

  .index-column {
    padding: 0px !important;
    text-align: center;
  }
</style>