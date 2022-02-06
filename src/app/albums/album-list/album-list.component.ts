import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Album } from '../Album.model';
import { AlbumService } from '../Album.service';

@Component({
  selector: 'app-Album-list',
  templateUrl: './Album-list.component.html',
  styleUrls: ['./Album-list.component.css']
})
export class AlbumListComponent implements OnInit, OnDestroy {
  Albums: Album[];
  subscription: Subscription;

  constructor(private AlbumService: AlbumService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.AlbumService.AlbumsChanged
      .subscribe(
        (Albums: Album[]) => {
          this.Albums = Albums;
        }
      );
    this.Albums = this.AlbumService.getAlbums();
  }

  onNewAlbum() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
