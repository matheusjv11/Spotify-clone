import playlists from '../assets/playlists.json';

export default class PlaylistService {

    static list() {
        return Object.entries(playlists);
    }

    static get(id) {
        const playlistArray = this.list();
        
        let result = playlistArray.filter((playlsit) => {
            return playlsit[0] === id;
        });

        return this.playlistFromEntrie(result);
    }

    static playlistFromEntrie(entrie) {
        return entrie[0][1];
    }
}