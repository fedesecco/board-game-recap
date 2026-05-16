import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page').then((module) => module.HomePageComponent),
  },
  {
    path: 'games/:slug',
    loadComponent: () =>
      import('./pages/game-recap-page/game-recap-page').then(
        (module) => module.GameRecapPageComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
