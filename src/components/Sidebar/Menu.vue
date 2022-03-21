<template>
  <ul>
      <MenuItem text="Home" iconImage="home.png"  iconAlt="Home icon representing the initial page" />
      <MenuItem text="Search" iconImage="search.png"  iconAlt="Magnifying Icon representing the search page" />
      <MenuItem text="Your Library" iconImage="library.png"  iconAlt="Books icon representing the library page" />
  </ul>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
    components: {MenuItem}
}
</script>

<style>
    ul {
        list-style: none;
        list-style-type: none;
        padding: 0px;
        margin: 16px 0px;
    }
</style>