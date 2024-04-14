import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GranBretanaPage } from './gran-bretana.page';

const routes: Routes = [
  {
    path: '',
    component: GranBretanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GranBretanaPageRoutingModule {}
