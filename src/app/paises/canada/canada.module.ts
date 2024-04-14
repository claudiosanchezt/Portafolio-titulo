import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanadaPageRoutingModule } from './canada-routing.module';

import { CanadaPage } from './canada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanadaPageRoutingModule
  ],
  declarations: [CanadaPage]
})
export class CanadaPageModule {}
