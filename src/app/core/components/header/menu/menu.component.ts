import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavoritesService } from 'src/app/shared/services/favorites.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  count = 0;

  private subscription: Subscription;

  constructor(private _favorites: FavoritesService) {}

  ngOnInit(): void {
    this.favoritesSubscribe();
  }

  favoritesSubscribe() {
    this.subscription = this._favorites.ids$.subscribe({
      next: (ids: Number[]) => {
        this.count = ids?.length;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
