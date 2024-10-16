import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedComponentsModule,
    MatProgressSpinnerModule,
  ],
})
export class FavoritesModule {}
