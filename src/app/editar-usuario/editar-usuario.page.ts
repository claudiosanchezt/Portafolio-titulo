import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    activo: null,
  };

  userId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.userId = sessionStorage.getItem('userId');
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    const idUsuario = this.route.snapshot.paramMap.get('id');
    if (idUsuario) {
      this.usuarioService.getUsuarioId(+idUsuario).subscribe(
        (response: any) => {
          if (response.ok && response.data && Array.isArray(response.data)) {
            const usuarioData = response.data[0];
            if (idUsuario === this.userId || this.userId === '2') {
              this.usuario = {
                nombre: usuarioData.nombre,
                apellido: usuarioData.apellido,
                correo: usuarioData.correo,
                activo: usuarioData.activo,
              };
            } else {
              this.mostrarToast('No estás autorizado para editar este usuario');
              this.router.navigate(['/seleccionar']);
            }
          } else {
            console.error('Error en la respuesta del servicio:', response);
          }
        },
        (error) => {
          console.error('Error al obtener el usuario:', error);
        }
      );
    }
  }

  actualizarUsuario(form: any) {
    if (form.valid) {
      const idUsuario = this.route.snapshot.paramMap.get('id');
      const activo = 1;
      if (idUsuario) {
        const idUsuarioInt = parseInt(idUsuario, 10);
        if (idUsuario === this.userId || this.userId === '2') {
          const usuarioActualizado = {
            nombre: form.value.nombre,
            apellido: form.value.apellido,
            correo: form.value.correo,
            activo: activo,
          };

          this.usuarioService.actualizarUsuario(idUsuarioInt, usuarioActualizado).subscribe(
            (response) => {
              this.mostrarToast('Usuario actualizado correctamente');
              this.router.navigate(['/perfil-usuario', idUsuario]);
            },
            (error) => {
              console.error('Error al actualizar el usuario:', error);
              this.mostrarToast('Error al actualizar el usuario');
            }
          );
        } else {
          this.mostrarToast('No estás autorizado para editar este usuario');
          this.router.navigate(['/seleccionar']);
        }
      }
    }
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
    });
    toast.present();
  }
}