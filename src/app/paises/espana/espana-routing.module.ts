import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspanaPage } from './espana.page';

const routes: Routes = [
  {
    path: '',
    component: EspanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspanaPageRoutingModule {}
