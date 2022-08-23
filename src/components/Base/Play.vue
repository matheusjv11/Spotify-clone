<template>
    <v-btn v-if="playing" icon @click="pauseMusic()">
        <v-icon >mdi-pause-circle</v-icon>
    </v-btn>
    <v-btn v-else icon @click="playMusic()">
        <v-icon>mdi-play-circle</v-icon>
    </v-btn>
</template>

<script>
export default {
    props: {
        playing: {
          type: Boolean,  
        },
    },
    methods: {
        pauseMusic() {
            this.$store.dispatch('pauseMusic');
            this.$emit('beenClicked');
        },
        playMusic() {
            this.$store.dispatch('playMusic');
            this.$emit('beenClicked');
        },
    }
}
</script>
