<template>
      <li class="playlistItem">
        <a href="#" class="playlistLink">
            <p>{{ text }}</p>
        </a>
    </li>
</template>

<script>
export default {
    props: {
        text: {
            required: true,
            type: String
        }
    }
}
</script>

<style>
    .playlistItem {
        opacity: 0.7;
        padding: 7px 0px;
        display: flex;
        align-items: center;
    }

    .playlistItem:hover {
        opacity: 1;
    }
</style>