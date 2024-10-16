import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CharactersRestService } from './characters-rest.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private _characterRest: CharactersRestService) {}

  private SPLITER = ';';
  private ENUM_STORAGE = 'characters-ids';
  private _ids: BehaviorSubject<Number[]> = new BehaviorSubject<Number[]>([]);
  private _items: BehaviorSubject<Number[]> = new BehaviorSubject<Number[]>([]);

  get ids$(): Observable<Number[]> {
    return this._ids.asObservable();
  }

  get items$(): Observable<Number[]> {
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

    const ids: Number[] = currentIds.filter(
      (currentId: Number) => currentId !== id
    );

    this.setIds(ids);
  }

  isFavorite(id: Number) {
    let currentIds: Number[] = this._ids.getValue();

    return currentIds.includes(id);
  }

  getCharacters() {
    const ids = this._ids.getValue();

    return this._characterRest.getMultiples(ids);
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

  private setIds(ids: Number[], load?: Boolean) {
    this._ids.next(ids);

    if (!load) {
      localStorage.setItem(this.ENUM_STORAGE, ids.join(this.SPLITER));
    }
  }
}
