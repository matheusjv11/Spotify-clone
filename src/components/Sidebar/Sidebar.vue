<template>
  <main class="sidebar">
        <Logo />
        <Menu />
        <PlaylistManager />
        <hr>
        <Playlists />
  </main>
</template>

<script>
import Logo from './Logo.vue'
import Menu from './Menu.vue'
import PlaylistManager from './PlaylistManager.vue'
import Playlists from './Playlists.vue'

export default {
    components: {Logo, Menu, PlaylistManager, Playlists}
}
</script>

<style scoped>
    .sidebar {
        background-color: black;
        padding-left: 24px;
    }

    hr {
        background-color: #282828;
        border: none;
        height: 1px;
        min-height: 1px;
        margin-right: 30px;
    }
</style>