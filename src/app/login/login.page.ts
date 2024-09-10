import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importa el Router para la navegación

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }  // Inyecta el Router en el constructor

  ngOnInit() {
  }

  // Método para navegar a la página de inicio (Home)
  goToHome() {
    this.router.navigate(['/home']);  // Navega a la página Home
  }
  // Método para navegar a Loginscreen 
  goToLoginscreen() {
    this.router.navigate(['/loginscreen']);  // Navega a la página Home
  }
}
