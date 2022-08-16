<template>
    <div class="actions">
        <v-btn icon @click="$store.dispatch('goBacKFifteenSeconds')">
            <v-icon>mdi-rewind-15</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-skip-previous</v-icon>
        </v-btn>
        <v-btn v-if="$store.state.isPlayingMusic" icon @click="$store.dispatch('pauseMusic')">
            <v-icon >mdi-pause-circle</v-icon>
        </v-btn>
        <v-btn v-else icon @click="$store.dispatch('playMusic')">
            <v-icon>mdi-play-circle</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-skip-next</v-icon>
        </v-btn>
        <v-btn icon @click="$store.dispatch('skipFifteenSeconds')">
            <v-icon>mdi-fast-forward-15</v-icon>
        </v-btn>
    </div>
</template>