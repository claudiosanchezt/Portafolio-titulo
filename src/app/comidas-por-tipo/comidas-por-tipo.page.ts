import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/api.service';

interface Categoria {
  id_categoria: number;
  url_imagen: string;
  nombre: string;
  estado: number;
  fecha_creacion: string;
}

@Component({
  selector: 'app-comidas-por-tipo',
  templateUrl: './comidas-por-tipo.page.html',
  styleUrls: ['./comidas-por-tipo.page.scss'],
})
export class ComidasPorCategoriaPage implements OnInit {
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {}
  // metodo para hacer el scroll
  subir() {
    console.log('Subiendooo :D');
    const content = document.querySelector('ion-content');
    if (content) {
      content.scrollToTop(500); // Desplaza hacia arriba en 500ms
    }
  }

  ngOnInit() {
    this.obtenerCategorias();
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
      error: (error: any) => {
        console.error('Error al obtener las categorías:', error);
      },
    });
  }
}
