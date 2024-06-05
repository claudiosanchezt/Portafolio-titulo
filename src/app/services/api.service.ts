import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Obtener el token del almacenamiento de sesión
const token = sessionStorage.getItem('token');

// Crear los encabezados HTTP con el token
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
});
// APIS LOCALES FUNCIONALES

// módulo para obtener datos de categorías
@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = 'https://apirecetas.iacst.space/categoria/';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

// módulo para obtener información de la api randoms
@Injectable({
  providedIn: 'root'
})
export class AleatoriaMeal {

  private apiUrl = 'https://apirecetas.iacst.space/receta-aleatoria';

  constructor(private http: HttpClient) { }

  getrandomMeal() {
    return this.http.get<any[]>(this.apiUrl);
  }
}

// Módulo para los paises

@Injectable({
  providedIn: 'root'
})
export class MealService3 {
  private apiUrl = 'https://apirecetas.iacst.space/pais/nombre/Canadian';

  constructor(private http: HttpClient) { }

  getPaises(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

/////// SERVICIOS PARA OBTENER DATOS DE UNA BBDD MYSQL MEDIANTE NODE ///////
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'https://apirecetas.iacst.space/categoria/';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaChile {

  private apiUrl = 'https://apirecetas.iacst.space/pais/nombre/chile';

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

  private apiUrl = 'https://apirecetas.iacst.space/pais/';

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

  private apiUrl = 'https://apirecetas.iacst.space/categoria/nombre/Seafood';

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

  private apiUrl = 'https://apirecetas.iacst.space/pais/nombre/chile';

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

  private apiUrl = 'https://apirecetas.iacst.space/pais/nombre/British';

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

  private apiUrl = 'https://apirecetas.iacst.space/pais/nombre/American';

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

  private apiUrl = 'https://apirecetas.iacst.space/pais/nombre/Canadian';

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

  private apiUrl = 'https://apirecetas.iacst.space/pais/nombre/Mexican';

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

  private apiUrl = 'https://apirecetas.iacst.space/pais/nombre/Argentinian';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }
}

// para obtener las recetas españolas
@Injectable({
  providedIn: 'root'
})
export class recetasEspanolas {

  private apiUrl = 'https://apirecetas.iacst.space/pais/nombre/Argentinian';

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
  private apiUrl = 'https://apirecetas.iacst.space/usuario/';

  constructor(private http: HttpClient) { }

  getUsuarios() {
    const options = {
      headers: headers
    };
    return this.http.get<any[]>(this.apiUrl, options);
  }
}