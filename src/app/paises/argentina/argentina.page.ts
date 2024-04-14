import { Component, OnInit } from '@angular/core';
import { recetasArgentina, recetasChile } from '../../services/api.service';

@Component({
  selector: 'app-argentina',
  templateUrl: './argentina.page.html',
  styleUrls: ['./argentina.page.scss'],
})
export class ArgentinaPage implements OnInit {

  postre: any[0];

  constructor(private categoriaService: recetasArgentina) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(data => {
      console.log(data)
      this.postre = data;
    });
  }

}