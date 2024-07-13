import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

interface RespuestaServidor {
  ok: boolean;
  msj?: string;
}

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {
  correoValido = false;
  contrasenaValida = false;
  correoNoEncontrado = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async verificarCorreo(correo: string) {
    const url = `https://apirecetas.iacst.space/usuario/correo/${correo}`;

    try {
      const response = await this.http.get<RespuestaServidor>(url).toPromise();
      if (response && response.ok) {
        this.correoValido = true;
        this.contrasenaValida = false; // Reiniciar el estado de contrasenaValida
        this.correoNoEncontrado = false;
      } else {
        this.correoValido = false;
        this.contrasenaValida = false;
        this.correoNoEncontrado = true; // Mostrar el mensaje de correo no encontrado
      }
    } catch (error) {
      console.error('Error al verificar el correo:', error);
      this.correoValido = false;
      this.contrasenaValida = false;
      this.correoNoEncontrado = true; // Mostrar el mensaje de correo no encontrado
    }
  }

  async recuperarContrasena(form: NgForm) {
    if (this.correoValido) {
      const nuevaContrasena = form.value.nuevaContrasena;
      const confirmarContrasena = form.value.confirmarContrasena;

      if (nuevaContrasena === confirmarContrasena) {
        this.contrasenaValida = true;
        const correo = form.value.correo;
        const data = { correo, password: nuevaContrasena };
        const urlCambiarContrasena = 'https://apirecetas.iacst.space/usuario/password/';

        try {
          const response = await this.http
            .post<RespuestaServidor>(urlCambiarContrasena, data)
            .toPromise();
          if (response && response.ok) {
            this.presentToast('Contraseña cambiada correctamente');
            this.router.navigate(['/login']);
          } else {
            this.presentToast('Error al cambiar la contraseña');
          }
        } catch (error) {
          console.error('Error al cambiar la contraseña:', error);
          this.presentToast('Error al cambiar la contraseña');
        }
      } else {
        this.contrasenaValida = false;
        this.presentToast('Las contraseñas no coinciden');
      }
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }
}