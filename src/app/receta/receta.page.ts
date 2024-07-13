import { Component, OnInit } from '@angular/core';
import { RecetaService, CategoriaService, PaisService } from '../services/api.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importar Router

interface Categoria {
  id_cat: number;
  nombre: string;
  url_imagen: '',
}

interface Pais {
  id_pais: number;
  nombre: string;
  url_imagen: '',
}

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

  categorias: Categoria[] = [];
  paises: Pais[] = [];

  constructor(
    private recetaService: RecetaService,
    private toastController: ToastController,
    private categoriaService: CategoriaService,
    private paisService: PaisService,
    private router: Router // Inyectar Router
  ) { }

  ngOnInit() {
    this.obtenerCategorias();
    this.obtenerPaises();
  }

  async obtenerCategorias() {
    try {
      const response: any = await this.categoriaService.getCategorias().toPromise();
      if (response.ok && response.data) {
        this.categorias = response.data;
      } else {
        console.error('Error en la respuesta del servicio:', response);
      }
    } catch (error) {
      console.error('Error al obtener las categorías:', error);
    }
  }

  async obtenerPaises() {
    try {
      const response: any = await this.paisService.getCategorias().toPromise();
      if (response.ok && response.data) {
        this.paises = response.data;
      } else {
        console.error('Error en la respuesta del servicio:', response);
      }
    } catch (error) {
      console.error('Error al obtener los países:', error);
    }
  }

  async agregarReceta(form: any) {
    if (form.valid) {
      try {
        const response = await this.recetaService.agregarReceta(this.receta).toPromise();
        this.mostrarToast('Receta agregada correctamente');
        form.resetForm();
        this.router.navigate(['/seleccionar']); // Redirigir a la página de selección después de agregar la receta
      } catch (error) {
        console.error('Error al agregar la receta:', error);
        this.mostrarToast('Error al agregar la receta');
      }
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