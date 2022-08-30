<template>
    <div class="actions-timeline">
        <v-btn icon @click="$store.dispatch('goBacKFifteenSeconds')">
            <v-icon>mdi-rewind-15</v-icon>
        </v-btn>
        <v-btn icon  @click="$store.dispatch('previousMusic')">
            <v-icon>mdi-skip-previous</v-icon>
        </v-btn>
        <Play 
            :playing="$store.state.isPlayingMusic"
            class="footer-play-button" 
        />
        <v-btn icon @click="$store.dispatch('nextMusic')">
            <v-icon>mdi-skip-next</v-icon>
        </v-btn>
        <v-btn icon @click="$store.dispatch('skipFifteenSeconds')">
            <v-icon>mdi-fast-forward-15</v-icon>
        </v-btn>
    </div>
</template>

<script>
import Play from '@/components/Base/Play.vue';

export default {
    components: {Play}
}
</script>

<style>
    .actions-timeline {
        display: flex;
        justify-content: center;
        gap: 8px;
    }

    .footer-play-button i {
        font-size: 44px !important;
    }

    @media screen and (max-width: 600px) {
        .actions-timeline {
            gap: 8px;
        }

        .actions-timeline i {
            font-size: 15px !important;
        }

        .footer-play-button i {
            font-size: 26px !important;
        }

        .v-btn--icon.v-size--default {
            width: 18px;
            height: 18px;
        }
    }
</style>