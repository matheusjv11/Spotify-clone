<template>
    <div class="music-timeline">
        <p>{{ formattedCurrentTime }}</p>
        <Timeline
          ref="musicTimeline"
          :currentValue="currentTimelineValue"
          :maxValue="rawMusicDuration"
          @timelineChange="updateCurrentTime()"
          @timelineMouseover="hover = true"
          @timelineMouseleave="hover = false"
          @timelineIinput="draggingControl()"
        />
        <p>{{ formattedMusicDuration }}</p>
    </div>
</template>

<script>
import Timeline from '@/components/Base/Timeline.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Timeline
  },
  computed: {
    ...mapGetters([
      'formattedCurrentTime',
      'formattedMusicDuration',
      'rawCurrentTime',
      'rawMusicDuration'
    ]),
    currentTimelineValue() {
      if (this.drag) {
        return;
      }

      return this.$store.state.currentTime;
    }
  },
  data() {
    return {
      hover: false,
      drag: false
    }
  },
  watch: {
    '$store.state.currentTime' : function () {
      if (this.hover) {
        this.$refs.musicTimeline.mouseOver();
        return;
      }
      
      this.$refs.musicTimeline.noMouse();
      return;
    },
  },
  methods: {
    updateCurrentTime() {
      this.$store.dispatch('changeCurrentTime', this.$refs.musicTimeline.$el.value);
      this.drag = false;
    },
    
    draggingControl() {
      this.drag = true;
    }
  }
}
</script>

<style>
  .music-timeline {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;

    width: 300px;
  }

  .music-timeline p {
    font-size: 11px;
    min-width: 22px;
    max-width: 22px;
  }
</style>