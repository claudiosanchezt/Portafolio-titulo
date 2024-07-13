import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/api.service';
import { forkJoin, of, Observable } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    activo: null,
  };

  userId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.userId = sessionStorage.getItem('userId');
  }

  ngOnInit() {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const idUsuario = params.get('id');
          if (idUsuario && (idUsuario === this.userId || this.userId === '2')) {
            return this.usuarioService.getUsuarioId(+idUsuario).pipe(
              map((response) => [response, true]),
              catchError(() => of([null, false]))
            );
          } else {
            // Redirigir al usuario a la página de selección si no está autorizado
            this.router.navigate(['/seleccionar']);
            return of([null, false]);
          }
        })
      )
      .subscribe(([response, isValid]) => {
        if (isValid && response && response.ok && response.data && Array.isArray(response.data)) {
          const usuarioData = response.data[0];
          this.usuario = {
            nombre: usuarioData.nombre,
            apellido: usuarioData.apellido,
            correo: usuarioData.correo,
            activo: usuarioData.activo,
          };
        } else {
          console.error('Error en la respuesta del servicio:', response);
        }
      });
  }
}