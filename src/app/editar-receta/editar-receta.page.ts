import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecetaService, CategoriaService, PaisService } from '../services/api.service';
import { ToastController } from '@ionic/angular';

interface Categoria {
  id_cat: number;
  nombre: string;
  url_imagen: string;
}

interface Pais {
  id_pais: number;
  nombre: string;
  url_imagen: string;
}

@Component({
  selector: 'app-editar-receta',
  templateUrl: './editar-receta.page.html',
  styleUrls: ['./editar-receta.page.scss'],
})
export class EditarRecetaPage implements OnInit {
  receta = {
    nombre: '',
    url_imagen: '',
    ingrediente: '',
    preparacion: '',
    id_cat: null,
    id_pais: null,
    id_usr: null,
  };

  categorias: Categoria[] = [];
  paises: Pais[] = [];
  userId: string | null = null;
  userIdNumber: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recetaService: RecetaService,
    private toastController: ToastController,
    private categoriaService: CategoriaService,
    private paisService: PaisService
  ) {}

  ngOnInit() {
    this.userId = sessionStorage.getItem('userId');
    this.obtenerCategorias();
    this.obtenerPaises();
    this.obtenerReceta();
  }

  obtenerCategorias() {
    this.categoriaService.getCategorias().subscribe({
      next: (response: any) => {
        if (response.ok && response.data) {
          this.categorias = response.data;
        } else {
          console.error('Error en la respuesta del servicio:', response);
        }
      },
      error: (error) => {
        console.error('Error al obtener las categorías:', error);
      },
    });
  }

  obtenerPaises() {
    this.paisService.getCategorias().subscribe({
      next: (response: any) => {
        if (response.ok && response.data) {
          this.paises = response.data;
        } else {
          console.error('Error en la respuesta del servicio:', response);
        }
      },
      error: (error) => {
        console.error('Error al obtener los países:', error);
      },
    });
  }

  obtenerReceta() {
    const idReceta = this.route.snapshot.paramMap.get('id');
    if (idReceta) {
      this.recetaService.obtenerReceta(+idReceta).subscribe(
        (response: any) => {
          if (response.ok && response.data && Array.isArray(response.data)) {
            const recetaData = response.data[0];
            if (recetaData.id_usr.toString() === this.userId || this.userId === '2') {
              this.receta = {
                url_imagen: `${recetaData.url_imagen}`,
                ingrediente: `${recetaData.ingrediente}`,
                preparacion: `${recetaData.preparacion}`,
                id_cat: recetaData.id_cat,
                nombre: recetaData.nombre,
                id_pais: recetaData.id_pais,
                id_usr: recetaData.id_usr,
              };
            } else {
              this.router.navigate(['/seleccionar']);
            }
          } else {
            console.error('Error en la respuesta del servicio:', response);
          }
        },
        (error) => {
          console.error('Error al obtener la receta:', error);
        }
      );
    } else {
      console.error('ID de receta no proporcionado');
    }
  }

  actualizarReceta(form: any) {
    if (form.valid && form.value) {
      const idReceta = this.route.snapshot.paramMap.get('id');
      if (idReceta) {
        if (this.userId !== null) {
          this.userIdNumber = parseInt(this.userId, 10);
        } else {
          this.userIdNumber = null;
        }

        if (this.receta.id_usr === this.userIdNumber || (this.userIdNumber !== null && this.userIdNumber === 2)) {
          const recetaActualizada = {
            nombre: form.value.nombre,
            url_imagen: form.value.url_imagen,
            ingrediente: form.value.ingrediente,
            preparacion: form.value.preparacion,
            id_cat: form.value.id_cat,
            id_pais: form.value.id_pais,
            estado: 1,
          };

          this.recetaService.actualizarReceta(+idReceta, recetaActualizada).subscribe(
            (response) => {
              this.mostrarToast('Receta actualizada correctamente');
              form.resetForm();
              this.router.navigate(['/detalle-receta', idReceta]);
            },
            (error) => {
              console.error('Error al actualizar la receta:', error);
              this.mostrarToast('Error al actualizar la receta');
            }
          );
        } else {
          this.mostrarToast('No estás autorizado, Saludos!!!');
          this.router.navigate(['/seleccionar']);
        }
      } else {
        console.error('ID de receta no proporcionado');
      }
    } else {
      console.error('Formulario inválido');
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