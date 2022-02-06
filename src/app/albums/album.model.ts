import { Song } from '../shared/Song.model';

export class Album {
  public name: string;
  public description: string;
  public imagePath: string;
  public Songs: Song[];

  constructor(name: string, desc: string, imagePath: string, Songs: Song[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.Songs = Songs;
  }
}
