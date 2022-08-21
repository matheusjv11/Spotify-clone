import musicsJson from '../assets/musics.json';
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

    static list(ids) {
        let result = musicsJson.musics.filter((music) => {
            return ids.includes(music.id);
        });

        return result;
    }

}