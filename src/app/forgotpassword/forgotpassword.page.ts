import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  constructor(private router: Router) { }  // Inyecta el Router en el constructor

  ngOnInit() {
  }

  goToLoginscreen() {
    this.router.navigate(['/loginscreen']);  // Navega a la página Home
  }

}
