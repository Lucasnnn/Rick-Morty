import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/header/menu/menu.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule,
    MatButtonToggleModule,
    MatIconModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule){
    if(parentModule){
          throw new Error(
            'CoreModule has already been loaded. Import this module in the AppModule only.'
          )
    }
  }
 }
