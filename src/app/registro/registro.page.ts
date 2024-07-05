import { Component, OnInit } from '@angular/core';
import { UsuarioRegistroService } from '../services/api.service'; // Cambiar el nombre del servicio
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  constructor(
    private usuarioRegistroService: UsuarioRegistroService, // Cambiar el nombre del servicio
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async crearUsuario(formData: any) {
    try {
      const nuevoUsuario = {
        nombre: formData.nombre,
        apellido: formData.apellido,
        correo: formData.correo,
        password: formData.password,
        activo: 1,
      };

      const response = await this.usuarioRegistroService // Cambiar el nombre del servicio
        .crearUsuario(nuevoUsuario)
        .toPromise();

      console.log('Usuario registrado exitosamente:', response);

      // Mostrar un toast de éxito
      const toast = await this.toastController.create({
        message: 'Usuario registrado exitosamente',
        duration: 2000,
        color: 'success',
      });
      toast.present();

      // Redirigir al usuario a la página de inicio de sesión
      await this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al registrar usuario:', error);

      // Mostrar un toast de error
      const toast = await this.toastController.create({
        message: 'Error al registrar usuario',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }
}