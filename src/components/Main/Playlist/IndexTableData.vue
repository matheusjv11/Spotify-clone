<template>
    <td  class="index-column">
        <span v-if="hovered">
            <Play 
                :playing="playingMusic"
                @beenClicked="updateMainMusic()"
                />
        </span>
        <span v-else :class="{'green-text': isCurrentMusic}">
            <template v-if="playingMusic">
                <img src="@/assets/icons/equalizer.gif" alt="">
            </template>
            <template v-else>
                {{ tableIndex }}
            </template>
        </span>
    </td>
</template>

<script>
import Play from '@/components/Base/Play.vue';

export default {
    components: {
        Play
    },
    props: {
       hovered: {
        type: Boolean
       },
       isCurrentMusic: {
        type: Boolean
       },
       music: {
        type: Object
       },
       tableIndex: {
        type: Number
       }
    },
    computed: {
        playingMusic()  {
            return this.isCurrentMusic && this.$store.state.isPlayingMusic;
        }
    },
    methods: {
        updateMainMusic() {
            this.$store.dispatch('initMusic', {
                music: this.music,
                play: true
            });
        }
    }
}
</script>

<style>

</style>