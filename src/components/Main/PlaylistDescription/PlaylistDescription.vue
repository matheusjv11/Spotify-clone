<template>
    <div class="playlist-description">
        <span class="cover">
            <img src="../../../assets/musicImage/1.jpg" alt="">
            <img src="../../../assets/musicImage/1.jpg" alt="">
            <img src="../../../assets/musicImage/1.jpg" alt="">
            <img src="../../../assets/musicImage/1.jpg" alt="">
        </span>
        <div>
           <p class="info"><strong>PLAYLIST</strong></p> 
           <h1>{{ infos.title }}</h1> 
            <p><strong>Matheus Almeida</strong> - 40 songs, 2h 39min</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        infos: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="css" scoped>
    .playlist-description {
        height: 340px;
        width: 100%;
  background-image: linear-gradient(
    rgba(191, 122, 48, 1) 0%,
    rgba(191, 122, 48, 0.3) 50%,
    rgba(191, 122, 48,  0.3) 45%,
    rgba(191, 122, 48,  0.3) 40%,
    rgba(191, 122, 48,  0.3) 35%,
    rgba(191, 122, 48,  0.3) 30%,
    rgba(191, 122, 48,  0.3) 25%
  );
        display: flex;
        align-items: flex-end;
        padding: 24px 32px;
        color: white;
        gap: 24px;
    }

    .cover {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: fit-content;
        height: fit-content;
    }

    img {
        width: 116px;
        height: 116px;
    }

    h1 {
        font-size: 96px;
        padding-bottom: 13px;
    }

    .info {
        font-size: 12px;
    }
</style>