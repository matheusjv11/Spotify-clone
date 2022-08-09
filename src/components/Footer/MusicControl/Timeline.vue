<template>
    <div class="timeline">
        <p>{{ formattedCurrentTime }}</p>
        <input 
            type="range" 
            ref="controlBar"
            name="volume" 
            min="0"
            :value="rawCurrentTime"
            :max="rawMusicDuration"
            @change="updateCurrentTime()"
            @mouseover="timelineMouseOver()"
            @mouseleave="timelineNoMouse()"
        >
        <p>{{ formattedMusicDuration }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'formattedCurrentTime',
      'formattedMusicDuration',
      'rawCurrentTime',
      'rawMusicDuration'
    ])
  },
  data() {
    return {
      hover: false,
      drag: false
    }
  },
  watch: {
    '$store.state.currentTime' : function () {
      console.log(this.drag);

      if (this.drag) {
        return;
      }
        
      if (this.hover) {
        this.timelineMouseOver();
        return;
      }
      
      this.timelineNoMouse();
      return;
    }
  },
  methods: {
    timelineMouseOver() {
      this.hover = true;

      let value = (this.$refs.controlBar.value) / (parseInt(this.$store.state.music.duration)) * 100;
      this.$refs.controlBar.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + value + '%, #5e5e5e ' + value + '%, #5e5e5e 100%)';
    },

    timelineNoMouse() {
      this.hover = false;

      let value = (this.$refs.controlBar.value) / (parseInt(this.$store.state.music.duration)) * 100;
      this.$refs.controlBar.style.background = 'linear-gradient(to right, white 0%, white ' + value + '%, #5e5e5e ' + value + '%, #5e5e5e 100%)';
    },

    updateCurrentTime() {
      this.$store.dispatch('changeCurrentTime', this.$refs.controlBar.value);

      this.drag = false;
    }
  }
}
</script>

<style>
  .timeline {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;

    width: 300px;
  }

  .timeline p {
    font-size: 11px;
    widows: 22px;
  }

  input[type=range] {
    height: 4px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    border-radius: 10px;
    background: linear-gradient(to right, white 0%, white 0%, #5e5e5e 0%, #5e5e5e 100%);
    outline: none;
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
  }

  input[type=range]::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000031;
    border: none;
    height: 14px;
    width: 14px;
    border-radius: 15px;
    background: #FFFFFF;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
    display: none;
  }

  input[type=range]:hover {
    background: linear-gradient(to right, #1db954 0%, #1db954 0%, #5e5e5e 0%, #5e5e5e 100%);
  }

  input[type=range]:hover::-webkit-slider-thumb {
    display: block;
  }
</style>