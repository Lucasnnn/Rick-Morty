import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountFavoritesComponent } from './count-favorites/count-favorites.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    CountFavoritesComponent, 
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CountFavoritesComponent,
    TitleComponent
  ]
})
export class SharedComponentsModule { }
