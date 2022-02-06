import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Album } from '../Albums/Album.model';
import { AlbumService } from '../Albums/Album.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private AlbumService: AlbumService
  ) {}

  storeAlbums() {
    const Albums = this.AlbumService.getAlbums();
    this.http
      .put(
        'https://ng-course-Album-book-65f10.firebaseio.com/Albums.json',
        Albums
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchAlbums() {
    return this.http
      .get<Album[]>(
        'https://ng-course-Album-book-65f10.firebaseio.com/Albums.json'
      )
      .pipe(
        map(Albums => {
          return Albums.map(Album => {
            return {
              ...Album,
              Songs: Album.Songs ? Album.Songs : []
            };
          });
        }),
        tap(Albums => {
          this.AlbumService.setAlbums(Albums);
        })
      );
  }
}
