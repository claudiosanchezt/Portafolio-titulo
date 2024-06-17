import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComidasPorCategoriaPageRoutingModule } from './comidas-por-tipo-routing.module';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ComidasPorCategoriaPage } from './comidas-por-tipo.page';

@NgModule({
  declarations: [ComidasPorCategoriaPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComidasPorCategoriaPageRoutingModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class ComidasPorCategoriaPageModule {}
