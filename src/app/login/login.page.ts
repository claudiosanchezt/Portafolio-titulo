import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/user/auth.service';
import { UsuarioService } from '../services/api.service';
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

interface Usuario {
  nombre: string;
  apellido: string;
  correo: string;
  activo: number;
  fecha_creacion: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: any[] = [];
  data: Usuario[] = [];
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router,
    private toastController: ToastController,
    private jwtHelper: JwtHelperService
  ) {}

  ngOnInit() {
    this.checkLoggedIn();
  }

  async checkLoggedIn() {
    const token = sessionStorage.getItem('token');
    if (token) {
      // El usuario ya está logueado, redirigir a la página de selección
      await this.router.navigate(['/seleccionar']);
    }
  }

  async login(form: NgForm) {
    try {
      const loginData = {
        correo: form.value.correo,
        password: form.value.password,
      };

      const response = await this.authService.login(loginData).toPromise();

      if (Array.isArray(response)) {
        this.usuario = response;
      } else {
        this.usuario = [response];
      }

      // Almacenar el token en el almacenamiento de sesión
      if (response.token) {
        const decodedToken = this.jwtHelper.decodeToken(response.token);
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('userData', JSON.stringify(decodedToken.usuario));
        sessionStorage.setItem('userId', JSON.stringify(decodedToken.usuario.id));
      }

      // Navegar a la página de selección
      await this.router.navigate(['/seleccionar']);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      this.errorMessage =
        'Error en el inicio de sesión. Verifica tus credenciales.';
    }
  }
}