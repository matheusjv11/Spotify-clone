<template>
    <div class="music-timeline">
        <p>{{ formattedCurrentTime() }}</p>
        <Timeline
          ref="musicTimeline"
          :currentValue="parseInt($store.state.currentTime)"
          :maxValue="parseInt($store.state.duration)"
          @timelineChange="enableSound()"
          @timelineMouseover="hover = true"
          @timelineMouseleave="hover = false"
          @timelineIinput="draggingControl()"
        />
        <p >{{ formattedMusicDuration }}</p>
    </div>
</template>

<script>
import Timeline from '@/components/Base/Timeline.vue';
import MusicService from '@/service/musicService.js';
import { mapGetters } from 'vuex';

export default {
  components: {
    Timeline
  },
  computed: {
    ...mapGetters([
      'formattedMusicDuration',
    ]),

  },
  data() {
    return {
      hover: false,
      musicTime: 0
    }
  },
  watch: {
    '$store.state.currentTime' : function () {
      if(this.hover) {
        this.$refs.musicTimeline.mouseOver();
      } else {
        this.$refs.musicTimeline.noMouse();
      }
    },
  },
  methods: {
    formattedCurrentTime () {
     return MusicService.formattedTime(this.$refs.musicTimeline?.$el.value);
    },
    enableSound() {
      this.$store.dispatch('changeVolume', document.getElementsByName('musicVolume')[0].value);
    },
    draggingControl() {
      this.$store.dispatch('changeVolume', 0);
      this.$store.dispatch('changeCurrentTime', this.$refs.musicTimeline.$el.value);
    },
  }
}
</script>

<style>
  .music-timeline {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .music-timeline p {
    font-size: 11px;
    min-width: 22px;
    max-width: 22px;
  }
</style>