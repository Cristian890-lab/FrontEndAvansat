import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Song } from '../../shared/Song.model';
import { FavoriteService } from '../Favorite-list.service';

@Component({
  selector: 'app-Favorite-edit',
  templateUrl: './Favorite-edit.component.html',
  styleUrls: ['./Favorite-edit.component.css']
})
export class FavoriteEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Song;

  constructor(private slService: FavoriteService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getSong(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            duration: this.editedItem.duration
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newSong = new Song(value.name, value.duration);
    if (this.editMode) {
      this.slService.updateSong(this.editedItemIndex, newSong);
    } else {
      this.slService.addSong(newSong);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteSong(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
