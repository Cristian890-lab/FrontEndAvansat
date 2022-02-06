import { Component, OnInit } from '@angular/core';
import {Song} from "../shared/Song.model";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  Songs: Song[] = [
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
