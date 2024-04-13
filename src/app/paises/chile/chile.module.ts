import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChilePageRoutingModule } from './chile-routing.module';

import { ChilePage } from './chile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChilePageRoutingModule
  ],
  declarations: [ChilePage]
})
export class ChilePageModule {}
