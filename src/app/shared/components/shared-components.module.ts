import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountFavoritesComponent } from './count-favorites/count-favorites.component';
import { TitleComponent } from './title/title.component';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { CharacterCardComponent } from './character-card/character-card.component';

@NgModule({
  declarations: [
    CountFavoritesComponent,
    TitleComponent,
    ListCharactersComponent,
    CharacterCardComponent,
  ],
  imports: [CommonModule],
  exports: [CountFavoritesComponent, TitleComponent, ListCharactersComponent],
})
export class SharedComponentsModule {}
