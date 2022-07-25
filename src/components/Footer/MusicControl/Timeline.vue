<template>
    <div class="timeline">
        <p>1:18</p>
        <input 
            type="range" 
            ref="controlBar"
            name="volume" 
            min="0" 
            :max="musicLength"
            @input="updateTimelineColor()"
            @mouseenter="updateTimelineColor()"
            @mouseleave="resetTimelineColor()"
        >
        <p>3:28</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      musicLength: 100
    }
  },
  methods: {
    updateTimelineColor() {
      var value = (this.$refs.controlBar.value) / (this.musicLength) * 100;
      this.$refs.controlBar.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + value + '%, #5e5e5e ' + value + '%, #5e5e5e 100%)';
    },
    resetTimelineColor() {
      var value = (this.$refs.controlBar.value) / (this.musicLength) * 100;
      this.$refs.controlBar.style.background = 'linear-gradient(to right, white 0%, white ' + value + '%, #5e5e5e ' + value + '%, #5e5e5e 100%)';
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
  }

  .timeline p {
    font-size: 11px;
  }

  input[type=range] {
    height: 4px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    border-radius: 10px;
    background: linear-gradient(to right, white 0%, white 50%, #5e5e5e 50%, #5e5e5e 100%);
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
    background: linear-gradient(to right, #1db954 0%, #1db954 50%, #5e5e5e 50%, #5e5e5e 100%);
  }

  input[type=range]:hover::-webkit-slider-thumb {
    display: block;
  }
</style>