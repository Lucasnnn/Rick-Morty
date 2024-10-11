import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private SPLITER = ';';
  private ENUM_STORAGE = 'characters-ids';
  private _ids: BehaviorSubject<Number[]> = new BehaviorSubject<Number[]>([]);

  get ids$(): Observable<Number[]> {
    return this._ids.asObservable();
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

  setIds(ids: Number[], load?: Boolean) {
    this._ids.next(ids);

    if (!load) {
      localStorage.setItem(this.ENUM_STORAGE, ids.join(this.SPLITER));
    }
  }
}
