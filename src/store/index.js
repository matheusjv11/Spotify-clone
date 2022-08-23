import Vue from 'vue'
import Vuex from 'vuex'
import MusicService from '../service/musicService';

Vue.use(Vuex);

const mainMusic = new Audio();

export default new Vuex.Store({
  state: {
    music: null,
    musicDescription: null,
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
    },
    UPDATE_VOLUME(state, payload) {
      state.volume = payload;
    },
    UPDATE_MUSIC_DESCRIPTION(state, payload) {
      state.musicDescription = payload;
    }
  },
  actions: {
    initMusic(ctx, actionObj) {
      if (ctx.state.musicDescription) {
        if (actionObj.music.id == ctx.state.musicDescription.id) {
          return;
        }
        ctx.state.music;
      }
      
      mainMusic.src = require(`@/assets/musicFiles/${actionObj.music.id}.mp3`);
      mainMusic.load();
  
      ctx.commit('CREATE_MUSIC', mainMusic);
      ctx.commit('UPDATE_MUSIC_DESCRIPTION', actionObj.music);
      
      ctx.state.music.ontimeupdate = () => {
        ctx.commit('UPDATE_CURRENT_TIME', ctx.state.music.currentTime);
      }

      ctx.state.music.onloadedmetadata = ()=> {
        ctx.commit('UPDATE_DURATION', ctx.state.music.duration);
        ctx.commit('UPDATE_MUSIC_VOLUME', ctx.state.volume);

        if (actionObj.play) {
          ctx.dispatch('playMusic');
        }
      }

      ctx.state.music.onvolumechange = ()=> {
        ctx.commit('UPDATE_VOLUME', ctx.state.music.volume);
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
      if (ctx.state.music) {
        ctx.state.music.play();
        ctx.commit('UPDATE_PLAYING_STATUS', true);
      }
    },

    pauseMusic(ctx) {
      ctx.state.music.pause();
      ctx.commit('UPDATE_PLAYING_STATUS', false);
    },

    nextMusic(ctx) {
      ctx.dispatch('initMusic', {
        music: MusicService.getNextMusic(ctx.state.musicDescription.id),
        play: true
      });
    },

    changeCurrentTime(ctx, newTime) {
      ctx.commit('UPDATE_MUSIC_CURRENT_TIME', newTime);
    },

    changeVolume(ctx, newVolume) {
      ctx.commit('UPDATE_MUSIC_VOLUME', newVolume / 100);
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
    },

    formattedVolume: function (state) {
      return state.volume * 100;
    }
  }
})
