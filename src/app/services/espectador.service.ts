import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {

  constructor(private _http:HttpClient) { }

  obtenerEspectadores():Observable<any> {
    let httpOption = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
      return this._http.get('http://localhost:3000/api/espectador/', httpOption);
  }

  obtenerEspectador(id:string):Observable<any> {
    let httpOption = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })}
      const url = `http://localhost:3000/api/ticket/${id}`;

      return this._http.get(url, httpOption);
    
  } 
}
