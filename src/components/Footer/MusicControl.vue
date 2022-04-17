<template>
  <main>
      <div class="actions">
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>skip-previous</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>skip-next</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>repeat-variant</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>play-circle</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>pause-circle</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>pause-circle</v-icon>
            </v-btn>
      </div>
      <div class="timeline">
          <p>1:18</p>
          <progress id="file" value="32" max="100"> 32% </progress>
          <p>3:28</p>
      </div>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
    main {
        display: flex;
        flex-direction: column;
        color: rgb(179, 179, 179);
    }

    .timeline {
        display: flex;
        gap: 5px;
    }

    .timeline p {
        font-size: 11px;
    }

    progress {
    height: 7px;
    }
    progress::-webkit-progress-bar {
    background-color: rgba(94,94,94,255);
    border-radius: 10px;
    }
    progress::-webkit-progress-value {
    background-color: white;
    border-radius: 10px;
    }

/*     i.v-icon.v-icon {
        color: white !important;
    } */
</style>