<template>
  <main>
      <div class="cover-image" :style="{'background-image': getCoverImage()}">
          <button>
              <img src="@/assets/icons/arrow-up.png" alt="">
          </button>
      </div>

      <div class="music box">
        <div>
            <h5 class="title">Black Summer</h5>
            <p class="subtitle">Red Hot Chili Peppers</p>
        </div>
      </div>

      <button>
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 hDgDGI"><path d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"></path></svg>
      </button>
  </main>
</template>

<script>
export default {
    methods: {
        getCoverImage() {
            return `url(${require('@/assets/musicImage/black-summer.jpg')})`
        }
    }
}
</script>

<style scoped>

    main {
        display: flex;
        width: 241px;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        padding-left: 16px;
    }

    .music.box {
        display: flex;
    }

    .music .title {
        color: white;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 3px;
    }

    .music .subtitle{
        color: rgb(179, 179, 179);
        font-size: 11px;
    }

    .cover-image {
        width: 56px;
        height: 56px;
        background-position: center;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
    }

    .cover-image img {
        filter: invert();
        max-width: 100%;
    }

    .cover-image button {
        width: 23px;
        height: 23px;
        border-radius: 100%;
        background: rgba(0,0,0,.7);
        display: relative;
        overflow: hidden;
        padding: 4px;
    }

    svg {
        filter: invert(0.6);
    }
</style>