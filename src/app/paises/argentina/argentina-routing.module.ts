import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArgentinaPage } from './argentina.page';

const routes: Routes = [
  {
    path: '',
    component: ArgentinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArgentinaPageRoutingModule {}
