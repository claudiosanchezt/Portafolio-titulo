import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaNombreService } from '../services/api.service';

interface Categoria {
  id_cat: number;
  id_receta: number;
  id_pais: number;
  url_imagen: string;
  nombre: string;
  activo: number;
  fecha_creacion: string;
}

@Component({
  selector: 'app-comidas-por-tipo-nombre',
  templateUrl: './comidas-por-tipo-nombre.page.html',
  styleUrls: ['./comidas-por-tipo-nombre.page.scss'],
})
export class ComidasPorTipoNombrePage implements OnInit {
  categorias: Categoria[] = [];
  categoriaSeleccionada: string = '';
  mostrarMensajeNoEncontrado: boolean = false;

  constructor(
    private categoriaNombreService: CategoriaNombreService,
    private activatedRoute: ActivatedRoute
    
  ) {}
  subir() {
    console.log('Subiendooo :D');
    const content = document.querySelector('ion-content');
    if (content) {
      content.scrollToTop(500); // Desplaza hacia arriba en 500ms
    }
  }

  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe((params) => {
      const categoriaDeRuta = params.get('nombre');
      if (categoriaDeRuta) {
        this.categoriaSeleccionada = categoriaDeRuta;
        this.obtenerRecetasPorCategoria();
      }
      
    });
    
  }

  obtenerRecetasPorCategoria() {
    this.mostrarMensajeNoEncontrado = false;

    this.categoriaNombreService.getRecetasNombre(this.categoriaSeleccionada).subscribe(
      (response) => {
        if (response.ok && response.data) {
          this.categorias = response.data;
          if (this.categorias.length === 0) {
            this.mostrarMensajeNoEncontrado = true;
          }
        } else {
          console.error('Error en la respuesta del servicio:', response);
          this.mostrarMensajeNoEncontrado = true;
        }
      },
      (error) => {
        console.error('Error al obtener las recetas por categoría:', error);
        this.mostrarMensajeNoEncontrado = true;
      }
    );
  }
}
