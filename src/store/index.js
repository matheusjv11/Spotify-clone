import Vue from 'vue'
import Vuex from 'vuex'
import demoMusic from '../assets/musicFiles/1.mp3';
import MusicService from '../service/musicService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    music: null,
    currentTime: 0,
    duration: 0,
    volume: 0.5,
    isPlayingMusic: false
  },
  mutations: {
    CREATE_MUSIC(state, payload) {
      state.music = payload
    },
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
    UPDATE_MUSIC_VOLUME(state, payload) {
      state.music.volume= payload;
    }
  },
  actions: {
    initMusic(ctx, music) {
      const newMusic = new Audio(music);
      
      ctx.commit('CREATE_MUSIC', newMusic);
      
      ctx.state.music.ontimeupdate = () => {
        ctx.commit('UPDATE_CURRENT_TIME', ctx.state.music.currentTime);
      }

      ctx.state.music.onloadedmetadata = ()=> {
        ctx.commit('UPDATE_DURATION', ctx.state.music.duration);
      }

      ctx.state.music.onvolumechange = ()=> {
        ctx.commit('UPDATE_DURATION', ctx.state.music.duration);
      }
    },

    skipFifteenSeconds(ctx) {
      const currentTime = ctx.state.music.currentTime;
      ctx.commit('UPDATE_MUSIC_CURRENT_TIME', currentTime + 15 );
    },

    goBacKFifteenSeconds(ctx) {
      const currentTime = ctx.state.music.currentTime;
      ctx.commit('UPDATE_MUSIC_CURRENT_TIME', currentTime - 15 );
    },

    playMusic(ctx) {
      if (ctx.state.music === null) {
        ctx.dispatch('initMusic', demoMusic);
      }

      ctx.state.music.play();
      ctx.commit('UPDATE_PLAYING_STATUS', true);
    },

    pauseMusic(ctx) {
      ctx.state.music.pause();
      ctx.commit('UPDATE_PLAYING_STATUS', false);
    },

    changeCurrentTime(ctx, newTime) {
      ctx.commit('UPDATE_MUSIC_CURRENT_TIME', newTime);
    },

    changeVolume(ctx, newVolume) {
      ctx.commit('UPDATE_MUSIC_VOLUME', newVolume);
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
