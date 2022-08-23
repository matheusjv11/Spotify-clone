import playlists from '../assets/playlists.json';

export default class PlaylistService {

    static list() {
        return Object.entries(playlists);
    }

    static loadedId() {
        return new URL(location.href).searchParams.get('playlist') || '1' ;
    }

    static getCurrent() {
        const playlistArray = this.list();
        
        let result = playlistArray.filter((playlsit) => {
            return playlsit[0] === this.loadedId();
        });

        return this.playlistFromEntrie(result);
    }

    static playlistFromEntrie(entrie) {
        return entrie[0][1];
    }
}