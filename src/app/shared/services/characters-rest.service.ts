import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersResponse } from '../models/characters-response.type';
import { Character } from '../models/character.class';

@Injectable({
  providedIn: 'root',
})
export class CharactersRestService {
  private baseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private _http: HttpClient) {}

  getAll(url?: string) {
    return this._http.get<CharactersResponse>(url ?? this.baseUrl);
  }

  filter(name: string) {
    return this._http.get<CharactersResponse>(this.baseUrl + '?name=' + name);
  }

  getMultiples(ids: Number[]) {
    return this._http.get<Character[]>(this.baseUrl + ids.join(','));
  }
}
