import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ComidasPorPaisNombrePageRoutingModule } from './comidas-por-pais-nombre-routing.module';
import { ComidasPorPaisNombrePage } from './comidas-por-pais-nombre.page';

@NgModule({
  declarations: [ComidasPorPaisNombrePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComidasPorPaisNombrePageRoutingModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class ComidasPorPaisNombrePageModule {}
