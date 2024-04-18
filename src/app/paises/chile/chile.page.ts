import { Component, OnInit } from '@angular/core';
import { recetasArgentina, recetasChile } from '../../services/api.service';

@Component({
  selector: 'app-chile',
  templateUrl: './chile.page.html',
  styleUrls: ['./chile.page.scss'],
})
export class ChilePage implements OnInit {

  postre: any[0];

  constructor(private categoriaService: recetasChile) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(data => {
      console.log(data)
      this.postre = data;
    });
  }

}