import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComidasPorPaisNombrePage } from './comidas-por-pais-nombre.page';

const routes: Routes = [
  {
    path: '',
    component: ComidasPorPaisNombrePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComidasPorPaisNombrePageRoutingModule {}
