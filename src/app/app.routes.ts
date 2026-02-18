import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing.component').then(m => m.LandingComponent),
    title: 'AXEOR Mining – Building Long-Life Resource Assets Across Africa',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
