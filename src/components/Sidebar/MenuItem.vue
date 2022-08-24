<template>
    <li class="menuItem">
        <a href="#" class="menuLink">
            <img :src="require(`@/assets/icons/${this.iconImage}`)" :alt="iconAlt" class="menuImage">
            <p>{{ text }}</p>
        </a>
    </li>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        iconImage: {
            type: String,
            required: true
        },
        iconAlt: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

    .menuItem {
        height: 40px;
        opacity: 0.7;
        transition: opacity ease-in-out 0.2s;
    }

    .menuItem:hover {
        opacity: 1;
    }


    .menuLink {
        display: flex;
        gap: 16px;
        align-items: center;
        text-decoration: none;
        color: white;
        height: 100%;
        cursor: default;
    }

    .menuImage {
        height: 24px;
        widows: 24px;
    }

    .menuLink p {
        font-size: 14px;
    }
</style>