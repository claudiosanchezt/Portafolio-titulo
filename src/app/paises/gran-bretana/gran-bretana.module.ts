import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GranBretanaPageRoutingModule } from './gran-bretana-routing.module';

import { GranBretanaPage } from './gran-bretana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GranBretanaPageRoutingModule
  ],
  declarations: [GranBretanaPage]
})
export class GranBretanaPageModule {}
