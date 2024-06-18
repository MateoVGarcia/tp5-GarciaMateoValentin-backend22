import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvertidorService {

  constructor(private _http:HttpClient) { }


  obtenerTransaccionesFiltrado(monedaOrigen: string, monedaDestino:string): Observable<any> { 
    let httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    }),
      }
      const url = `http://localhost:3000/api/transaccion/${monedaOrigen}/${monedaDestino}`;

      return this._http.get(url, httpOptions);
    }
    
  
  obtenerTransacciones():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this._http.get<any>('http://localhost:3000/api/transaccion/', { headers });
  }
  crearTransaccion( monedaOrigen: string, monedaDestino: string, cantidadOrigen:number, cantidadDestino: number, tasaConversion:number, email:string): Observable<any>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
  
  
    const body = {
      "monedaOrigen": monedaOrigen,
          "cantidadOrigen": cantidadOrigen,
          "monedaDestino": monedaDestino,
          "cantidadDestino": cantidadDestino, 
          "emailCliente": email,
          "tasaConversion": tasaConversion,
    };
  
    return this._http.post<any>('http://localhost:3000/api/transaccion/', body, { headers });
  }


}
