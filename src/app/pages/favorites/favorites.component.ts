import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/models/character.class';
import { FavoritesService } from 'src/app/shared/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  constructor(private _favorites: FavoritesService) {}
  characters: Character[];

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this._favorites.getCharacters().subscribe({
      next: (characters) => {
        this.characters = characters;
      },
    });
  }
}
