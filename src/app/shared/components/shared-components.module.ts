import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountFavoritesComponent } from './count-favorites/count-favorites.component';
import { TitleComponent } from './title/title.component';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CountFavoritesComponent,
    TitleComponent,
    ListCharactersComponent,
    CharacterCardComponent,
    FavoriteButtonComponent,
  ],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [CountFavoritesComponent, TitleComponent, ListCharactersComponent],
})
export class SharedComponentsModule {}
