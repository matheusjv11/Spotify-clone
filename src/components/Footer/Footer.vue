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
  align-items: center;
  padding: 0px 16px;
}

@media screen and (max-width: 600px) {
  .footer {
    padding: 0px 4px;
  }
}

</style>