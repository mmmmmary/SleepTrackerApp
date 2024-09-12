import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'; // Importar Storage

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage {
  email: string;
  password: string;
  username: string;
  errorMessage: string = '';  // Variable para mostrar mensajes de error

  constructor(private router: Router, private storage: Storage) {
    // Inicializando las propiedades
    this.email = '';
    this.password = '';
    this.username = '';
    this.initStorage(); // Inicializar el almacenamiento
  }

  async initStorage() {
    await this.storage.create(); // Inicializar el almacenamiento
  }

  // Método para validar los campos
  validateInputs(): boolean {

    // Validación de Email (debe contener @)
    if (!this.email.includes('@')) {
      this.errorMessage = 'El correo no es válido. Debe contener "@"';
      return false;
    }

    // Validación de Password (debe contener números y letras)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(this.password)) {
      this.errorMessage = 'La contraseña debe contener tanto números como caracteres alfabéticos.';
      return false;
    }

    // Limpiar el mensaje de error si todo es válido
    this.errorMessage = '';
    return true;
  }

  async onLogin() {
    // Verificar si los campos son válidos
    if (this.validateInputs()) {
      // Lógica para el inicio de sesión y guardar el username
      console.log('Email:', this.email);
      console.log('Password:', this.password);
  
      
      // Guardar el nombre de usuario en el storage
      await this.storage.set('username', this.username);

      // Navegar al Home
      this.router.navigate(['/home']);
    } else {
      // Mostrar el mensaje de error si los campos no son válidos
      console.log(this.errorMessage);
    }
  }

  onForgotPassword() {
    // Lógica para manejar la recuperación de contraseña
    console.log('Forgot Password clicked');
  }
}

