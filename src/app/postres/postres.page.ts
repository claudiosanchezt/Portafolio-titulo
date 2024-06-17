import { Component, OnInit } from '@angular/core';
import { PostreService } from '../services/api.service';

interface Postre {
  id_receta: number;
  url_imagen: string;
  nombre: string;
}

@Component({
  selector: 'app-postres',
  templateUrl: './postres.page.html',
  styleUrls: ['./postres.page.scss'],
})
export class PostresPage implements OnInit {
  postres: Postre[] = [];

  constructor(private postreService: PostreService) {}

  ngOnInit() {
    this.obtenerPostres();
  }
  subir() {
    console.log('Subiendooo :D');
    const content = document.querySelector('ion-content');
    if (content) {
      content.scrollToTop(500); // Desplaza hacia arriba en 500ms
    }
  }

  obtenerPostres() {
    this.postreService.getPostres().subscribe(
      (response) => {
        if (response.ok && response.data) {
          this.postres = response.data;
        } else {
          console.error('Error en la respuesta del servicio:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los postres:', error);
      }
    );
  }
}
