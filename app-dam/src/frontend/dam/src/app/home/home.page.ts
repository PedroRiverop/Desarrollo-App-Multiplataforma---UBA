import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';
import { Dispositivo } from '../interfaces/dispositivo';
import { Router } from '@angular/router';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonToolbar, IonHeader, IonTitle, IonItem, IonAvatar, IonIcon, IonLabel, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonList,
    IonItem,
    IonAvatar,
    IonIcon,
    IonLabel,
    IonButton,
    CommonModule,
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  dispositivos: any[] = []; // Propiedad para almacenar dispositivos

  constructor(
    private dispositivoService: DispositivoService, // Servicio para cargar dispositivos
    private router: Router // Router para navegar a los detalles
  ) {}

  // Método que se ejecuta al inicializar el componente
  async ngOnInit() {
    try {
      this.dispositivos = await this.dispositivoService.getDispositivos(); // Llama al servicio y almacena los dispositivos
    } catch (error) {
      console.error('Error al cargar dispositivos:', error);
    }
  }

  // Método para navegar a la página de detalles de un dispositivo
  verDetalle(dispositivoId: number) {
    this.router.navigate([`/dispositivo`, dispositivoId]); // Navega a /dispositivo/:id
  }

  verMediciones(dispositivoId: number) {
    this.router.navigate([`/dispositivo`, dispositivoId, 'mediciones']);
  }
}

