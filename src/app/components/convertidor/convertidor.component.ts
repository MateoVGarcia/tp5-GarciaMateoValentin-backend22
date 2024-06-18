import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConvertidorApiService } from '../../services/convertidor-api.service';
import { ConvertidorService } from '../../services/convertidor.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-convertidor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './convertidor.component.html',
  styleUrl: './convertidor.component.css'
})

export class ConvertidorComponent {

cantidadOrigen!:number;
cantidadDestino!:number;
monedaOrigen!:string;
monedaDestino!:string;
rate!:number;
email!:string;
transacciones!:Array<any>;
monedaOFiltro!:string;
monedaDFiltro!:string;

constructor(private convertidorApiService:ConvertidorApiService, private convertidorService:ConvertidorService){
this.cantidadOrigen = 0;
this.cantidadDestino = 0;
this.monedaDestino = ""; 
this.monedaOrigen = "";
this.rate=0;
this.email="";
this.transacciones=new Array<any>;
}


convertirCantidad(){
  this.convertidorApiService.convertirCantidad(this.monedaOrigen, this.monedaDestino, this.cantidadOrigen).subscribe(
    data => {
      this.cantidadDestino=data.total;
      this.rate=data.rate;
      console.log(data);
      console.log(this.cantidadDestino);
      this.guardarTransaccion();
    },
      error=>{
        console.log(error);
      }
  )
}

guardarTransaccion(){
  this.convertidorService.crearTransaccion(this.monedaOrigen, this.monedaDestino, this.cantidadOrigen, this.cantidadDestino, this.rate, this.email).subscribe(
    data => {
      console.log(data);
    },
      error=>{
        console.log(error);
      }
  )
}

obtenerTransacciones(){
  this.convertidorService.obtenerTransacciones().subscribe(
    data => {
      this.transacciones=data;
      console.log(data);
    },
      error=>{
        console.log(error);
      }
  )
}

obtenerTransaccionesFiltradas(){
  this.convertidorService.obtenerTransaccionesFiltrado(this.monedaOFiltro, this.monedaDFiltro).subscribe(
    data => {
      this.transacciones=data;
      console.log(data);
    },
      error=>{
        console.log(error);
      }
  )
}

}
