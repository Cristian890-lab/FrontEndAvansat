import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlbumsComponent } from './Albums/Albums.component';
import { AlbumListComponent } from './Albums/Album-list/Album-list.component';
import { AlbumDetailComponent } from './Albums/Album-detail/Album-detail.component';
import { AlbumItemComponent } from './Albums/Album-list/Album-item/Album-item.component';
import { FavoriteComponent } from './Favorite-list/Favorite-list.component';
import { FavoriteEditComponent } from './favorite-list/favorite-edit/favorite-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { FavoriteService } from './Favorite-list/Favorite-list.service';
import { AppRoutingModule } from './app-routing.module';
import { AlbumStartComponent } from './Albums/Album-start/Album-start.component';
import { AlbumEditComponent } from './Albums/Album-edit/Album-edit.component';
import { AlbumService } from './Albums/Album.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import {SongListComponent} from "./albums/song-list/song-list.component";
import {SongComponent} from "./albums/song-list/song/song.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import {FavoritesEditComponent} from "./favorites/favorites-edit/favorites-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlbumsComponent,
    AlbumListComponent,
    AlbumDetailComponent,
    AlbumItemComponent,
    FavoriteComponent,
    SongListComponent,
    FavoriteEditComponent,
    DropdownDirective,
    AlbumStartComponent,
    FavoritesComponent,
    AlbumEditComponent,
    LoadingSpinnerComponent,
    SongComponent,
    FavoritesEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    FavoriteService,
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
