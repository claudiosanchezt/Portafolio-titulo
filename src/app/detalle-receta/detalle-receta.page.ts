import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RecetasIdService } from '../services/api.service';

@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.page.html',
  styleUrls: ['./detalle-receta.page.scss'],
})
export class DetalleRecetaPage implements OnInit {
  receta: any[] = []; // Inicializa receta como un arreglo vacío

  constructor(
    private route: ActivatedRoute,
    private recetasIdService: RecetasIdService,
    private location: Location
  ) {}

  subir() {
    console.log('Subiendooo :D');
    const content = document.querySelector('ion-content');
    if (content) {
      content.scrollToTop(500); // Desplaza hacia arriba en 500ms
    }
  }

  onClick = (event: Event) => {
    event.preventDefault();
    this.location.back();
  };
  
  ngOnInit() {
    const idReceta = this.route.snapshot.paramMap.get('id');
    if (idReceta) {
      this.recetasIdService.getRecetasId(+idReceta).subscribe(
        (data) => {
          this.receta = data.data; // Asigna el arreglo dentro de data a receta
        },
        (error) => {
          console.error('Error al obtener los detalles de la receta:', error);
        }
      );
    }
  }
}
