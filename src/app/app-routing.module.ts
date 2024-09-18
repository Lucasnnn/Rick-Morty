import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { PagesRouting } from './pages/routing';

const routes: Routes = [
  {
   path: '',
   pathMatch : 'full',
   redirectTo : 'home'
  },
  {
    path: '',
    component: LayoutComponent,
    children : PagesRouting
  },
  // 
  {
    path: '**',
    pathMatch : 'prefix',
    redirectTo : 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
