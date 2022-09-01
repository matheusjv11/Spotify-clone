<template>
    <div class="playlist-description">
        <img :src="getImage()" alt="">
        <div>
           <p class="info"><strong>PLAYLIST</strong></p> 
           <h1>{{ playlist.infos.title }}</h1> 
            <p><strong>Matheus Almeida</strong> - {{ playlist.musics.length }} songs</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        playlist: {
            type: Object,
            required: true
        }
    },
    methods: {
        getImage() {
            const imageName = this.playlist.infos.img;
            return require('@/assets/musicImage/'+ imageName +'.jpg');
        }
    }
}
</script>

<style lang="css" scoped>
    .playlist-description {
        height: 340px;
        width: 100%;
        background: #ad5389;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #3c1053, #ad5389);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #3c1053, #ad5389); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
        width: 232px;
        height: 232px;
    }

    h1 {
        font-size: 96px;
        padding-bottom: 13px;
    }

    .info {
        font-size: 12px;
    }

    @media screen and (max-width: 600px) {
        img {
            width: 108px;
            height: 108px;
        }

        h1 {
            font-size: 64px;
        }

        .playlist-description {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>