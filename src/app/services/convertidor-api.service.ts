import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvertidorApiService {

  constructor(private _http: HttpClient) { }

  convertirCantidad(monedaOrigen: string, monedaDestino: string, cantidadOrigen: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '60fbfcd7d1msh17175427e7fabd1p189c3djsn8c0734d4621d',
        'x-rapidapi-host': 'currency-converter241.p.rapidapi.com'
      }),

      params: new HttpParams()
        .set('amount', cantidadOrigen)
        .set('from', monedaOrigen)
        .set('to', monedaDestino)

    }
    return this._http.get('https://currency-converter241.p.rapidapi.com/convert', httpOptions);
  }
}
