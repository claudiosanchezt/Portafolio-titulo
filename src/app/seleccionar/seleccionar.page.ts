import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaService } from '../services/api.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-seleccionar',
  templateUrl: './seleccionar.page.html',
  styleUrls: ['./seleccionar.page.scss'],
})
export class SeleccionarPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent | undefined; // Hacer la propiedad nullable

  categories: any;

  subir() {
    console.log('Subiendooo :D');

    if (this.content) {
      this.content.scrollToTop(500); // Desplaza hacia arriba en 500ms
    }
  }

  userId: string | null = null;

  constructor(private categoriaService: CategoriaService) {
    this.userId = sessionStorage.getItem('userId');
    this.content = undefined; // Inicializar la propiedad content con undefined
  }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe((data: any) => {
      this.categories = data.categories;
    });
  }
}