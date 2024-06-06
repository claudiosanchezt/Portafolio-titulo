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
    this.categoriaService.getCategorias().subscribe(data => {
      console.log(data)
      this.usuario = data;
    });
  }

}