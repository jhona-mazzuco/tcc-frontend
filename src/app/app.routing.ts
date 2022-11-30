import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/application/application.module').then(m => m.ApplicationModule)
  },
  {
    path: 'painel',
    title: 'Vilson Centro Esportivo - Painel',
    loadChildren: () => import('./modules/panel/panel.module').then(m => m.PanelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
