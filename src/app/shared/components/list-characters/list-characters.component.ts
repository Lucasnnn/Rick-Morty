import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../models/character.class';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss'],
})
export class ListCharactersComponent {
  @Input() characters: Character[];

  @Output() nextPage = new EventEmitter<Boolean>(false);

  onScroll() {
    this.nextPage.emit(true);
  }
}
