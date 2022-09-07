<template>
    <input
        ref="timeline"
        type="range" 
        :name="timelineName" 
        min="0"
        :value="currentValue"
        :max="maxValue"
        @change="change()"
        @mouseover="mouseOver()"
        @mouseleave="noMouse()"
        @input="input()"
    >
</template>

<script>
export default {
    props: {
        currentValue: {
          type: Number,  
        },
        maxValue: {
            type: Number,
            required: true
        },
        timelineName: {
          type: String,
          default: 'control' 
        }
    },
    methods: {
      mouseOver() {
        let value = (this.$refs.timeline.value) / (parseInt(this.maxValue)) * 100;
        this.$refs.timeline.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + value + '%, #5e5e5e ' + value + '%, #5e5e5e 100%)';
        this.$emit('timelineMouseover');
      },

      noMouse() {
        let value = (this.$refs.timeline.value) / (parseInt(this.maxValue)) * 100;
        this.$refs.timeline.style.background = 'linear-gradient(to right, white 0%, white ' + value + '%, #5e5e5e ' + value + '%, #5e5e5e 100%)';
        this.$emit('timelineMouseleave');
      },

      change() {
        this.mouseOver();
        this.$emit('timelineChange');
      },

      input() {
        this.mouseOver();
        this.$emit('timelineIinput');
      }
    }
}
</script>

<style scoped>
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