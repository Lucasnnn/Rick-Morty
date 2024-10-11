import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
})
export class FavoriteButtonComponent implements OnInit {
  @Input() id: number;

  @Output() isFavorite = new EventEmitter<boolean>(false);

  favorite = false;

  constructor(private _favorites: FavoritesService) {}

  ngOnInit(): void {
    this.checkFavorited();
  }

  toggle() {
    this.favorite = !this.favorite;

    if (this.favorite) {
      this._favorites.add(this.id);
    } else {
      this._favorites.remove(this.id);
    }

    this.emit();
  }

  checkFavorited() {
    this.favorite = this._favorites.isFavorite(this.id);

    setTimeout(() => {
      this.emit();
    }, 0);
  }

  emit() {
    this.isFavorite.emit(this.favorite);
  }
}
