import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/models/character.class';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  characters: Character[];

  constructor(private _characters: CharactersService) {}

  ngOnInit(): void {
    this.characters = this._characters.getCharacters();
  }
}
