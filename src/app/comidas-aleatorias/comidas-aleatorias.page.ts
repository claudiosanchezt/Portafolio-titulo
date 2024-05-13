import { Component, OnInit } from '@angular/core';
import { AleatoriaMeal } from '../services/api.service';

@Component({
  selector: 'app-comidas-aleatorias',
  templateUrl: './comidas-aleatorias.page.html',
  styleUrls: ['./comidas-aleatorias.page.scss'],
})
export class ComidasAleatoriasPage implements OnInit {

  postre: any[0];

  constructor(private mealService: AleatoriaMeal) { }

  ngOnInit() {
    this.mealService.getrandomMeal().subscribe(data => {
      console.log(data)
      this.postre = data;
    });
  }

}