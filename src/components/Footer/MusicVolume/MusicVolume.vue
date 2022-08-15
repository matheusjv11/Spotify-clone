<template>
    <div class="music-volume">
        <v-btn icon @click="mutingControl()">
            <v-icon v-if="muted">mdi-volume-mute</v-icon>
            <v-icon v-else>mdi-volume-medium</v-icon>
        </v-btn>
        <Timeline
          ref="musicVolume"
          :currentValue="50"
          :maxValue="100"
          @timelineIinput="updateVolume()"
        />
    </div>
</template>

<script>
import Timeline from '../../Base/Timeline.vue';
import { mapGetters } from 'vuex';


export default {
  data() {
    return {
      muted: false,
      lastVolume: this.formattedVolume
    }
  },
  components: {
    Timeline
  },
  computed: {
    ...mapGetters([
      'formattedVolume'
    ]),
  },
  methods: {
    updateVolume() {
      this.$store.dispatch('changeVolume', this.$refs.musicVolume.$el.value);
    },

    mutingControl() {
      if (this.muted) {
        this.unMute();
      } else {
        this.mute();
      }

      this.$refs.musicVolume.noMouse();
    },

    mute() {
      this.muted = true;
      this.lastVolume = this.$refs.musicVolume.$el.value;
      this.$refs.musicVolume.$el.value = 0;
      this.updateVolume();
    },

    unMute() {
      this.muted = false;
      this.$refs.musicVolume.$el.value = this.lastVolume;
      this.updateVolume();
    }
  },
  mounted() {
    this.$refs.musicVolume.noMouse();
  }
}
</script>

<style>
  .music-volume {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 15px;
  }
</style>