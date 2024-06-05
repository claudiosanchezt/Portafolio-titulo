
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://apirecetas.iacst.space/auth/login';
  private tokenSubject: BehaviorSubject<string | null>;

  constructor(private http: HttpClient) {
    this.tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('token'));
  }

  get token(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }
  login(credentials: { correo: string, password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials).pipe(
      map((response: any) => {
        let token: string | null = null;
  
        // Verificar si la respuesta es un arreglo
        if (Array.isArray(response)) {
          // Buscar el token en el arreglo
          const tokenObject = response.find(item => item.hasOwnProperty('token'));
          console.log(tokenObject);
          if (tokenObject) {
            token = tokenObject.token;
          }
        } else {
          // La respuesta no es un arreglo, se asume que tiene una propiedad 'token'
          token = response.token;
        }
  
        if (token) {
          localStorage.setItem('token', token);
          this.tokenSubject.next(token);
        }
  
        return response;
      })
    );
  }
}