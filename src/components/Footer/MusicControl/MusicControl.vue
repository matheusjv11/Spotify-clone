<template>
  <main>
    <ActionButtons />
    <Timeline />
  </main>
</template>

<script>
import ActionButtons from './ActionButtons.vue';
import Timeline from './MusicTimeline.vue';

export default {
  components: {ActionButtons, Timeline},
}
</script>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    color: rgb(179, 179, 179);
  }
</style>