import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Album } from './Album.model';
import { Song } from '../shared/Song.model';
import { FavoriteService } from '../Favorite-list/Favorite-list.service';

@Injectable()
export class AlbumService {
  AlbumsChanged = new Subject<Album[]>();

  // private Albums: Album[] = [
  //   new Album(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //     [new Song('Meat', 1), new Song('French Fries', 20)]
  //   ),
  //   new Album(
  //     'Big Fat Burger',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [new Song('Buns', 2), new Song('Meat', 1)]
  //   )
  // ];
  private Albums: Album[] = [];

  constructor(private slService: FavoriteService) {}

  setAlbums(Albums: Album[]) {
    this.Albums = Albums;
    this.AlbumsChanged.next(this.Albums.slice());
  }

  getAlbums() {
    return this.Albums.slice();
  }

  getAlbum(index: number) {
    return this.Albums[index];
  }

  addSongsToFavorite(Songs: Song[]) {
    this.slService.addSongs(Songs);
  }

  addAlbum(Album: Album) {
    this.Albums.push(Album);
    this.AlbumsChanged.next(this.Albums.slice());
  }

  updateAlbum(index: number, newAlbum: Album) {
    this.Albums[index] = newAlbum;
    this.AlbumsChanged.next(this.Albums.slice());
  }

  deleteAlbum(index: number) {
    this.Albums.splice(index, 1);
    this.AlbumsChanged.next(this.Albums.slice());
  }
}
