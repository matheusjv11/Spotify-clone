<template>
  <main class="sidebar">
        <Logo />
        <Menu />
        <PlaylistManager />
        <hr>
        <Playlists style="flex-grow: 1;" />
        <hr>
        <Credits />
  </main>
</template>

<script>
import Logo from './Logo.vue'
import Menu from './Menu.vue'
import PlaylistManager from './PlaylistManager.vue'
import Playlists from './Playlists.vue'
import Credits from './Credits.vue'

export default {
    components: {
        Logo, 
        Menu, 
        PlaylistManager, 
        Playlists,
        Credits
    }
}
</script>

<style scoped>
    .sidebar {
        background-color: black;
        padding-left: 24px;
        display: flex;
        flex-direction: column;
    }

    hr {
        background-color: #282828;
        border: none;
        height: 1px;
        min-height: 1px;
        margin-right: 30px;
    }

    @media screen and (max-width: 600px) {
        .sidebar {
            display: none;
        }
    }
</style>