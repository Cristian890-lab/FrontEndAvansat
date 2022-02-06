import { Component, OnInit, Input } from '@angular/core';

import { Album } from '../../Album.model';

@Component({
  selector: 'app-Album-item',
  templateUrl: './Album-item.component.html',
  styleUrls: ['./Album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input() Album: Album;
  @Input() index: number;

  ngOnInit() {
  }
}
