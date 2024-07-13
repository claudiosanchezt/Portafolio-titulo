import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../app/guards/auth.guard';
import { RecuperarContrasenaPageModule } from './recuperar-contrasena/recuperar-contrasena.module';
import { EditarUsuarioPageModule } from './editar-usuario/editar-usuario.module';
import { PerfilUsuarioPageModule } from './perfil-usuario/perfil-usuario.module';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'perfil-usuario/:id',
    loadChildren: () => import('./perfil-usuario/perfil-usuario.module').then(m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then(m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'editar-receta/:id',
    loadChildren: () => import('./editar-receta/editar-receta.module').then(m => m.EditarRecetaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./registro/registro.module').then((m) => m.RegistroPageModule),
  },
  {
    path: 'editar-usuario/:id',
    loadChildren: () => import('./editar-usuario/editar-usuario.module').then(m => m.EditarUsuarioPageModule)
  },
  {
    path: 'seleccionar',
    loadChildren: () =>
      import('./seleccionar/seleccionar.module').then(
        (m) => m.SeleccionarPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'postres',
    loadChildren: () =>
      import('./postres/postres.module').then((m) => m.PostresPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'detalle-receta/:id',
    loadChildren: () =>
      import('./detalle-receta/detalle-receta.module').then(
        (m) => m.DetalleRecetaPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'comidas-por-pais',
    loadChildren: () =>
      import('./comidas-por-pais/comidas-por-pais.module').then(
        (m) => m.ComidasPorPaisPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'comidas-por-pais-nombre/:nombre',
    loadChildren: () =>
      import('./comidas-por-pais-nombre/comidas-por-pais-nombre.module').then(
        (m) => m.ComidasPorPaisNombrePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'comidas-por-tipo',
    loadChildren: () =>
      import('./comidas-por-tipo/comidas-por-tipo.module').then(
        (m) => m.ComidasPorCategoriaPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'comidas-por-tipo-nombre/:nombre',
    loadChildren: () =>
      import('./comidas-por-tipo-nombre/comidas-por-tipo-nombre.module').then(
        (m) => m.ComidasPorTipoNombrePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'comidas-aleatorias',
    loadChildren: () =>
      import('./comidas-aleatorias/comidas-aleatorias.module').then((m) => m.ComidasAleatoriasPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'receta',
    loadChildren: () => import('./receta/receta.module').then((m) => m.RecetaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home',
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'editar-receta',
    loadChildren: () => import('./editar-receta/editar-receta.module').then( m => m.EditarRecetaPageModule)
  },
  {
    path: 'editar-usuario',
    loadChildren: () => import('./editar-usuario/editar-usuario.module').then( m => m.EditarUsuarioPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
