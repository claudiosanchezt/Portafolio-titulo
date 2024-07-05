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
// APIS CRUD RECETA
@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private apiUrl = 'https://apirecetas.iacst.space/recetas';

  constructor(private http: HttpClient) { }

  agregarReceta(receta: any): Observable<any> {
    return this.http.post(this.apiUrl, receta);
  }

  obtenerRecetas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  obtenerReceta(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  actualizarReceta(id: number, receta: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, receta);
  }

  eliminarReceta(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}

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
  private apiUrl = 'https://apirecetas.iacst.space/recetas/receta-aleatoria';

  constructor(private http: HttpClient) { }

  getrandomMeal(): Observable<{ ok: boolean; data: { id_receta: number; url_imagen: string; nombre: string }[] }> {
    return this.http.get<{ ok: boolean; data: { id_receta: number; url_imagen: string; nombre: string }[] }>(this.apiUrl);
  }
}
/////// SERVICIOS PARA OBTENER DATOS DE UNA BBDD MYSQL MEDIANTE NODE ///////
@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private apiUrl = 'https://apirecetas.iacst.space/recetas/';

  constructor(private http: HttpClient) { }

  getRecetas(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

/////////////////////////////////////
@Injectable({
  providedIn: 'root'
})
export class RecetasNombreService {
  private apiUrl = 'https://apirecetas.iacst.space/recetas/nombre';

  constructor(private http: HttpClient) { }

  getRecetasNombre(nombrereceta: string): Observable<any> {
    const url = `${this.apiUrl}/${encodeURIComponent(nombrereceta)}`;
    return this.http.get<any[]>(url);
  }
}
//////////////////////////
@Injectable({
  providedIn: 'root'
})
export class RecetasIdService {
  private apiUrl = 'https://apirecetas.iacst.space/recetas';

  constructor(private http: HttpClient) { }

  getRecetasId(id: number): Observable<any> {
    const url = `${this.apiUrl}/${encodeURIComponent(id)}`;
    return this.http.get<any[]>(url);
  }
}

/////// SERVICIOS PARA OBTENER DATOS DE UNA BBDD MYSQL MEDIANTE NODE ///////
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'https://apirecetas.iacst.space/pais/';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }
}

/////////////////////
@Injectable({
  providedIn: 'root'
})
export class PaisNombreService {
  private apiUrl = 'https://apirecetas.iacst.space/recetas/pais';

  constructor(private http: HttpClient) { }

  getRecetasNombre(nombrePais: string): Observable<any> {
    const url = `${this.apiUrl}/${encodeURIComponent(nombrePais)}`;
    return this.http.get<any>(url);
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

/////////////////////
@Injectable({
  providedIn: 'root'
})
export class CategoriaNombreService {

  private apiUrl = 'https://apirecetas.iacst.space/recetas/categoria';

  constructor(private http: HttpClient) { }

  getRecetasNombre(nombrecategoria: string): Observable<any> {
    const url = `${this.apiUrl}/${encodeURIComponent(nombrecategoria)}`;
    return this.http.get<any[]>(url);
  }
}

/////////////////////////////////////
@Injectable({
  providedIn: 'root'
})
export class PostreService {

  private apiUrl = 'https://apirecetas.iacst.space/recetas/categoria/Postre';

  constructor(private http: HttpClient) { }

  getPostres(): Observable<{ ok: boolean; data: { id_receta: number; url_imagen: string; nombre: string }[] }> {
    return this.http.get<{ ok: boolean; data: { id_receta: number; url_imagen: string; nombre: string }[] }>(this.apiUrl);
  }
}
////////////////// para desplegar usuarios destacados jaja
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

@Injectable({
  providedIn: 'root'
})
export class UsuarioRegistroService {
  private apiUrl = 'https://apirecetas.iacst.space/usuario/';

  constructor(private http: HttpClient) { }

  crearUsuario(nuevoUsuario: any): Observable<any> {
    return this.http.post(this.apiUrl, nuevoUsuario);
  }
}