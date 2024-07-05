import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecetaPageRoutingModule } from './receta-routing.module';
import { RecetaPage } from './receta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecetaPageRoutingModule
  ],
  declarations: [RecetaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecetaPageModule {}