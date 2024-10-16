import { Injectable } from '@angular/core';
import { Character } from '../models/character.class';
import { CharactersRestService } from './characters-rest.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private _charactersRest: CharactersRestService) {}

  private nextPage = '';
  private _items = new BehaviorSubject<Character[]>([]);

  get items$(): Observable<Character[]> {
    return this._items.asObservable();
  }

  loadAll(): void {
    this._charactersRest
      .getAll()
      .pipe(
        tap((resp) => {
          if (resp.results) {
            this.setItems(resp.results, resp.info.next);
          }
        })
      )
      .subscribe();
  }

  loadNextPage(): void {
    this._charactersRest
      .getAll(this.nextPage)
      .pipe(
        tap((resp) => {
          if (resp.results) {
            const atualItems = this._items.getValue();

            atualItems.push(...resp.results);

            this.setItems(atualItems, resp.info.next);
          }
        })
      )
      .subscribe();
  }

  filter(name: string): void {
    this._charactersRest
      .filter(name)
      .pipe(
        tap((resp) => {
          if (resp.results) {
            this.setItems(resp.results, resp.info.next);
          }
        })
      )
      .subscribe();
  }

  private setItems(items: Character[], nextPage: string) {
    this._items.next(items);

    this.nextPage = nextPage;
  }
}
