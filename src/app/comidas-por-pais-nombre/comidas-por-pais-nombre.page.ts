import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisNombreService } from '../services/api.service';

@Component({
  selector: 'app-comidas-por-pais-nombre',
  templateUrl: './comidas-por-pais-nombre.page.html',
  styleUrls: ['./comidas-por-pais-nombre.page.scss'],
})
export class ComidasPorPaisNombrePage implements OnInit {
  nombrePais: string = '';
  recetas: any[] = [];
  mostrarMensajeNoEncontrado: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private paisNombreService: PaisNombreService
  ) {}
  // metodo para hacer scroll
  subir() {
    console.log('Subiendooo :D');
    const content = document.querySelector('ion-content');
    if (content) {
      content.scrollToTop(500); // Desplaza hacia arriba en 500ms
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const nombrePaisDeRuta = params.get('nombre');
      if (nombrePaisDeRuta) {
        this.nombrePais = nombrePaisDeRuta;
        this.buscarRecetasPorPais();
      }
    });
  }

  buscarRecetasPorPais() {
    this.mostrarMensajeNoEncontrado = false;

    this.paisNombreService.getRecetasNombre(this.nombrePais).subscribe(
      (data) => {
        this.recetas = data.data;
        if (this.recetas.length === 0) {
          this.mostrarMensajeNoEncontrado = true;
        }
      },
      (error) => {
        console.error('Error al obtener las recetas:', error);
      }
    );
  }
}
