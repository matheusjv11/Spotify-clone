<template>
  <td>
    <img src="../../../assets/musicImage/1.jpg" :alt="thumbnail.alt">
    <span>
        <p class="title">{{ title }}</p>
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
        thumbnail: {
            type: Object,
            required: true
        },
        artist: {
            type: String,
            required: true
        },
    },
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