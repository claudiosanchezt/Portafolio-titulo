import { Component, OnInit } from '@angular/core';
import { MealService } from '../services/api.service';


@Component({
  selector: 'app-seleccionar',
  templateUrl: './seleccionar.page.html',
  styleUrls: ['./seleccionar.page.scss'],
})
export class SeleccionarPage implements OnInit {
  categories: any;

  constructor(private mealService: MealService) {}

  ngOnInit() {
    this.mealService.getCategories().subscribe((data) => {
      this.categories = data.categories;
    });
  }
}

