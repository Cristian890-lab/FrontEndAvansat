import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Album } from './Album.model';
import { DataStorageService } from '../shared/data-storage.service';
import { AlbumService } from './Album.service';

@Injectable({ providedIn: 'root' })
export class AlbumsResolverService implements Resolve<Album[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private AlbumsService: AlbumService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const Albums = this.AlbumsService.getAlbums();

    if (Albums.length === 0) {
      return this.dataStorageService.fetchAlbums();
    } else {
      return Albums;
    }
  }
}
