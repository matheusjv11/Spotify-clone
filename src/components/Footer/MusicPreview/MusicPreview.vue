<template>
  <main v-if="$store.state.musicDescription">
    <img :src="getImage()" alt="Album cover image">
    <div class="music box">
        <div>
            <h5 class="title">{{ $store.state.musicDescription.title }}</h5>
            <p class="subtitle">{{ $store.state.musicDescription.author }}</p>
        </div>
    </div>
  </main>
</template>

<script>
export default {
    methods: {
        getImage() {
            const imageName = this.$store.state.musicDescription.id;
            return require('@/assets/musicImage/'+ imageName +'.jpg');
        }
    }
}
</script>

<style scoped>

    main {
        display: flex;
        width: 30%;
        height: 100%;
        align-items: center;
        justify-content: flex-start;
        gap: 14px;
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

    img {
        height: 56px;
        width: 56px;
    }

    @media screen and (max-width: 600px) {
        img {
            height: 30px;
            width: 30px;
        }

        .music .title {
            font-size: 12px;
        }

        .music .subtitle{
            font-size: 9px;
        }
    }
</style>