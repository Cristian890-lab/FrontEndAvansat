import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../../album.model";
import {Song} from "../../../shared/song.model";

@Component({
  selector: 'app-Song',
  templateUrl: './Song.component.html',
  styleUrls: ['./Song.component.css']
})
export class SongComponent implements OnInit {
  @Input() album: Album
  albums: Song[];

  constructor() { }

  ngOnInit(): void {
  }

}
