import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComidasPorCategoriaPage } from './comidas-por-tipo.page';

const routes: Routes = [
  {
    path: '',
    component: ComidasPorCategoriaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComidasPorCategoriaPageRoutingModule {}
