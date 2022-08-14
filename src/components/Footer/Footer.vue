<template>
  <main class="footer">
    <MusicPreview />
    <MusicControl />
    <MusicVolume />
  </main>
</template>

<script>
import MusicPreview from './MusicPreview/MusicPreview.vue';
import MusicControl from './MusicControl/MusicControl.vue';
import MusicVolume from './MusicVolume/MusicVolume.vue';

export default {
    components: {MusicPreview, MusicControl, MusicVolume}
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