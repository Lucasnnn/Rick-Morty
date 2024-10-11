import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoritesService } from './shared/services/favorites.service';

export function initializeApp(favoritesService: FavoritesService) {
  return (): Promise<void> => {
    return favoritesService.preLoad();
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [FavoritesService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
