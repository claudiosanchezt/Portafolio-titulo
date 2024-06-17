import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComidasPorTipoNombrePage } from './comidas-por-tipo-nombre.page';

const routes: Routes = [
  {
    path: '',
    component: ComidasPorTipoNombrePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComidasPorTipoNombrePageRoutingModule {}
