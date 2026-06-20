import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'crianca-detalhe/:id',
    loadComponent: () => import('./crianca-detalhe/crianca-detalhe.page').then( m => m.CriancaDetalhePage)
  },
  {
    path: 'campanhas',
    loadComponent: () => import('./campanhas/campanhas.page').then( m => m.CampanhasPage)
  },
];
