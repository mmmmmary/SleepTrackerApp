import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  // Días de la semana actual (números del mes)
  currentWeekDays: number[] = [];

  today: number = new Date().getDay();  // Día de la semana actual (0 es Sunday, 6 es Saturday)
  currentDate: Date = new Date();  // Fecha actual

  constructor(private router: Router) {
    this.generateCurrentWeekDays();
  }

  // Función para generar los números de los días del mes correspondientes a la semana actual
  generateCurrentWeekDays() {
    const startOfWeek = this.getStartOfWeek(this.currentDate);
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      this.currentWeekDays.push(day.getDate());  // Agregamos el número del día del mes
    }
  }

  // Función para obtener el primer día de la semana (lunes)
  getStartOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - (day === 0 ? 6 : day - 1);  // Ajustamos para que empiece en lunes
    return new Date(date.setDate(diff));
  }

  // Función para verificar si el día actual es hoy
  isToday(dayIndex: number): boolean {
    return (dayIndex + 1) % 7 === this.today;  // Ajustamos para que el lunes sea el primer día
  }

  // Navegación a la página de login
  goToLogin() {
    this.router.navigate(['/login']);
  }

  // Acción temporal para el botón de "Start Tracking"
  startTracking() {
    console.log('Tracking started');
  }
}
