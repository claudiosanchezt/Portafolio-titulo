import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArgentinaPageRoutingModule } from './argentina-routing.module';

import { ArgentinaPage } from './argentina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArgentinaPageRoutingModule
  ],
  declarations: [ArgentinaPage]
})
export class ArgentinaPageModule {}
