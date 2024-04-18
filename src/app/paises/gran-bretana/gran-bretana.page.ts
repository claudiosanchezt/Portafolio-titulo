import { Component, OnInit } from '@angular/core';
import { recetasChile, recetasGB } from '../../services/api.service';

@Component({
  selector: 'app-gran-bretana',
  templateUrl: './gran-bretana.page.html',
  styleUrls: ['./gran-bretana.page.scss'],
})
export class GranBretanaPage implements OnInit {

  postre: any[0];

  constructor(private categoriaService: recetasGB) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(data => {
      console.log(data)
      this.postre = data;
    });
  }

}