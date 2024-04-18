import { Component, OnInit } from '@angular/core';
import { recetasCanada, recetasChile } from '../../services/api.service';

@Component({
  selector: 'app-canada',
  templateUrl: './canada.page.html',
  styleUrls: ['./canada.page.scss'],
})
export class CanadaPage implements OnInit {

  postre: any[0];

  constructor(private categoriaService: recetasCanada) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(data => {
      console.log(data)
      this.postre = data;
    });
  }

}