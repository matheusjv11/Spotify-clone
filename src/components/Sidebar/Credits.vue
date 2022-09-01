<template>
    <div class="main-credits">
        <dialog ref="dialog">
            <div class="main-dialog">
                <ul>
                    <li>Song: Jim Yosef - Samurai [NCS Release] Music provided by NoCopyrightSounds Free Download/Stream: http://NCS.io/Samurai Watch: http://youtu.be/</li>
                    <li>Song: Everen Maxwell - Bot Fight [NCS Release] Music provided by NoCopyrightSounds Free Download/Stream: http://NCS.io/BotFight Watch: http://youtu.be/</li>
                    <li>Song: Near x Far - Not Enough [NCS Release] Music provided by NoCopyrightSounds Free Download/Stream: http://NCS.io/NotEnough Watch: http://youtu.be/</li>
                    <li>Song: Paul Flint - The Feeling [NCS Release] Music provided by NoCopyrightSounds Free Download/Stream: http://NCS.io/TheFeeling Watch: http://youtu.be/</li>
                </ul>
                <v-btn
                    @click="closeDialog()"
                    outlined
                >
                Close  
                </v-btn>
            </div>
        </dialog>

        <v-btn
            @click="openDialog()"
            outlined
        >Music source</v-btn>
        <p class="author"> By <a href="https://www.linkedin.com/in/matheusjv11/">Matheus Almeida</a></p>
    </div>
</template>

<script>
export default {
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
        openDialog() {
            this.$refs.dialog.showModal();
        },
        closeDialog() {
            this.$refs.dialog.close();
        }
    }
}
</script>

<style scoped>
    dialog {
        margin: auto;
        padding: 20px;
        background-color: rgb(24, 24, 24);
        color: white;
        border-radius: 5px;
    }

    .main-dialog {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main-credits {
        width: 187px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        margin-top: 10px;
    }
    
    .author {
        color: white;
        padding-bottom: 15px;
    }

    .author a {
        text-decoration: underline;
    }

    .v-btn:not(.v-btn--round).v-size--default {
        background-color: rgb(24, 24, 24);
        color: white;
        height: 26px;
        font-size: 12px;
    }

    ul {
        list-style-type: circle;
    }

    li {
        margin: 10px;
    }
</style>