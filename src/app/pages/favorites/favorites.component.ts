import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/models/character.class';
import { FavoritesService } from 'src/app/shared/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit, OnDestroy {
  constructor(private _favorites: FavoritesService) {}
  subscription: Subscription;
  characters: Character[] = null;

  ngOnInit(): void {
    this.subscriptionCharacters();

    this.initLoad();
  }

  subscriptionCharacters() {
    this.subscription = this._favorites.items$.subscribe({
      next: (value) => {
        if (value) {
          this.characters = value;
        }
      },
    });
  }

  initLoad() {
    this._favorites.getCharacters();
  }

  ngOnDestroy(): void {
    this._favorites.clearItems();
    this.subscription.unsubscribe();
  }
}
