import { Song } from '../shared/Song.model';
import { Subject } from 'rxjs';

export class FavoriteService {
  SongsChanged = new Subject<Song[]>();
  startedEditing = new Subject<number>();
  private Songs: Song[] = [
    new Song('Feel Good Inc.', "3:14")
  ];

  getSongs() {
    return this.Songs.slice();
  }

  getSong(index: number) {
    return this.Songs[index];
  }

  addSong(Song: Song) {
    this.Songs.push(Song);
    this.SongsChanged.next(this.Songs.slice());
  }

  addSongs(Songs: Song[]) {
    // for (let Song of Songs) {
    //   this.addSong(Song);
    // }
    this.Songs.push(...Songs);
    this.SongsChanged.next(this.Songs.slice());
  }

  updateSong(index: number, newSong: Song) {
    this.Songs[index] = newSong;
    this.SongsChanged.next(this.Songs.slice());
  }

  deleteSong(index: number) {
    this.Songs.splice(index, 1);
    this.SongsChanged.next(this.Songs.slice());
  }
}
