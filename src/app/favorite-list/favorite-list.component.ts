import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Song } from '../shared/Song.model';
import { FavoriteService } from './Favorite-list.service';

@Component({
  selector: 'app-Favorite-list',
  templateUrl: './Favorite-list.component.html',
  styleUrls: ['./Favorite-list.component.css']
})
export class FavoriteComponent implements OnInit, OnDestroy {
  Songs: Song[];
  private subscription: Subscription;

  constructor(private slService: FavoriteService) { }

  ngOnInit() {
    this.Songs = this.slService.getSongs();
    this.subscription = this.slService.SongsChanged
      .subscribe(
        (Songs: Song[]) => {
          this.Songs = Songs;
        }
      );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
