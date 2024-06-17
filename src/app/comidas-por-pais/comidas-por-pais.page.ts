import { Component, OnInit } from '@angular/core';
import { PaisService } from '../services/api.service';

interface Pais {
  id_pais: number;
  url_imagen: string;
  nombre: string;
  estado: number;
  fecha_creacion: string;
  // Otras propiedades que tenga el objeto
}

@Component({
  selector: 'app-comidas-por-pais',
  templateUrl: './comidas-por-pais.page.html',
  styleUrls: ['./comidas-por-pais.page.scss'],
})
export class ComidasPorPaisPage implements OnInit {
  data: Pais[] = [];

  constructor(private paisService: PaisService) {}

  // metodo para hacer scroll hacia arriba
  subir() {
    console.log('Subiendooo :D');
    const content = document.querySelector('ion-content');
    if (content) {
      content.scrollToTop(500); // Desplaza hacia arriba en 500ms
    }
  }

  ngOnInit() {
    this.obtenerPaises();
  }

  obtenerPaises() {
    this.paisService.getCategorias().subscribe({
      next: (response: any) => {
        if (response.ok && response.data) {
          this.data = response.data;
        } else {
          console.error('Error en la respuesta del servicio:', response);
        }
      },
      error: (error) => {
        console.error('Error al obtener los países:', error);
      },
    });
  }
}
