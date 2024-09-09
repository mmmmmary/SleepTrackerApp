import { Component } from '@angular/core';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage {
  email: string;
  password: string;

  constructor() {
    // Inicializando las propiedades
    this.email = '';
    this.password = '';
  }

  onLogin() {
    // Lógica para el inicio de sesión
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  onForgotPassword() {
    // Lógica para manejar la recuperación de contraseña
    console.log('Forgot Password clicked');
  }
}
