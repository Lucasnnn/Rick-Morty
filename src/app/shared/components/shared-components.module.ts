import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    TitleComponent,
    ListCharactersComponent,
    CharacterCardComponent,
    FavoriteButtonComponent,
  ],
  imports: [CommonModule, MatIconModule, MatButtonModule, InfiniteScrollModule],
  exports: [TitleComponent, ListCharactersComponent],
})
export class SharedComponentsModule {}
