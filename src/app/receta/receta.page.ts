import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../services/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {
  receta = {
    nombre: '',
    url_imagen: '',
    ingrediente: '',
    preparacion: '',
    id_cat: null,
    id_pais: null,
    estado: 1,
  };

  constructor(
    private recetaService: RecetaService,
    private toastController: ToastController
  ) { }

  ngOnInit() {}

  agregarReceta(form: any) {
    if (form.valid) {
      this.recetaService.agregarReceta(this.receta).subscribe(
        (response) => {
          console.log('Receta agregada:', response);
          this.mostrarToast('Receta agregada correctamente');
        },
        (error) => {
          console.error('Error al agregar la receta:', error);
          this.mostrarToast('Error al agregar la receta');
        }
      );
    }
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
    });
    toast.present();
  }
}