import { Component, OnInit } from '@angular/core';
import { FlagService } from '../services/api.service';

@Component({
  selector: 'app-comidas-por-pais',
  templateUrl: './comidas-por-pais.page.html',
  styleUrls: ['./comidas-por-pais.page.scss'],
})

// export class ComidasPorPaisPage implements OnInit {
//   pais: any;

//   constructor(private mealService: MealService3) {}

//   ngOnInit() {
//     this.mealService.getPaises().subscribe((data) => {
//       console.log(data)
//       this.pais = data.pais;
      
//     });
//   }
// }


export class ComidasPorPaisPage implements OnInit {

  pais: any[0];

  constructor(private categoriaService: FlagService) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(data => {
      console.log(data)
      this.pais = data;
    });
  }

}