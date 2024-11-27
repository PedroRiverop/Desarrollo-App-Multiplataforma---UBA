import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Observable, Subscription, fromEvent, interval } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../interfaces/dispositivo';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    CommonModule,]
})
export class DispositivoPage implements OnInit{

  dispositivo!: Dispositivo;
  dispositivoId!: number;

  constructor(
    private route: ActivatedRoute,
    private dispositivoService: DispositivoService
  ) {}

  async ngOnInit() {
    this.dispositivoId = Number(this.route.snapshot.paramMap.get('id'));
    await this.cargarDispositivo();
  }

  async cargarDispositivo() {
    try {
      this.dispositivo = await this.dispositivoService.getDispositivoById(
        this.dispositivoId
      );
    } catch (error) {
      console.error('Error al cargar el dispositivo:', error);
    }
  }

  async cambiarEstadoValvula(apertura: boolean) {
    try {
      await this.dispositivoService.cambiarEstadoValvula(
        this.dispositivoId,
        apertura
      );
      alert(`Válvula ${apertura ? 'abierta' : 'cerrada'} correctamente`);
    } catch (error) {
      console.error('Error al cambiar el estado de la válvula:', error);
      alert('No se pudo cambiar el estado de la válvula.');
    }
  }
}
