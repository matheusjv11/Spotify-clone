<template>
      <li class="playlistItem">
        <a href="#" class="playlistLink"  @click.prevent="showPlaylist">
            <p>{{ text }}</p>
        </a>
    </li>
</template>

<script>
import router from '../../router/index';

export default {
    props: {
        playlistId: {
            required: true,
            type: String     
        },
        text: {
            required: true,
            type: String
        }
    },
    methods: {
        showPlaylist() {
            router.push({ path: '/', query: { playlist: this.playlistId }}).catch(()=>{});
        }
    }
}
</script>

<style>
    .playlistItem {
        opacity: 0.7;
        padding: 7px 0px;
        display: flex;
        align-items: center;
    }

    .playlistItem:hover {
        opacity: 1;
    }
</style>