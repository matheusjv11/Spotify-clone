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
            >
            <td>{{ index }}</td>
            <MusicTableData 
              :title="music.title"
              :artist="music.artist" 
              :thumbnail="music.thumbnail"
            />
            <td>{{ music.album }}</td>
            <td>{{ music.added }}</td>
            <td>{{ music.duration }}</td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
  </main>
</template>

<script>
import MusicTableData from './MusicTableData.vue'

export default {
    components: {MusicTableData},
    data() {
        return {
          musics: [
          {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                              {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                              {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                              {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                              {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                              {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
                    {
            title: '505',
            artist: 'Arctic Monkeys',
            album: 'Favourite Worst Nightmare',
            added: 'há 7 horas',
            duration: '4:13',
            thumbnail: {
              src: '/assets/musicImage/1.jpg',
              alt: 'Music cover'
            },

          },
        ],
        }
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
</style>