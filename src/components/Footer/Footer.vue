<template>
  <main class="footer">
    <MusicPreview />
    <MusicControl />
  </main>
</template>

<script>
import MusicPreview from './MusicPreview.vue'
import MusicControl from './MusicControl.vue'

export default {
    components: {MusicPreview, MusicControl}
}
</script>

<style scoped>

.footer {
  background-color: rgb(24, 24, 24);
  border-top: solid 1px rgba(179, 179, 179, 0.1);
  display: flex;
}

</style>