import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  username!: string;
  email!: string;
  profileImage!: string;

  constructor(private storage: Storage, private router: Router) {
    this.initializeStorage();
  }

  async ngOnInit() {
    this.loadUserData();
  }

  async initializeStorage() {
    await this.storage.create();
  }

  async loadUserData() {
    this.username = await this.storage.get('username') || '';
    this.email = await this.storage.get('email') || '';
    this.profileImage = await this.storage.get('profileImage') || 'assets/default-profile.png';  // Ruta a una imagen por defecto
  }

  async saveProfile() {
    await this.storage.set('username', this.username);
    await this.storage.set('email', this.email);
    await this.storage.set('profileImage', this.profileImage);  // Guardar la imagen de perfil
    console.log('Datos guardados:', { username: this.username, email: this.email, profileImage: this.profileImage });
  }

  selectImage() {
    // Simular un clic en el input de tipo file
    const fileInput = document.getElementById('imageInput') as HTMLInputElement;
    fileInput.click();
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImage = e.target.result;  // Actualizar la imagen de perfil con el archivo seleccionado
      };
      reader.readAsDataURL(file);
    }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}

