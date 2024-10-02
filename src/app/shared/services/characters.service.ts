import { Injectable } from '@angular/core';
import { MOCK_PERSONS } from 'src/assets/mock/mock-person';
import { Character } from '../models/character.class';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor() {}

  getCharacters(): Character[] {
    return MOCK_PERSONS.results;
  }
}
