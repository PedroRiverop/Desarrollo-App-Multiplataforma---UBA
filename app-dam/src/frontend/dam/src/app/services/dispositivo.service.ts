import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Dispositivo } from '../interfaces/dispositivo';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  private apiUrl = 'https://musical-garbanzo-7g76gx9vvpw3rxj-8000.app.github.dev/dispositivo'; // Ajusta si es necesario

  constructor(private _http: HttpClient) {}

  // Método para obtener dispositivos
  getDispositivos(): Promise<Dispositivo[]> {
    return firstValueFrom(this._http.get<Dispositivo[]>(this.apiUrl));
  }
  getDispositivoById(id: number): Promise<Dispositivo> {
    return firstValueFrom(
      this._http.get<Dispositivo>(`https://musical-garbanzo-7g76gx9vvpw3rxj-8000.app.github.dev/dispositivo/${id}`)
    );
  }
  
  cambiarEstadoValvula(id: number, apertura: boolean): Promise<void> {
    return firstValueFrom(
      this._http.post<void>(
        `https://musical-garbanzo-7g76gx9vvpw3rxj-8000.app.github.dev/dispositivo/valvula`,
        { apertura: apertura ? 1 : 0 }
      )
    );
  }
  
  getMediciones(id: number): Promise<{ medicionId: number; fecha: string; valor: string }[]> {
    return firstValueFrom(
      this._http.get<{ medicionId: number; fecha: string; valor: string }[]>(
        `https://musical-garbanzo-7g76gx9vvpw3rxj-8000.app.github.dev/dispositivo/${id}/mediciones`
      )
    );
  }
  
  abrirValvula(id: number): Promise<any> {
    return firstValueFrom(
      this._http.post(`https://musical-garbanzo-7g76gx9vvpw3rxj-8000.app.github.dev/dispositivo/${id}/abrir`, {})
    );
  }
  
  cerrarValvula(id: number): Promise<any> {
    return firstValueFrom(
      this._http.post(`https://musical-garbanzo-7g76gx9vvpw3rxj-8000.app.github.dev/dispositivo/${id}/cerrar`, {})
    );
  }
  
  getEstadoValvula(id: number): Promise<any> {
    return firstValueFrom(
      this._http.get(`https://musical-garbanzo-7g76gx9vvpw3rxj-8000.app.github.dev/dispositivo/${id}/estado`)
    );
  }
  getUltimaMedicion(dispositivoId: number) {
    return firstValueFrom(
      this._http.get<{ fecha: string; valor: string }>(`https://musical-garbanzo-7g76gx9vvpw3rxj-8000.app.github.dev/dispositivo/${dispositivoId}/ultima-medicion`)
    );
  }
  

}