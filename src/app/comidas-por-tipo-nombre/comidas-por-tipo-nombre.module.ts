import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ComidasPorTipoNombrePageRoutingModule } from './comidas-por-tipo-nombre-routing.module';
import { ComidasPorTipoNombrePage } from './comidas-por-tipo-nombre.page';

@NgModule({
  declarations: [ComidasPorTipoNombrePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComidasPorTipoNombrePageRoutingModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class ComidasPorTipoNombrePageModule {}
