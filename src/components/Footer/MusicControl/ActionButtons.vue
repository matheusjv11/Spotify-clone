<template>
    <div class="actions">
        <v-btn icon>
            <v-icon>mdi-skip-previous</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-skip-next</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-repeat-variant</v-icon>
        </v-btn>
        <v-btn v-if="$store.state.isPlayingMusic" icon @click="$store.dispatch('pauseMusic')">
            <v-icon >mdi-pause-circle</v-icon>
        </v-btn>
        <v-btn v-else icon @click="$store.dispatch('playMusic')">
            <v-icon>mdi-play-circle</v-icon>
        </v-btn>
        <v-btn icon @click="$store.dispatch('goBacKFifteenSeconds')">
            <v-icon>mdi-rewind-15</v-icon>
        </v-btn>
        <v-btn icon @click="$store.dispatch('skipFifteenSeconds')">
            <v-icon>mdi-fast-forward-15</v-icon>
        </v-btn>
    </div>
</template>

<style>
  .actions .v-icon.mdi {
    color: rgba(255, 255, 255, 0.7) !important;
  }

  .actions .v-icon.mdi:hover {
    color: white !important;
  }
</style>