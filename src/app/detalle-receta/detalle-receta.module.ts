import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetalleRecetaPageRoutingModule } from './detalle-receta-routing.module';
import { DetalleRecetaPage } from './detalle-receta.page';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

@NgModule({
  declarations: [DetalleRecetaPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleRecetaPageRoutingModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class DetalleRecetaPageModule {}
