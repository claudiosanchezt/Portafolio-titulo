import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MexicoPage } from './mexico.page';

const routes: Routes = [
  {
    path: '',
    component: MexicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MexicoPageRoutingModule {}
