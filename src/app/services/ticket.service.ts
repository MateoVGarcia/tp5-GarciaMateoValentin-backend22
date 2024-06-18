import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http:HttpClient) { }

  obtenerTickets():Observable<any>{
    let httpOption = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
      return this._http.get('http://localhost:3000/api/ticket/', httpOption);
  }

  eliminarTicket(id : string):Observable<any>{
    let httpOption = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    const url = `http://localhost:3000/api/ticket/${id}`;
      return this._http.delete(url, httpOption);
  }
  crearTicket(
    precioTicket: number,
    categoriaEspectador: string,
    fechaCompra: string,
    espectador: string // Asumiendo que espectador es el _id del espectador seleccionado
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      precioTicket: precioTicket,
      categoriaEspectador: categoriaEspectador,
      fechaCompra: fechaCompra,
      espectador: espectador // Asegúrate de que espectador sea el _id del espectador seleccionado
    };

    return this._http.post<any>('http://localhost:3000/api/ticket/', body, { headers });
  }

}
