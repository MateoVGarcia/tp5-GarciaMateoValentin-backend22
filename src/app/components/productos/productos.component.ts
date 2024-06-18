import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productos!: Array<any>;
  nombre!: string;
  descripcion!: string;
  imagen!: string;
  precio!: number;
  stock!: number;
  destacado!: boolean;

  constructor(private productosService: ProductosService){
    this.productos=new Array<any>();
    this.nombre='';
    this.descripcion='';
    this.imagen='';
    this.precio=0;
    this.stock=0;
    this.destacado=false;
    this.obtenerProductosDestacados()
  }

  obtenerProductos() {
    this.productosService.getProductos().subscribe(
      
      data => {
        this.productos = data;
        console.log(this.productos);
      },
      error=>{
        console.log(error);
      }
    )
  }

  
  obtenerProductosDestacados() {
    this.productosService.getProductosDestacados().subscribe(
      
      data => {
        this.productos = data;
        console.log(this.productos);
      },
      error=>{
        console.log(error);
      }
    )
  }

  guardarProducto(){
 this.productosService.crearProducto(this.nombre, this.descripcion, this.imagen, this.precio, this.stock, this.destacado ).subscribe(

 )
  }
}
