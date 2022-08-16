<template>
  <main v-if="$store.state.musicDescription">
      <div class="cover-image" :style="{'background-image': getCoverImage()}">
          <button>
              <img src="@/assets/icons/arrow-up.png" alt="album cover image">
          </button>
      </div>

      <div class="music box">
        <div>
            <h5 class="title">{{ $store.state.musicDescription.title }}</h5>
            <p class="subtitle">{{ $store.state.musicDescription.artist }}</p>
        </div>
      </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
        music: null
    }
  },
    methods: {
        getCoverImage() {
            const imageName = this.$store.state.musicDescription.id;

            return `url(${require('@/assets/musicImage/'+ imageName +'.jpg')})`;
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