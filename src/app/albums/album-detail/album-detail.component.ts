import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Album } from '../Album.model';
import { AlbumService } from '../Album.service';

@Component({
  selector: 'app-Album-detail',
  templateUrl: './Album-detail.component.html',
  styleUrls: ['./Album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  Album: Album;
  id: number;

  constructor(private AlbumService: AlbumService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.Album = this.AlbumService.getAlbum(this.id);
        }
      );
  }

  onAddToFavorite() {
    this.AlbumService.addSongsToFavorite(this.Album.Songs);
  }

  onEditAlbum() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteAlbum() {
    this.AlbumService.deleteAlbum(this.id);
    this.router.navigate(['/Albums']);
  }

}
