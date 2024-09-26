import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  currentWeekDays: number[] = [];
  today: number = new Date().getDay();
  currentDate: Date = new Date();
  username: string = '';

  trackingStarted: boolean = false;
  trackingTime: Date | null = null;
  alarmTime: string = '';

  constructor(private router: Router, private storage: Storage) {
    this.generateCurrentWeekDays();
  }

  // Inicializar almacenamiento al iniciar la página
  async ngOnInit() {
    await this.initStorage();
    await this.loadUsername(); // Cargar el nombre de usuario después de inicializar el almacenamiento
  }

  async initStorage() {
    await this.storage.create();
  }

  async loadUsername() {
    this.username = await this.storage.get('username') || 'Guest';
    console.log('Username cargado:', this.username);
  }

  generateCurrentWeekDays() {
    const startOfWeek = this.getStartOfWeek(this.currentDate);
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      this.currentWeekDays.push(day.getDate());
    }
  }

  getStartOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - (day === 0 ? 6 : day - 1);
    return new Date(date.setDate(diff));
  }

  isToday(dayIndex: number): boolean {
    return (dayIndex + 1) % 7 === this.today;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToPerfil() {
    this.router.navigate(['/perfil']);
  }

  startTracking() {
    this.trackingStarted = true;
    this.trackingTime = new Date();
    console.log('Tracking started at:', this.trackingTime);
  }

  async saveAlarm() {
    if (this.alarmTime) {
      await this.storage.set('alarmTime', this.alarmTime);
      console.log('Alarm set for:', this.alarmTime);
      alert('Alarm set for ' + this.alarmTime);
    } else {
      console.log('No alarm time set');
      alert('Please set an alarm time.');
    }
  }
}
