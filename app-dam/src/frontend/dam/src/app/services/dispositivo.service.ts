import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Dispositivo } from '../interfaces/dispositivo';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  private apiUrl = 'https://glowing-fortnight-6jvqjpg9964hrjp9-8000.app.github.dev/dispositivo'; // Ajusta si es necesario

  constructor(private _http: HttpClient) {}

  // Método para obtener dispositivos
  getDispositivos(): Promise<Dispositivo[]> {
    return firstValueFrom(this._http.get<Dispositivo[]>(this.apiUrl));
  }
  getDispositivoById(id: number): Promise<Dispositivo> {
    return firstValueFrom(
      this._http.get<Dispositivo>(`https://glowing-fortnight-6jvqjpg9964hrjp9-8000.app.github.dev/dispositivo/${id}`)
    );
  }
  
  cambiarEstadoValvula(id: number, apertura: boolean): Promise<void> {
    return firstValueFrom(
      this._http.post<void>(
        `https://glowing-fortnight-6jvqjpg9964hrjp9-8000.app.github.dev/dispositivo/valvula`,
        { apertura: apertura ? 1 : 0 }
      )
    );
  }
  
  getMediciones(id: number): Promise<{ medicionId: number; fecha: string; valor: string }[]> {
    return firstValueFrom(
      this._http.get<{ medicionId: number; fecha: string; valor: string }[]>(
        `https://glowing-fortnight-6jvqjpg9964hrjp9-8000.app.github.dev/dispositivo/${id}/mediciones`
      )
    );
  }
  
}