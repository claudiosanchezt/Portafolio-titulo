import { Component, OnInit } from '@angular/core';
import { MealService,CategoriaService } from '../services/api.service';

interface Categoria {
  id_cat: number;
  imagen: string;
  nombre: string;
  activo: number;
  fecha_creacion: string;
  // Otras propiedades que tenga el objeto
}
@Component({
  selector: 'app-comidas-por-tipo',
  templateUrl: './comidas-por-tipo.page.html',
  styleUrls: ['./comidas-por-tipo.page.scss'],
})
export class ComidasPorTipoPage implements OnInit {

  categories: any[1] = [1]; // Declaración correcta de un array vacío
  data: Categoria[] = [];


  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe({
      next: (response: any) => {
        if (response.ok && response.data) {
          this.data = response.data;
          console
        } else {
          console.error('Error en la respuesta del servicio:', response);
        }
      }
    });
  }  
}
