import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  username!: string;  // Usar el operador de afirmación de no nulo
  email!: string;     // Usar el operador de afirmación de no nulo
  profileImage!: string; // Usar el operador de afirmación de no nulo

  constructor(private storage: Storage, private router: Router) {
    this.initializeStorage();
  }

  async ngOnInit() {
    // Cargar datos del usuario al iniciar el componente
    this.loadUserData();
  }

  async initializeStorage() {
    await this.storage.create();
  }

  async loadUserData() {
    // Cargar el nombre de usuario y el correo desde el almacenamiento
    this.username = await this.storage.get('username') || '';
    this.email = await this.storage.get('email') || '';
    // Cargar la imagen de perfil si está disponible
    this.profileImage = await this.storage.get('profileImage') || 'path/a/imagen/por/defecto.jpg';
  }

  async saveProfile() {
    // Guardar el nombre de usuario y el correo en el almacenamiento
    await this.storage.set('username', this.username);
    await this.storage.set('email', this.email);
    // Aquí puedes agregar la lógica para guardar la imagen de perfil si es necesario
    console.log('Datos guardados:', { username: this.username, email: this.email });
  }

  async selectImage() {
    // Lógica para seleccionar una imagen (puedes usar el plugin que instalaste anteriormente)
  }
  goToHome() {
    this.router.navigate(['/home']);  // Navega a la página Home
  }
}
