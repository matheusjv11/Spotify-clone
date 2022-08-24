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
              <th class="text-right">
                <v-icon>mdi-clock-time-four-outline</v-icon>
              </th>
            </tr>
        </thead>
        <tbody class="normal-text">
            <template 
              v-for="(music, index) in musics" 
            >
              <tr 
                :key="index"
                @mouseover="hoveredMusic = music.id"
                @mouseleave="hoveredMusic = null"
                :set="isCurrentMusic = (music.id == $store.state.musicDescription.id)"
              >
                <IndexTableData 
                  :hovered="hoveredMusic == music.id"
                  :music="music"
                  :tableIndex="index + 1"
                  :isCurrentMusic="isCurrentMusic"
                />
                <MusicTableData
                  :id="music.id"
                  :title="music.title"
                  :artist="music.author"
                  :isCurrentMusic="isCurrentMusic" 
                />
                <td>{{ music.album }}</td>
                <td>{{ music.created }}</td>
                <td class="text-right">{{ music.duration }}</td>
              </tr>
            </template>
        </tbody>
        </template>
    </v-simple-table>
  </main>
</template>

<script>
import IndexTableData from '@/components/Main/Playlist/IndexTableData.vue';
import MusicTableData from '@/components/Main/Playlist/MusicTableData.vue';
import MusicService  from '@/service/musicService.js';

export default {
  components: {MusicTableData, IndexTableData},
  props: {
    musicIds: {Array}
  },
  data() {
      return {
        musics: [],
        hoveredMusic: false
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
    },
  },
  mounted() {
    this.loadMusics();
  }
}
</script>

<style lang="css">
  .v-data-table tr:not(.table-header):hover {
    background-color: #2a2a2a !important;
    border-radius: 4px !important;
  }

  .text-left {
    text-align: left;
    font-weight: 400;
  }

  .text-right {
    text-align: right;
    font-weight: 400;
  }

  .theme--light.v-data-table {
    background-color: inherit !important;
    padding: 0px 46px;
  }

  .index-column {
    padding: 0px !important;
    text-align: center;
    width: 1px;
  }

  .green-text {
    color: #1db954 !important;
  }

  .text-left .v-icon.mdi:hover {
    color: rgba(255, 255, 255, 0.7) !important;
  }

  .mdi-clock-time-four-outline::before {
    font-size: 16px !important;
  }

  tr {
    height: 56px;
  }
</style>