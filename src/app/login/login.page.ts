import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../services/user/auth.service';
import { UsuarioService } from '../services/api.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

interface Usuario {
  nombre: string;
  apellido: string;
  correo: string;
  activo: number;
  fecha_creacion: string;
  // Otras propiedades que tenga el objeto
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: any[] = [];
  data: Usuario[] = [];

  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit() {
    // No se realiza ninguna acción de inicialización
  }

  login(form: NgForm) {
    const loginData = {
      correo: form.value.correo,
      password: form.value.password
    };
  
    this.authService.login(loginData).subscribe(
      response => {
        if (Array.isArray(response)) {
          this.usuario = response;
        } else {
          this.usuario = [response];
        }
  
        // Almacenar el token en el almacenamiento de sesión
        if (response.token) {
          sessionStorage.setItem('token', response.token);
        }
  
        this.usuarioService.getUsuarios().subscribe({
          next: (response: any) => {
            if (response.ok && response.data) {
              this.data = response.data;
              this.router.navigate(['/seleccionar']);
            } else {
              console.error('Error en la respuesta del servicio:', response);
            }
          },
          error: error => {
            console.error('Error al obtener categorías:', error);
          }
        });
      },
      error => {
        console.error('Error en el inicio de sesión:', error);
      }
    );
  }
}