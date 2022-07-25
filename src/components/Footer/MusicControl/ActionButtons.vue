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
        <v-btn icon>
            <v-icon>mdi-play-circle</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-pause-circle</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-fast-forward-15</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-rewind-15</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {

}
</script>

<style>
  .actions .v-icon.mdi {
    color: rgba(255, 255, 255, 0.7) !important;
  }

  .actions .v-icon.mdi:hover {
    color: white !important;
  }
</style>