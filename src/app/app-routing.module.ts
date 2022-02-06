import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from './Albums/Albums.component';
import { FavoriteComponent } from './Favorite-list/Favorite-list.component';
import { AlbumStartComponent } from './Albums/Album-start/Album-start.component';
import { AlbumDetailComponent } from './Albums/Album-detail/Album-detail.component';
import { AlbumEditComponent } from './Albums/Album-edit/Album-edit.component';
import { AlbumsResolverService } from './Albums/Albums-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/Albums', pathMatch: 'full' },
  {
    path: 'albums',
    component: AlbumsComponent,
    children: [
      { path: '', component: AlbumStartComponent },
      { path: 'new', component: AlbumEditComponent },
      {
        path: ':id',
        component: AlbumDetailComponent,
        resolve: [AlbumsResolverService]
      },
      {
        path: ':id/edit',

        component: AlbumEditComponent,
        resolve: [AlbumsResolverService]
      }
    ]
  },
  { path: 'favorite', component: FavoriteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
