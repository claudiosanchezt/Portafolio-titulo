import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComidasPorPaisPageRoutingModule } from './comidas-por-pais-routing.module';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ComidasPorPaisPage } from './comidas-por-pais.page';

@NgModule({
  declarations: [ComidasPorPaisPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComidasPorPaisPageRoutingModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class ComidasPorPaisPageModule {}
