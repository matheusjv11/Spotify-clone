import musicsJson from '../assets/musics.json';
import PlaylistService from './playlistService';

export default class MusicService {
    static formattedTime(duration) {
        const intDuration = parseInt(duration);

        if (isNaN(intDuration)) {
            return '0:00';
        }

        let minutes = Math.floor(intDuration  / 60);
        let seconds = intDuration - (minutes * 60);
    
        if (seconds < 10) {seconds = "0"+seconds;}

        return minutes + ':' + seconds;
    }

    static get(id) {
        const result = this.list([id]);
        return result[0];
    }

    static list(ids) {
        return musicsJson.musics.filter((music) => {
            return ids.includes(music.id);
        });
    }

    static getNextMusic(current) {
        const playlist = PlaylistService.getCurrent();
        const currentIndex = playlist.musics.indexOf(current);

        if (currentIndex == playlist.musics.length - 1) {
            return this.get(playlist.musics[0]);
        }

        return this.get(playlist.musics[currentIndex + 1]);
    }

    static getPrevioustMusic(current) {
        const playlist = PlaylistService.getCurrent();
        const currentIndex = playlist.musics.indexOf(current);

        if (currentIndex == 0) {
            return null;
        }

        return this.get(playlist.musics[currentIndex - 1]);
    }
}