import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { AlbumService } from '../Album.service';

@Component({
  selector: 'app-Album-edit',
  templateUrl: './Album-edit.component.html',
  styleUrls: ['./Album-edit.component.css']
})
export class AlbumEditComponent implements OnInit {
  id: number;
  editMode = false;
  AlbumForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private AlbumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    // const newAlbum = new Album(
    //   this.AlbumForm.value['name'],
    //   this.AlbumForm.value['description'],
    //   this.AlbumForm.value['imagePath'],
    //   this.AlbumForm.value['Songs']);
    if (this.editMode) {
      this.AlbumService.updateAlbum(this.id, this.AlbumForm.value);
    } else {
      this.AlbumService.addAlbum(this.AlbumForm.value);
    }
    this.onCancel();
  }

  onAddSong() {
    (<FormArray>this.AlbumForm.get('Songs')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        duration: new FormControl(null,Validators.required)
      })
    );
  }

  onDeleteSong(index: number) {
    (<FormArray>this.AlbumForm.get('Songs')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let AlbumName = '';
    let AlbumImagePath = '';
    let AlbumDescription = '';
    let AlbumSongs = new FormArray([]);

    if (this.editMode) {
      const Album = this.AlbumService.getAlbum(this.id);
      AlbumName = Album.name;
      AlbumImagePath = Album.imagePath;
      AlbumDescription = Album.description;
      if (Album['Songs']) {
        for (let Song of Album.Songs) {
          AlbumSongs.push(
            new FormGroup({
              name: new FormControl(Song.name, Validators.required),
              duration: new FormControl(Song.duration,Validators.required)
            })
          );
        }
      }
    }

    this.AlbumForm = new FormGroup({
      name: new FormControl(AlbumName, Validators.required),
      imagePath: new FormControl(AlbumImagePath, Validators.required),
      description: new FormControl(AlbumDescription, Validators.required),
      Songs: AlbumSongs
    });
  }
}
