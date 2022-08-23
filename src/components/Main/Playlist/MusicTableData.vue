<template>
  <td>
    <img :src="getImage()" alt="Album cover image">
    <span>
        <p class="title" :class="{'green-text': isCurrentMusic}">{{ title }}</p>
        <p>{{ artist }}</p>
    </span>
  </td>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        isCurrentMusic: {
            type: Boolean
        },
        artist: {
            type: String,
            required: true
        },
    },
    methods: {
        getImage() {
            return require('@/assets/musicImage/'+ this.id +'.jpg');
        }
    }
}
</script>

<style scoped>
    td {
        display: flex;
        gap: 16px;
    }

    .title {
        font-size: 16px;
        font-weight: 300;
        color: white;
    }

    img {
        height: 40px;
        widows: 40px;
    }
</style>