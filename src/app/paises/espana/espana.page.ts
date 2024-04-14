import { Component, OnInit } from '@angular/core';
import { recetasChile } from '../../services/api.service';

@Component({
  selector: 'app-espana',
  templateUrl: './espana.page.html',
  styleUrls: ['./espana.page.scss'],
})
export class EspanaPage implements OnInit {

  postre: any[0];

  constructor(private categoriaService: recetasChile) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(data => {
      console.log(data)
      this.postre = data;
    });
  }

}