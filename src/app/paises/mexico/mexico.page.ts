import { Component, OnInit } from '@angular/core';
import { recetasChile, recetasMexico } from '../../services/api.service';

@Component({
  selector: 'app-mexico',
  templateUrl: './mexico.page.html',
  styleUrls: ['./mexico.page.scss'],
})
export class MexicoPage implements OnInit {

  postre: any[0];

  constructor(private categoriaService: recetasMexico) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(data => {
      console.log(data)
      this.postre = data;
    });
  }

}