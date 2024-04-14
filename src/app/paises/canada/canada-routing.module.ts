import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanadaPage } from './canada.page';

const routes: Routes = [
  {
    path: '',
    component: CanadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanadaPageRoutingModule {}
