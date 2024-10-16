import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CharactersRestService } from './characters-rest.service';
import { Character } from '../models/character.class';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private _characterRest: CharactersRestService) {}

  private SPLITER = ';';
  private ENUM_STORAGE = 'characters-ids';
  private _ids: BehaviorSubject<Number[]> = new BehaviorSubject<Number[]>([]);
  private _items: BehaviorSubject<Character[]> = new BehaviorSubject<
    Character[]
  >([]);

  get ids$(): Observable<Number[]> {
    return this._ids.asObservable();
  }

  get items$(): Observable<Character[]> {
    return this._items.asObservable();
  }

  add(id: Number) {
    let currentIds: Number[] = this._ids.getValue();

    if (!currentIds.includes(id)) {
      currentIds.push(id);

      this.setIds(currentIds);
    }
  }

  remove(id: Number) {
    let currentIds: Number[] = this._ids.getValue();
    let currentItems: Character[] = this._items.getValue();

    const ids: Number[] = currentIds.filter(
      (currentId: Number) => currentId !== id
    );

    const items: Character[] = currentItems.filter((character: Character) =>
      ids.includes(character?.id)
    );

    this.setIds(ids);
    this._items.next(items);
  }

  isFavorite(id: Number) {
    let currentIds: Number[] = this._ids.getValue();

    return currentIds.includes(id);
  }

  getCharacters(): void {
    const ids = this._ids.getValue();

    this._characterRest
      .getByIds(ids)
      .pipe(
        tap((characters) => {
          if (Array.isArray(characters)) {
            this._items.next(characters);
          } else {
            this._items.next([characters]);
          }
        })
      )
      .subscribe();
  }

  preLoad(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const storage: string = localStorage.getItem(this.ENUM_STORAGE);

        if (storage) {
          const ids: Number[] = storage.split(this.SPLITER).map((idString) => {
            if (idString) {
              return Number(idString);
            }
          });

          this.setIds(ids, true);
        }

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  clearItems() {
    this._items.next([]);
  }

  private setIds(ids: Number[], load?: Boolean) {
    this._ids.next(ids);

    if (!load) {
      localStorage.setItem(this.ENUM_STORAGE, ids.join(this.SPLITER));
    }
  }
}
