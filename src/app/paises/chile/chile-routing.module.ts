import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChilePage } from './chile.page';

const routes: Routes = [
  {
    path: '',
    component: ChilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChilePageRoutingModule {}
