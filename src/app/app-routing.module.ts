import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigpostColumnComponent } from './blog/blog-mix-layout/bigpost-column/bigpost-column.component';
import { DetailComponent } from './blog/blog-detail/detail/detail.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: BigpostColumnComponent,
  },
  {
    path: 'news',
    component: DetailComponent,
  },
  {
    path: 'news/:id',
    component: DetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
