import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';  // Importar Storage

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  currentWeekDays: number[] = []; // Días de la semana actual (números del mes)
  today: number = new Date().getDay();  // Día de la semana actual (0 es Sunday, 6 es Saturday)
  currentDate: Date = new Date();  // Fecha actual
  username: string = '';  // Variable para almacenar el nombre de usuario
  
  trackingTime: Date | null = null;  // Variable para la hora de seguimiento
  alarmTime: string | null = null;   // Variable para la hora de la alarma
  trackingStarted: boolean = false;  // Flag para saber si el seguimiento ha comenzado

  constructor(private router: Router, private storage: Storage) {
    this.generateCurrentWeekDays();
    this.loadUsername();  // Cargar el nombre de usuario desde el almacenamiento
  }

  // Función para cargar el nombre de usuario desde el almacenamiento
  async loadUsername() {
    this.username = await this.storage.get('username') || 'Guest';  // Si no se encuentra, se asigna 'Guest'
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

  // Navegación a la página de perfil
  goToPerfil() {
    this.router.navigate(['/perfil']);
  }

  // Acción para el botón de "Start Tracking"
  startTracking() {
    this.trackingStarted = true;  // Mostrar el formulario
    this.trackingTime = new Date();  // Guardar la hora actual
    console.log('Tracking started at:', this.trackingTime);
  }

  // Guardar la alarma y la hora de seguimiento
  async saveAlarm() {
    if (this.alarmTime) {
      console.log('Alarm set for:', this.alarmTime);
      await this.storage.set('alarmTime', this.alarmTime);  // Guardar la hora de la alarma en el almacenamiento
    }
  }
}

