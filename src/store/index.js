import Vue from 'vue'
import Vuex from 'vuex'
import musicTeste from '../assets/musicFiles/1.mp3';
import MusicService from '../service/musicService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    music: new Audio(musicTeste),
    currentTime: 0,
    duration: 0,
    isPlayingMusic: false
  },
  mutations: {
    UPDATE_CURRENT_TIME(state, payload) {
      state.currentTime = payload;
    },
    UPDATE_DURATION(state, payload) {
      state.duration = payload;
    },
    UPDATE_MUSIC_CURRENT_TIME(state, payload) {
      state.music.currentTime = payload;
    },
    UPDATE_PLAYING_STATUS(state, payload) {
      state.isPlayingMusic = payload;
    },

  },
  actions: {
    skipFifteenSeconds(ctx) {
      const currentTime = ctx.state.music.currentTime;
      ctx.commit('UPDATE_MUSIC_CURRENT_TIME', currentTime + 15 );
    },

    goBacKFifteenSeconds(ctx) {
      const currentTime = ctx.state.music.currentTime;
      ctx.commit('UPDATE_MUSIC_CURRENT_TIME', currentTime - 15 );
    },

    playMusic(ctx) {
      ctx.state.music.play();
      ctx.commit('UPDATE_PLAYING_STATUS', true);
      ctx.commit('UPDATE_DURATION', ctx.state.music.duration);

      // remove it later, is getting really slow
      setInterval(() => {
        ctx.commit('UPDATE_CURRENT_TIME', ctx.state.music.currentTime);
      }, 2000);
    },

    pauseMusic(ctx) {
      ctx.state.music.pause();
      ctx.commit('UPDATE_PLAYING_STATUS', false);
    },

    changeCurrentTime(ctx, newTime) {
      console.log(newTime);
      ctx.commit('UPDATE_MUSIC_CURRENT_TIME', newTime);
    }
  },
  getters: {
    rawCurrentTime: function (state) {
      return state.currentTime;
    },

    formattedCurrentTime: function (state) {
      return MusicService.formattedTime(state.currentTime);
    },

    rawMusicDuration: function (state) {
      return state.duration;
    },

    formattedMusicDuration: function (state) {
      return MusicService.formattedTime(state.duration);
    }
  }
})
