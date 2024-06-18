import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(private _http:HttpClient) { }

  getProductos():Observable<any>{
    let httpOption = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
      return this._http.get('http://localhost:3000/api/producto/', httpOption);
  }

  getProductosDestacados():Observable<any>{
    let httpOption = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
      return this._http.get('http://localhost:3000/api/producto/destacados', httpOption);
  }

  crearProducto( nombre: string, descripcion: string, img:string, precio:number, stock: number, destacado: boolean): Observable<any>{

      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      })
    
  
      const body = {
        nombre: nombre,
        descripcion: descripcion,
        imagen: img,
        precio: precio,
        stock: stock,
        destacado: destacado
      };
  
      return this._http.post<any>('http://localhost:3000/api/producto/', body, { headers });
    }
}
