import { Component, OnInit } from '@angular/core';
import {Album} from "../album.model";

@Component({
  selector: 'app-Song-list',
  templateUrl: './Song-list.component.html',
  styleUrls: ['./Song-list.component.css']
})
export class SongListComponent implements OnInit {
  albums: Album[] = [
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
