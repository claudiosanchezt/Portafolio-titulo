import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LoginPageRoutingModule, JwtModule.forRoot({})],
  declarations: [LoginPage],
})
export class LoginPageModule {}
