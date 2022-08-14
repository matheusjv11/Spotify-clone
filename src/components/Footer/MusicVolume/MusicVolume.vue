<template>
    <div class="music-volume">
        <p>teste</p>
        <Timeline
          ref="musicVolume"
          :currentValue="50"
          :maxValue="100"
        />
    </div>
</template>

<script>
import Timeline from '../../Base/Timeline.vue'

export default {
  components: {
    Timeline
  },
  computed: {

  },

  methods: {

  }
}
</script>

<style>
  .music-volume {
    margin-right: 15px;
  }
</style>