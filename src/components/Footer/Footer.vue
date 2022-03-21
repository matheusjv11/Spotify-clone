<template>
  <main class="footer">
    <MusicPreview />
  </main>
</template>

<script>
import MusicPreview from './MusicPreview.vue'

export default {
    components: {MusicPreview}
}
</script>

<style scoped>

.footer {
  background-color: rgb(24, 24, 24);
  border-top: solid 1px rgba(179, 179, 179, 0.1);;
}

</style>