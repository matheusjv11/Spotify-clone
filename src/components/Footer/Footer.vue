<template>
  <main class="footer">
    <MusicPreview />
    <MusicControl />
    <div>Teste</div>
  </main>
</template>

<script>
import MusicPreview from './MusicPreview.vue'
import MusicControl from './MusicControl/MusicControl.vue'

export default {
    components: {MusicPreview, MusicControl}
}
</script>

<style scoped>

.footer {
  background-color: rgb(24, 24, 24);
  border-top: solid 1px rgba(179, 179, 179, 0.1);
  display: flex;
  justify-content: space-between;
}

</style>