import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorageService.storeAlbums();
  }

  onFetchData() {
    this.dataStorageService.fetchAlbums().subscribe();
  }

  ngOnDestroy(): void {
  }

}
