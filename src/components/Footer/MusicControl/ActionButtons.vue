<template>
    <div class="actions">
        <v-btn icon @click="$store.dispatch('goBacKFifteenSeconds')">
            <v-icon>mdi-rewind-15</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-skip-previous</v-icon>
        </v-btn>
        <Play :playing="$store.state.isPlayingMusic" />
        <v-btn icon>
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
