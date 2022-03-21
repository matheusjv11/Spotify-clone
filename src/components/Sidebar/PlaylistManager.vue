<template>
  <ul>
    <MenuItem text="Create Playlist" iconImage="add.png"  iconAlt="Plus icon" />
    <MenuItem text="Liked Songs" iconImage="liked.png"  iconAlt="Grey hart with a purple background" />
  </ul>
  
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  components: {MenuItem},
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style>

</style>