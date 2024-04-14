import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MexicoPageRoutingModule } from './mexico-routing.module';

import { MexicoPage } from './mexico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MexicoPageRoutingModule
  ],
  declarations: [MexicoPage]
})
export class MexicoPageModule {}
