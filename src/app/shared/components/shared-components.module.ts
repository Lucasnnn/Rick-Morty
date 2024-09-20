import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountFavoritesComponent } from './count-favorites/count-favorites.component';



@NgModule({
  declarations: [CountFavoritesComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CountFavoritesComponent
  ]
})
export class SharedComponentsModule { }
