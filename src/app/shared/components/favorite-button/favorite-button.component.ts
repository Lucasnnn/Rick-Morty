import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
})
export class FavoriteButtonComponent implements OnInit {
  @Input() iddd: number;

  @Output() isFavorite = new EventEmitter<boolean>(false);

  favorite = false;

  private ids = [2, 4, 5];

  ngOnInit(): void {
    this.checkFavorited();
  }

  toggle() {
    this.favorite = !this.favorite;

    this.emit();
  }

  checkFavorited() {
    this.favorite = this.ids?.includes(this.iddd);

    setTimeout(() => {
      this.emit();
    }, 0);
  }

  emit() {
    this.isFavorite.emit(this.favorite);
  }
}
