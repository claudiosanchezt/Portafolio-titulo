import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// APIS LOCALES FUNCIONALES

// módulo para obtener datos de categorías
@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

// módulo para obtener información de la api randoms
@Injectable({
  providedIn: 'root'
})
export class MealService2 {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  constructor(private http: HttpClient) {}

  getRandomMeal(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

// Módulo para los paises

@Injectable({
  providedIn: 'root'
})
export class MealService3 {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

  constructor(private http: HttpClient) { }

  getPaises(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

/////// SERVICIOS PARA OBTENER DATOS DE UNA BBDD MYSQL MEDIANTE SPRINGBOOT ///////

// desde el localhost para las comidas por tipo (categorías) (springboot)
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'https://api.pquintanilla.cl/categorias';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaChile {

  private apiUrl = 'https://api.pquintanilla.cl/recetas-chile';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }
}

// desde el localhost para obtener los datos de cada país
@Injectable({
  providedIn: 'root'
})
export class FlagService {

  private apiUrl = 'https://api.pquintanilla.cl/paises';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }
}

// desde el localhost para obtener los datos de los postres
@Injectable({
  providedIn: 'root'
})
export class PostreService {

  private apiUrl = 'https://api.pquintanilla.cl/categorias-postres';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }

  
}

// desde el localhost para obtener los datos de las recetas de chile
@Injectable({
  providedIn: 'root'
})
export class recetasChile {

  private apiUrl = 'https://api.pquintanilla.cl/recetas-chile';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }

  
}

// desde el localhost para obtener los datos de las recetas de Gran bretaña
@Injectable({
  providedIn: 'root'
})
export class recetasGB {

  private apiUrl = 'https://api.pquintanilla.cl/recetas-chile';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }

  
}

// desde el localhost para obtener los datos de las recetas de USA
@Injectable({
  providedIn: 'root'
})
export class recetasUsa {

  private apiUrl = 'https://api.pquintanilla.cl/recetas-chile';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }

  
}

// desde el localhost para obtener los datos de las recetas de Canada
@Injectable({
  providedIn: 'root'
})
export class recetasCanada {

  private apiUrl = 'https://api.pquintanilla.cl/recetas-chile';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }

  
}

// desde el localhost para obtener los datos de las recetas de Mexico
@Injectable({
  providedIn: 'root'
})
export class recetasMexico {

  private apiUrl = 'https://api.pquintanilla.cl/recetas-chile';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }

  
}

// desde el localhost para obtener los datos de las recetas de Argentina
@Injectable({
  providedIn: 'root'
})
export class recetasArgentina {

  private apiUrl = 'https://api.pquintanilla.cl/recetas-argentina';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }

  
}



// para desplegar usuarios destacados jaja
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'https://api.pquintanilla.cl/usuarioejemplo?page=1';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }
}